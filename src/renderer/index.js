/* The below source code is licensed under MIT. */

import '../styles.scss';
import Logger from './modules/logger';
import Manager from './modules/manager';
import Patcher from './modules/patcher';
import Webpack from './modules/webpack';

import modules from './modules/modules';

import CreateModal from './components/CreateModal';
import SettingsSections from './components/SettingsSections';

const patchSettingsView = (retry) => {
  if (!kernel.packages.getPackages()['kernel-settings'] || retry) {
    try {
      const { SettingsView } = modules();
      Patcher.after(SettingsView.prototype, 'getPredicateSections', function (_, res) {
        const ChangeLogIndex = res.findIndex(s => s?.section?.toLowerCase() === 'changelog');
        res.splice(ChangeLogIndex, 0,
          SettingsSections.Header(),
          SettingsSections.Section(),
          SettingsSections.Separator());
        return res;
      });
    } catch (error) {
      Logger.error('Failed to patch SettingsView.', error);
    }
  } else {
    let count = 3;
    let checkInterval = setInterval(() => {
      if (KernelSettings) {
        clearInterval(checkInterval);
        Patcher._patches.add(KernelSettings.register('JS Snippets', () => {
          return <SettingsSections.Panel />;
        }));
      }

      if (!count) {
        patchSettingsView(true);
        clearInterval(checkInterval);
        Logger.warn([
          'KernelSettings was found but I could not',
          'find an already existing Kernel Settings Tab',
          '(try updating?), creating our own instead.'
        ].join(' '));
      }

      count--;
    }, 1000);
  }
};

const patchMessageContextMenu = () => {
  const { ContextMenu, ContextMenuActions, ModalActions } = modules();
  const lazyPatchContextMenu = async (displayName, patch) => {
    const filter = m => m.default && m.default.displayName === displayName;
    const module = Webpack.getModule(filter); if (module) patch(module);
    else {
      let lazyPatch = Patcher.before(ContextMenuActions, 'openContextMenuLazy', args => {
        const lazyRender = args[1];
        args[1] = async () => {
          const render = await lazyRender(args[0]);

          return config => {
            const menu = render(config);

            if (menu?.type?.displayName === displayName && patch) {
              lazyPatch(); patch(Webpack.getModule(filter)); patch = false;
            }

            return menu;
          };
        };
        return args;
      });
    }
  };


  lazyPatchContextMenu('MessageContextMenu', MessageContextMenu => {
    Patcher.after(MessageContextMenu, 'default', ([args], ret) => {
      const match = args.message.content.match(/```js(.*?)```/s)?.[1];
      if (!match) return ret;

      ret.props.children.splice(4, 0,
        <ContextMenu.MenuGroup>
          <ContextMenu.MenuItem
            id='jss-actions'
            label='JSS Actions'>
            <ContextMenu.MenuItem
              id='jss-run'
              label='Run Snippet'
              action={() => {
                Manager.runSnippet('from ContextMenu', match);
              }} />
            <ContextMenu.MenuItem
              id='jss-add'
              label='Add Snippet'
              action={() => {
                ModalActions.openModal(event => {
                  return <CreateModal event={event} newSnippet={match} />;
                });
              }} />
            <ContextMenu.MenuItem
              id='jss-add-startup'
              label='Add Startup Snippet'
              action={() => {
                ModalActions.openModal(event => {
                  return <CreateModal event={event} newSnippet={match} startup={true} />;
                });
              }} />
          </ContextMenu.MenuItem>
        </ContextMenu.MenuGroup>
      );
      return ret;
    });
  });
};

let styleNode;
const loadStyles = () => {
  const style = _JSS.loadStyle('dist/styles.css');
  if (!style) return Logger.warn('Could not find styles file.');

  const styleElement = Object.assign(document.createElement('style'), {
    id: 'js-snippets-style', textContent: style,
  });

  styleNode = document.head.appendChild(styleElement);
};

export default {
  start() {
    Webpack.onLoad(async () => {
      window.React = Webpack.getByProps('createElement', 'useEffect');

      loadStyles();
      patchSettingsView();
      patchMessageContextMenu();

      window.JSS = { Logger, Patcher, Webpack };

      Logger.info('Package finished loading!');

      await Promise.all(
        Object.keys(Manager.snippets).map(async (snippet) => {
          if (!Manager.getSnippet(snippet)[1]) return;
          await Manager.runSnippet(snippet, null, true);
        })
      );

      Logger.info(`Startup snippets finished loading!`);
    });
  },
  stop() {
    Patcher.unpatchAll();
    Manager.unpatchAll();
    styleNode?.remove();
  },
};

