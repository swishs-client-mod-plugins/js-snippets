/* The below source code is licensed under MIT. */

class Logger {
  static #log(type, information) {
    console[type]('%c[JS-Snippets]', 'color: #80b1ff; font-weight: 700;', ...information);
  }

  static __initStatic() {this.log = (...information) => this.#log('log', information);}
  static __initStatic2() {this.info = (...information) => this.#log('info', information);}
  static __initStatic3() {this.warn = (...information) => this.#log('warn', information);}
  static __initStatic4() {this.error = (...information) => this.#log('error', information);}
} Logger.__initStatic(); Logger.__initStatic2(); Logger.__initStatic3(); Logger.__initStatic4();

var logger = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Logger
});

function _optionalChain$3(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }/* The below source code is licensed under MIT. */

class Webpack {
  
  static getWebpackInstance() {
    let list, id = Math.random().toString().slice(2, 5);
    webpackChunkdiscord_app.push([[id], {}, e => list = e]);
    webpackChunkdiscord_app.pop();
    this.WebpackInstance = list.c;
  }

  static onLoad(onLoadFunction) {
    new Promise(resolve => {
      setInterval(() => {
        if (!Array.isArray(window['webpackChunkdiscord_app'])) return;
        const FluxDispatcher = this.getByProps('dirtyDispatch');
        _optionalChain$3([FluxDispatcher, 'optionalAccess', _ => _.subscribe, 'call', _2 => _2('START_SESSION', function onStartSession() {
          FluxDispatcher.unsubscribe('START_SESSION', onStartSession); resolve();
        })]);
      }, 100);
    }).then(onLoadFunction);
  }

  static #getModule(filter, returnAll = false) {
    if (!this.WebpackInstance) this.getWebpackInstance();

    const findModule = () => {
      const matches = Object.values(this.WebpackInstance).map((mdl) => {
        const module = _optionalChain$3([mdl, 'optionalAccess', _3 => _3.exports]);
        if (_optionalChain$3([module, 'optionalAccess', _4 => _4.default]) && module.__esModule && filter(module.default))
          return module.default;
        if (module && filter(module)) return module;
      }).filter(Boolean);
      return returnAll ? matches : matches[0];
    };

    try { return findModule(); } catch (error) {
      Logger.error(`Failed to parse: ${filter}`, error);
    }
  }

  static #filters = {
    props: (props) => (module) => props.every(prop => module[prop]),
    prototypes: (protoProps) => (module) => protoProps.every(prop => _optionalChain$3([module, 'access', _5 => _5.prototype, 'optionalAccess', _6 => _6[prop]])),
    displayName: (displayName, dexport) => (module) => _optionalChain$3([(dexport ? module : module.default), 'optionalAccess', _7 => _7.displayName]) === displayName,
  };

  static __initStatic() {this.getModule = (filter) => this.#getModule(filter);}
  static __initStatic2() {this.getAllModules = (filter) => this.#getModule(filter, true);}

  static __initStatic3() {this.getByProps = (...props) => this.#getModule(this.#filters.props(props));}
  static __initStatic4() {this.getByPropsAll = (...props) => this.#getModule(this.#filters.props(props), true);}

  static __initStatic5() {this.getByPrototype = (...protoProps) => this.#getModule(this.#filters.prototypes(protoProps));}
  static __initStatic6() {this.getByPrototypeAll = (...protoProps) => this.#getModule(this.#filters.prototypes(protoProps), true);}

  static __initStatic7() {this.getByDisplayName = (displayName, dexport = true) => this.#getModule(this.#filters.displayName(displayName, dexport));}
  static __initStatic8() {this.getByDisplayNameAll = (displayName, dexport = true) => this.#getModule(this.#filters.displayName(displayName, dexport), true);}

  /* Aliases */
  static __initStatic9() {this.findModule = this.getModule;}
  static __initStatic10() {this.findAllModules = this.getAllModules;}
  static __initStatic11() {this.findByProps = this.getByProps;}
  static __initStatic12() {this.findByPropsAll = this.getByPropsAll;}
  static __initStatic13() {this.findByPrototypes = this.getByPrototype;}
  static __initStatic14() {this.findByPrototypesAll = this.getByPrototypeAll;}
  static __initStatic15() {this.findByDisplayName = this.getByDisplayName;}
  static __initStatic16() {this.findByDisplayNameAll = this.getByDisplayNameAll;}
} Webpack.__initStatic(); Webpack.__initStatic2(); Webpack.__initStatic3(); Webpack.__initStatic4(); Webpack.__initStatic5(); Webpack.__initStatic6(); Webpack.__initStatic7(); Webpack.__initStatic8(); Webpack.__initStatic9(); Webpack.__initStatic10(); Webpack.__initStatic11(); Webpack.__initStatic12(); Webpack.__initStatic13(); Webpack.__initStatic14(); Webpack.__initStatic15(); Webpack.__initStatic16();

var webpack = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Webpack
});

/* The below source code is licensed under MIT. */

let modules;
Webpack.onLoad(() => {
  modules = {
    i18n: Webpack.getByProps('getLocale'),
    Text: Webpack.getByDisplayName('Text'),
    PlusIcon: Webpack.getByDisplayName('Plus'),
    TabBar: Webpack.getByDisplayName('TabBar'),
    PlayIcon: Webpack.getByDisplayName('Play'),
    InfoIcon: Webpack.getByDisplayName('Info'),
    Button: Webpack.getByProps('DropdownSizes'),
    Header: Webpack.getByProps('Sizes', 'Tags'),
    TrashIcon: Webpack.getByDisplayName('Trash'),
    ArrowIcon: Webpack.getByDisplayName('Caret'),
    PencilIcon: Webpack.getByDisplayName('Pencil'),
    RocketIcon: Webpack.getByDisplayName('Rocket'),
    FormText: Webpack.getByDisplayName('FormText'),
    FormTitle: Webpack.getByDisplayName('FormTitle'),
    TextInput: Webpack.getByDisplayName('TextInput'),
    showToast: Webpack.getByProps('showToast').showToast,
    CheckmarkIcon: Webpack.getByDisplayName('Checkmark'),
    FormSection: Webpack.getByDisplayName('FormSection'),
    SettingsView: Webpack.getByDisplayName('SettingsView'),
    ModalComponents: Webpack.getByProps('ModalCloseButton'),
    ContextMenu: Webpack.getByProps('MenuGroup', 'MenuItem'),
    ContextMenuActions: Webpack.getByProps('openContextMenu'),
    createToast: Webpack.getByProps('createToast').createToast,
    ModalActions: Webpack.getByProps('openModal', 'openModalLazy'),
    KeyboardShortcut: Webpack.getByDisplayName('KeyboardShortcut'),
    Tooltip: Webpack.getByProps('TooltipContainer').TooltipContainer,
    Scroller: Webpack.getByProps('AdvancedScrollerThin').AdvancedScrollerThin,
    makeCodeBlock: Webpack.getByProps('parse', 'parseTopic').defaultRules.codeBlock.react,
    classes: {
      Scrollbar: Webpack.getByProps('scrollbarGhostHairline'),
      ButtonColors: Webpack.getByProps('dangerous', 'selected'),
    }
  };
});

var modules$1 = () => modules;

function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain$2(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }/* The below source code is licensed under MIT. */

class Manger {
  static #JSS = window._JSS;
  static #PATH = 'src/snippets.json';

  static makeToast(info, success) {
    const { createToast, showToast } = modules$1();

    showToast(createToast(info, Number(success) || 2));
  }

  static __initStatic() {this.unpatches = {};}
  static unpatchAll() {
    Object.keys(this.unpatches).forEach(async key => {
      try {
        await this.unpatches[key]();
        delete this.unpatches[key];
      } catch (error) {
        this.makeToast(`Error running the cleanup function for ${key}! Check console for more details.`);
        return Logger.error(`Error running the cleanup function for ${key}!`, error);
      }
    });
  }

  static get snippets() {
    const snippets = this.#JSS.readFile(this.#PATH);
    return snippets ? JSON.parse(snippets) : {};
  }

  static #writeSnippets(data) {
    this.#JSS.writeFile(this.#PATH, JSON.stringify(data, null, '\t'), (error) => {
      this.makeToast(`Error trying to write to the snippets file! Check console for more details.`);
      Logger.error('Error trying to write to the snippets file!', error);
    });
  };

  static backupSnippets() {
    const { i18n } = modules$1();
    const timestamp = new Date().toLocaleString(
      i18n.getLocale(), { hourCycle: 'h24' }
    ).replace(/[\/:]/g, '-').replace(', ', '-');

    this.#JSS.writeFile(`src/backup-${timestamp}.json`, JSON.stringify(this.snippets), (error) => {
      this.makeToast(`Error trying to back up the snippets file! Check console for more details.`);
      Logger.error('Error trying to back up the snippets file!', error);
    });
  }

  static getSnippet(key) {
    let snippets = this.snippets;

    if (!Object.keys(snippets).length)
      return ['', false];

    return snippets[key];
  }

  static createSnippet(key, value) {
    let snippets = this.snippets;

    try { Object.assign(snippets, { [key]: value ? [value, false] : ['', false] }); } catch (error) {
      this.makeToast(`Error creating snippet ${key}! Check console for more details.`);
      return Logger.error(`Error creating snippet ${key}.`, error);
    }

    this.#writeSnippets(snippets);
  }

  static deleteSnippet(key) {
    let snippets = this.snippets;

    try { delete snippets[key]; } catch (error) {
      this.makeToast(`Error deleting snippet ${key}! Check console for more details.`);
      return Logger.error(`Error deleting snippet ${key}!`, error);
    }

    this.#writeSnippets(snippets);
  }

  static updateSnippet(key, value = this.snippets[key][0], startup = this.snippets[key][1]) {
    let snippets = this.snippets;

    try { Object.assign(snippets, { [key]: [value, startup] }); } catch (error) {
      this.makeToast(`Error updating snippet ${key}! Check console for more details.`);
      return Logger.error(`Error updating snippet ${key}!`, error);
    }

    this.#writeSnippets(snippets);
  }

  static changeName(key, newKey) {
    let snippets = this.snippets;

    try {
      let index = Object.keys(snippets).indexOf(key);
      let array = Object.keys(snippets).map((snippet) => {
        return [snippet, snippets[snippet]];
      });

      array.splice(index, 1, [newKey, snippets[key]]);

      snippets = Object.fromEntries(array);
    } catch (error) {
      this.makeToast(`Error renaming snippet ${key} to ${newKey}! Check console for more details.`);
      return Logger.error(`Error renaming snippet ${key} to ${newKey}!`, error);
    }

    this.#writeSnippets(snippets);
  }

  static moveSnippet(key, index) {
    let snippets = this.snippets;

    try {
      let value = snippets[key];

      let array = Object.keys(snippets).map((snippet) => {
        if (snippet !== key) return [snippet, snippets[snippet]];
      }).filter(Boolean);

      array.splice(index, 0, [key, value]);

      snippets = Object.fromEntries(array);
    } catch (error) {
      this.makeToast(`Error moving snippet ${key}! Check console for more details.`);
      return Logger.error(`Error moving snippet ${key}!`, error);
    }


    this.#writeSnippets(snippets);
  }

  static async runSnippet(key, value, startup) {
    let snippet = value || _optionalChain$2([this, 'access', _ => _.snippets, 'access', _2 => _2[key], 'optionalAccess', _3 => _3[0]]);

    if (!snippet) {
      return Logger.warn(`Snippet ${key} is empty!`);
    }

    // run cleanup function
    await _optionalChain$2([this, 'access', _4 => _4.unpatches, 'access', _5 => _5[key], 'optionalCall', _6 => _6()]);

    let returnValue;
    try {
      // define scope vars
      let Logger = (await Promise.resolve().then(function () { return logger; })).default;
      let Patcher = (await Promise.resolve().then(function () { return patcher; })).default;
      let Webpack = (await Promise.resolve().then(function () { return webpack; })).default;

      returnValue = await eval(`(async () => { ${snippet} })()`);
    } catch (error) {
      this.makeToast(`Error running snippet ${key}! Check console for more details.`);
      return Logger.error(`Error running snippet ${key}!`, error);
    }

    let unpatchReturn;
    if (typeof returnValue === 'function') {
      this.unpatches[key] = async () => {
        try {
          unpatchReturn = await returnValue();
          delete this.unpatches[key];
        } catch (error) {
          this.makeToast(`Error running the cleanup function for ${key}! Check console for more details.`);
          return Logger.error(`Error running the cleanup function for ${key}!`, error);
        }

        this.makeToast(`Successfully ran cleanup function for ${key}! Check console for more details.`, true);
        Logger.info(`Successfully ran cleanup function for ${key}!`, unpatchReturn ? ` Returned: ${unpatchReturn}` : '');
      };
    }

    _nullishCoalesce(startup, () => ( this.makeToast(`Successfully ran ${key}! Check console for more details.`, true)));
    Logger.info(`Successfully ran ${key}!`, returnValue ? ` Returned: ${returnValue}` : '');
  }
} Manger.__initStatic();

/* The below source code is licensed under MIT. */

class Patcher {
  static __initStatic() {this._patches = new Set();}

  // ENUMS
  static #AFTER = 'AFTER';
  static #BEFORE = 'BEFORE';
  static #INSTEAD = 'INSTEAD';
  static #RECON = 'RECON';

  static #peformUnpach(_, module, functionString, __, originalFunction) {
    module[functionString] = originalFunction;
    this._patches.delete(Array.from(this._patches)[this._patches.size - 1]);
  };

  static #performPatch(type, module, functionString, replacementFunction) {
    const originalFunction = module[functionString];
    const unpatch = () => this.#peformUnpach(...arguments, originalFunction);

    try {
      let returnValue, classCallback = this;
      module[functionString] = function (...args) {
        switch (type) {
          case classCallback.#AFTER:
            returnValue = originalFunction.apply(this, args);
            return replacementFunction(args, returnValue) || returnValue;

          case classCallback.#BEFORE:
            returnValue = replacementFunction(args);
            return originalFunction.apply(this, returnValue || args);

          case classCallback.#INSTEAD:
            return replacementFunction(args, originalFunction);

          case classCallback.#RECON:
            returnValue = originalFunction.apply(this, args);
            Logger.info(`Function: ${functionString} called!`, module, args, returnValue);
            // Treating this as the runOnce variable.
            if (replacementFunction) unpatch();
            return returnValue;
        }
      };

      Object.assign(module[functionString], originalFunction, {
        toString: () => originalFunction.toString(),
        __originalFunction: originalFunction
      });
    } catch (error) {
      Logger.error(`Failed to patch ${functionString}.`, error);
    }

    this._patches.add(unpatch);
    return unpatch;
  }

  static unpatchAll() {
    Array.from(this._patches).forEach(unpatch => {
      try { unpatch(); } catch (error) {
        Logger.error(`Could not unpatch function ${unpatch}!`);
      } Logger.info(`Successfully unpatched function ${unpatch}!`);
    });
    Logger.info('Unpatched all patches!');
  }

  static __initStatic2() {this.recon = (...args) => this.#performPatch(this.#RECON, ...args);}
  static __initStatic3() {this.after = (...args) => this.#performPatch(this.#AFTER, ...args);}
  static __initStatic4() {this.before = (...args) => this.#performPatch(this.#BEFORE, ...args);}
  static __initStatic5() {this.instead = (...args) => this.#performPatch(this.#INSTEAD, ...args);}
} Patcher.__initStatic(); Patcher.__initStatic2(); Patcher.__initStatic3(); Patcher.__initStatic4(); Patcher.__initStatic5();

var patcher = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Patcher
});

const _jsxFileName$7 = "/home/runner/work/js-snippets/js-snippets/src/renderer/components/CreateModal.jsx";/* The below source code is licensed under MIT. */

var CreateModal = ({ event, tabState = [0, 0, 0], existingName, newSnippet, startup }) => {
  const setCurrentSnippet = tabState[1];
  const [snippetName, setSnippetName] = React.useState(existingName || '');

  const {
    Header,
    Button,
    TextInput,
    FormTitle,
    ModalComponents,
  } = modules$1();

  const {
    ModalRoot,
    ModalHeader,
    ModalFooter,
    ModalContent,
    ModalCloseButton,
  } = ModalComponents;

  const updateSnippet = () => {
    if (!snippetName) return;

    if (existingName) {
      Manger.changeName(existingName, snippetName);
      setCurrentSnippet(snippetName);
    } else if (newSnippet) {
      Manger.createSnippet(snippetName, newSnippet);
      if (startup) Manger.updateSnippet(snippetName, undefined, startup);
    } else {
      Manger.createSnippet(snippetName);
      setCurrentSnippet(snippetName);
    }

    event.onClose();
  };

  const onEnter = (keyPressEvent) => {
    if (keyPressEvent.key === 'Enter')
      updateSnippet();
  };

  React.useEffect(() => {
    document.addEventListener('keydown', onEnter);
    return () => document.removeEventListener('keydown', onEnter);
  });

  return (
    React.createElement(ModalRoot, { size: "small", transitionState: event.transitionState, __self: undefined, __source: {fileName: _jsxFileName$7, lineNumber: 54}}
      , React.createElement(ModalHeader, {__self: undefined, __source: {fileName: _jsxFileName$7, lineNumber: 55}}
        , React.createElement(Header, { tag: "h2", size: Header.Sizes.SIZE_20, __self: undefined, __source: {fileName: _jsxFileName$7, lineNumber: 56}}, "Create Snippet"

        )
        , React.createElement(ModalCloseButton, {
          onClick: event.onClose,
          className: "jss-modal-create-closebutton", __self: undefined, __source: {fileName: _jsxFileName$7, lineNumber: 59}} )
      )
      , React.createElement(ModalContent, { className: "jss-modal-create-content", __self: undefined, __source: {fileName: _jsxFileName$7, lineNumber: 63}}
        , React.createElement(FormTitle, {__self: undefined, __source: {fileName: _jsxFileName$7, lineNumber: 64}}, "Snippet Name" )
        , React.createElement(TextInput, {
          autofocus: true,
          value: snippetName,
          onChange: setSnippetName,
          placeholder: "observeModuleFunctions!", __self: undefined, __source: {fileName: _jsxFileName$7, lineNumber: 65}} )
      )
      , React.createElement(ModalFooter, {__self: undefined, __source: {fileName: _jsxFileName$7, lineNumber: 71}}
        , React.createElement(Button, {
          onClick: updateSnippet,
          color: Button.Colors.GREEN, __self: undefined, __source: {fileName: _jsxFileName$7, lineNumber: 72}}, "Add Snippet"

        )
        , React.createElement(Button, {
          onClick: event.onClose,
          look: Button.Looks.LINK,
          color: Button.Colors.TRANSPARENT, __self: undefined, __source: {fileName: _jsxFileName$7, lineNumber: 77}}, "Cancel"

        )
      )
    )
  );
};

const _jsxFileName$6 = "/home/runner/work/js-snippets/js-snippets/src/renderer/components/SideBar.jsx";/* The below source code is licensed under MIT. */

var SideBar = ({ tabState, topPasses }) => {
  const [currentSnippet, setCurrentSnippet, forceUpdate] = tabState;
  const [collapsed, setCollapsed] = topPasses[2];

  const {
    TabBar,
    PlusIcon,
    Scroller,
    FormTitle,
    ArrowIcon,
    ContextMenu,
    ModalActions,
    ContextMenuActions,
    classes
  } = modules$1();

  return (
    React.createElement('div', { className: "jss-sidebar", style: collapsed ? { width: '47px' } : {}, __self: undefined, __source: {fileName: _jsxFileName$6, lineNumber: 25}}
      , React.createElement('div', { className: "jss-sidebar-topbar", __self: undefined, __source: {fileName: _jsxFileName$6, lineNumber: 26}}
        , collapsed || React.createElement(React.Fragment, null
          , React.createElement(FormTitle, { tag: "h3", __self: undefined, __source: {fileName: _jsxFileName$6, lineNumber: 28}}, "Snippets"

          )
          , React.createElement('div', {
            className: classes.ButtonColors.button,
            onClick: () => {
              ModalActions.openModal(event => {
                return React.createElement(CreateModal, { event: event, tabState: tabState, __self: undefined, __source: {fileName: _jsxFileName$6, lineNumber: 35}} );
              });
            }, __self: undefined, __source: {fileName: _jsxFileName$6, lineNumber: 31}}
            , React.createElement(PlusIcon, { height: "20", width: "20", __self: undefined, __source: {fileName: _jsxFileName$6, lineNumber: 38}} )
          )
        )
        , React.createElement('div', { className: classes.ButtonColors.button, onClick: () => setCollapsed(!collapsed), __self: undefined, __source: {fileName: _jsxFileName$6, lineNumber: 41}}
          , React.createElement(ArrowIcon, { height: "20", width: "20",
            direction: collapsed ? ArrowIcon.Directions.RIGHT : ArrowIcon.Directions.LEFT, __self: undefined, __source: {fileName: _jsxFileName$6, lineNumber: 42}} )
        )
      )
      , React.createElement('div', { className: "jss-sidebar-divider", __self: undefined, __source: {fileName: _jsxFileName$6, lineNumber: 46}} )
      , collapsed ||
        React.createElement(Scroller, { className: "jss-sidebar-scroller", fade: true, __self: undefined, __source: {fileName: _jsxFileName$6, lineNumber: 48}}
          , React.createElement(TabBar, {
            selectedItem: currentSnippet,
            type: TabBar.Types.SIDE,
            onItemSelect: setCurrentSnippet, __self: undefined, __source: {fileName: _jsxFileName$6, lineNumber: 49}}
            , Object.keys(Manger.snippets).map((snippet, index) => (
              React.createElement(TabBar.Item, { id: snippet, itemType: TabBar.Types.SIDE,
                onContextMenu: (event) => {
                  ContextMenuActions.openContextMenu(event, () => (
                    React.createElement(ContextMenu.default, { onClose: ContextMenuActions.closeContextMenu, __self: undefined, __source: {fileName: _jsxFileName$6, lineNumber: 57}}
                      , React.createElement(ContextMenu.MenuGroup, {__self: undefined, __source: {fileName: _jsxFileName$6, lineNumber: 58}}
                        , React.createElement(ContextMenu.MenuItem, {
                          id: "jss-update-name", label: "Change Snippet Name"  ,
                          action: () => {
                            ModalActions.openModal(event => (
                              React.createElement(CreateModal, { event: event, tabState: tabState, existingName: snippet, __self: undefined, __source: {fileName: _jsxFileName$6, lineNumber: 63}} )
                            ));
                          }, __self: undefined, __source: {fileName: _jsxFileName$6, lineNumber: 59}} )
                        , React.createElement(ContextMenu.MenuItem, {
                          id: "jss-run-snippet", label: "Run Snippet" ,
                          action: () => Manger.runSnippet(snippet), __self: undefined, __source: {fileName: _jsxFileName$6, lineNumber: 66}} )
                        , React.createElement(ContextMenu.MenuItem, {
                          id: "jss-move-up", label: "Move Snippet Above"  ,
                          action: () => {
                            Manger.moveSnippet(snippet, index - 1);
                            forceUpdate(value => !value);
                          }, __self: undefined, __source: {fileName: _jsxFileName$6, lineNumber: 69}} )
                        , React.createElement(ContextMenu.MenuItem, {
                          id: "jss-move-down", label: "Move Snippet Below"  ,
                          action: () => {
                            Manger.moveSnippet(snippet, index + 1);
                            forceUpdate(value => !value);
                          }, __self: undefined, __source: {fileName: _jsxFileName$6, lineNumber: 75}} )
                        , React.createElement(ContextMenu.MenuItem, {
                          id: "jss-delete", label: "Delete Snippet" , color: "colorDanger",
                          action: () => {
                            Manger.deleteSnippet(snippet);
                            if (snippet === currentSnippet)
                              setCurrentSnippet(Object.keys(Manger.snippets)[0]);
                            forceUpdate(value => !value);
                          }, __self: undefined, __source: {fileName: _jsxFileName$6, lineNumber: 81}} )
                      )
                    )
                  ));
                }, __self: undefined, __source: {fileName: _jsxFileName$6, lineNumber: 54}}
                , snippet
              )
            ))
          )
        )
    )
  );
};

const _jsxFileName$5 = "/home/runner/work/js-snippets/js-snippets/src/renderer/components/CleanIcon.jsx";/* Copyright (c) Google, Apache License 2.0 */

var CleanIcon = ({ width, height }) => (
  React.createElement('svg', { viewBox: "0 0 24 24"   , width: width, height: height, fill: "currentColor", __self: undefined, __source: {fileName: _jsxFileName$5, lineNumber: 4}}
    , React.createElement('path', { d: "M16,11h-1V3c0-1.1-0.9-2-2-2h-2C9.9,1,9,1.9,9,3v8H8c-2.76,0-5,2.24-5,5v7h18v-7C21,13.24,18.76,11,16,11z M19,21h-2v-3 c0-0.55-0.45-1-1-1s-1,0.45-1,1v3h-2v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3H9v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3H5v-5 c0-1.65,1.35-3,3-3h8c1.65,0,3,1.35,3,3V21z"   , __self: undefined, __source: {fileName: _jsxFileName$5, lineNumber: 5}} )
  )
);

const _jsxFileName$4 = "/home/runner/work/js-snippets/js-snippets/src/renderer/components/DeleteModal.jsx";/* The below source code is licensed under MIT. */

var DeleteModal = ({ event, tabState }) => {
  const [currentSnippet, setCurrentSnippet] = tabState;

  const {
    Text,
    Button,
    ModalComponents,
  } = modules$1();

  const {
    ModalRoot,
    ModalFooter,
    ModalContent,
    ModalCloseButton,
  } = ModalComponents;

  return (
    React.createElement(ModalRoot, { size: "small", transitionState: event.transitionState, __self: undefined, __source: {fileName: _jsxFileName$4, lineNumber: 23}}
      , React.createElement(ModalContent, { className: "jss-modal-delete-content", __self: undefined, __source: {fileName: _jsxFileName$4, lineNumber: 24}}
        , React.createElement(ModalCloseButton, {
          className: "jss-modal-delete-closebutton",
          onClick: event.onClose, __self: undefined, __source: {fileName: _jsxFileName$4, lineNumber: 25}} )
        , React.createElement(Text, {
          size: Text.Sizes.SIZE_24,
          color: Text.Colors.HEADER_PRIMARY,
          className: "jss-modal-delete-title", __self: undefined, __source: {fileName: _jsxFileName$4, lineNumber: 28}}, "This action is irreversible."

        )
        , React.createElement(Text, {
          size: Text.Sizes.SIZE_16,
          color: Text.Colors.HEADER_SECONDARY,
          className: "jss-modal-delete-subtitle", __self: undefined, __source: {fileName: _jsxFileName$4, lineNumber: 34}}, "Only click the below button if you are absolutely sure."

        )
      )
      , React.createElement(ModalFooter, {__self: undefined, __source: {fileName: _jsxFileName$4, lineNumber: 41}}
        , React.createElement(Button, {
          size: Button.Sizes.LARGE,
          color: Button.Colors.RED,
          className: "jss-modal-delete-button",
          onClick: () => {
            Manger.deleteSnippet(currentSnippet);
            setCurrentSnippet(Object.keys(Manger.snippets)[0]);
            event.onClose();
          }, __self: undefined, __source: {fileName: _jsxFileName$4, lineNumber: 42}}, "Delete it."

        )
      )
    )
  );
};

const _jsxFileName$3 = "/home/runner/work/js-snippets/js-snippets/src/renderer/components/CodeBlock.jsx"; function _optionalChain$1(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }/* The below source code is licensed under MIT. */

var CodeBlock = ({ tabState, topPasses }) => {
  const [currentSnippet, , forceUpdate] = tabState;

  let snippet = Manger.getSnippet(currentSnippet);
  const [toggleEdit, setToggleEdit, [collapsed]] = topPasses;
  const [startupMode, setStartupMode] = React.useState(snippet[1]);
  const [editContent, setEditContent] = React.useState(snippet[0]);

  React.useEffect(() => {
    setToggleEdit(false);
    setStartupMode(snippet[1]);
    setEditContent(snippet[0]);
  }, [currentSnippet]);

  const {
    Tooltip,
    FormTitle,
    TrashIcon,
    PencilIcon,
    RocketIcon,
    ModalActions,
    CheckmarkIcon,
    classes
  } = modules$1();

  const {
    button,
    disabled,
    dangerous,
  } = classes.ButtonColors;

  const {
    scrollbarGhostHairline
  } = classes.Scrollbar;

  return (
    React.createElement('div', { className: "jss-codeblock-container", style: { width: collapsed ? '638px' : '510px' }, __self: undefined, __source: {fileName: _jsxFileName$3, lineNumber: 45}}
      , React.createElement('div', { className: "jss-codeblock-topbar", __self: undefined, __source: {fileName: _jsxFileName$3, lineNumber: 46}}
        , React.createElement(Tooltip, { text: "Click me to run the code!"     , position: "top", className: "jss-codeblock-topbar-tooltip", __self: undefined, __source: {fileName: _jsxFileName$3, lineNumber: 47}}
          , React.createElement(FormTitle, { tag: "h3", onClick: async () => { await Manger.runSnippet(currentSnippet); forceUpdate(v => !v); }, __self: undefined, __source: {fileName: _jsxFileName$3, lineNumber: 48}}
            , currentSnippet
          )
        )
        , React.createElement('div', { style: { flex: 'auto' }, __self: undefined, __source: {fileName: _jsxFileName$3, lineNumber: 52}} )
        , !Manger.unpatches[currentSnippet] ||
          React.createElement(Tooltip, { text: "Run Return Function"  , position: "top", __self: undefined, __source: {fileName: _jsxFileName$3, lineNumber: 54}}
            , React.createElement('div', { className: button, onClick: async () => { await Manger.unpatches[currentSnippet](); forceUpdate(v => !v); }, __self: undefined, __source: {fileName: _jsxFileName$3, lineNumber: 55}}
              , React.createElement(CleanIcon, { height: "20", width: "20", __self: undefined, __source: {fileName: _jsxFileName$3, lineNumber: 56}} )
            )
          )
        , React.createElement(Tooltip, { text: `${startupMode ? 'Turn on' : 'Turn off'} Run on Startup`, position: "top", __self: undefined, __source: {fileName: _jsxFileName$3, lineNumber: 59}}
          , React.createElement('div', {
            className: `${button} ${!startupMode ? `${disabled} jss-codeblock-topbar-rocket` : ''}`,
            onClick: () => {
              setStartupMode(!startupMode);
              Manger.updateSnippet(currentSnippet, snippet[0], !startupMode);
            }, __self: undefined, __source: {fileName: _jsxFileName$3, lineNumber: 60}}
            , React.createElement(RocketIcon, { height: "20", width: "20", __self: undefined, __source: {fileName: _jsxFileName$3, lineNumber: 66}} )
          )
        )
        , React.createElement('div', { className: button, onClick: () => {
          if (toggleEdit) {
            Manger.updateSnippet(currentSnippet, editContent.trim());
            setToggleEdit(false);
          } else {
            setToggleEdit(true);
          }
        }, __self: undefined, __source: {fileName: _jsxFileName$3, lineNumber: 69}}
          , toggleEdit ? React.createElement(CheckmarkIcon, { height: "20", width: "20", __self: undefined, __source: {fileName: _jsxFileName$3, lineNumber: 77}} )
            : React.createElement(PencilIcon, { height: "20", width: "20", __self: undefined, __source: {fileName: _jsxFileName$3, lineNumber: 78}} )
        )
        , React.createElement('div', {
          className: `${button} ${dangerous}`,
          onClick: () => {
            ModalActions.openModal(event => {
              return React.createElement(DeleteModal, { event: event, tabState: tabState, __self: undefined, __source: {fileName: _jsxFileName$3, lineNumber: 84}} );
            });
          }, __self: undefined, __source: {fileName: _jsxFileName$3, lineNumber: 80}}
          , React.createElement(TrashIcon, { height: "20", width: "20", __self: undefined, __source: {fileName: _jsxFileName$3, lineNumber: 87}} )
        )
      )
      , React.createElement('div', { className: "jss-codeblock", __self: undefined, __source: {fileName: _jsxFileName$3, lineNumber: 90}}
        , toggleEdit ?
          React.createElement('textarea', {
            autoFocus: true,
            value: editContent,
            className: scrollbarGhostHairline,
            onChange: (event) => setEditContent(event.target.value), __self: undefined, __source: {fileName: _jsxFileName$3, lineNumber: 92}} )
          : React.createElement(CodeBlock$1, { snippet: snippet[0], __self: undefined, __source: {fileName: _jsxFileName$3, lineNumber: 97}} )
        
      )
    )
  );
};

const CodeBlock$1 = ({ snippet }) => {
  const { makeCodeBlock } = modules$1();

  const code = makeCodeBlock({ content: snippet, lang: 'js' }, null, {});
  const className = 'jss-codeblock-number';
  const render = code.props.render;

  code.props.render = (codeblock) => {
    const ret = render(codeblock);
    const props = _optionalChain$1([ret, 'optionalAccess', _ => _.props, 'optionalAccess', _2 => _2.children, 'optionalAccess', _3 => _3.props]);
    if (!_optionalChain$1([props, 'optionalAccess', _4 => _4.dangerouslySetInnerHTML])) return ret;

    let code = props.dangerouslySetInnerHTML.__html.split('\n');

    const codeLength = code.length.toString().length;
    code = code.map((line, index) => {
      const indexLength = (index + 1).toString().length;
      const spaces = ' '.repeat((codeLength - indexLength) + 1);
      return [
        `<div class='jss-codeblock-line'>`,
        `<span class=${className}>`,
        `${index + 1}${spaces}`,
        `</span>${line}</div>`,
      ].join('');
    });

    // fills rest of container if code is too short
    code.push([
      `<div style='display: flex; height: calc(100% - ${code.length} * 17px)'>`,
      `<span class=${className}> ${' '.repeat(codeLength)}`,
    ].join(''));

    props.dangerouslySetInnerHTML.__html = code.join('');

    return ret;
  };

  return code;
};

const _jsxFileName$2 = "/home/runner/work/js-snippets/js-snippets/src/renderer/components/HelpModal.jsx";/* The below source code is licensed under MIT. */

var HelpModal = ({ event }) => {

  const {
    Header,
    Button,
    Scroller,
    FormText,
    FormTitle,
    ContextMenu,
    makeCodeBlock,
    ModalComponents,
    KeyboardShortcut,
  } = modules$1();

  const {
    ModalRoot,
    ModalHeader,
    ModalFooter,
    ModalContent,
    ModalCloseButton,
  } = ModalComponents;

  return (
    React.createElement(ModalRoot, { size: "large", transitionState: event.transitionState, __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 29}}
      , React.createElement(ModalHeader, {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 30}}
        , React.createElement(Header, { tag: "h2", size: Header.Sizes.SIZE_20, __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 31}}, "Help Modal"

        )
        , React.createElement(ModalCloseButton, {
          onClick: event.onClose,
          className: "jss-modal-create-closebutton", __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 34}} )
      )
      , React.createElement(ModalContent, { className: "jss-modal-help-content", __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 38}}
        , React.createElement(Scroller, { fade: true, __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 39}}
          , React.createElement(FormTitle, { tag: "h2", __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 40}}, "Context Menus" )
          , React.createElement(FormText, { type: "description", __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 41}}, "There is a context menu patch on all messages that lets you quickly add any valid js quote block to snippets or directly run it."

          ), React.createElement('br', {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 43}} )
          , React.createElement(ContextMenu.default, {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 44}}
            , React.createElement(ContextMenu.MenuGroup, {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 45}}
              , React.createElement(ContextMenu.MenuItem, { id: "jss-actions", label: "JSS Actions" , __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 46}}
                , React.createElement(ContextMenu.MenuItem, { id: "trolololol", label: `u can't click me lol`, __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 47}} )
              )
            )
          ), React.createElement('hr', {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 50}} )
          , React.createElement(FormTitle, { tag: "h2", __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 51}}, "FAQ")
          , React.createElement(FormTitle, {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 52}}, "What does that rocket icon do?"     )
          , React.createElement(FormText, { type: "description", __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 53}}, "It makes a snippet automatically run on startup if it's clicked!"

          )
          , React.createElement(FormTitle, {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 56}}, "What does that broom icon do?"     )
          , React.createElement(FormText, { type: "description", __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 57}}, "Snippets can return \"cleanup\" functions that usually run on plugin unload but you can manually call them too!"

          )
          , React.createElement(FormTitle, {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 60}}, "How do I rename a snippet?"     )
          , React.createElement(FormText, { type: "description", __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 61}}, "Right click on the name in the sidebar!"

          )
          , React.createElement(FormTitle, {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 64}}, "How do I run a snippet?"     )
          , React.createElement(FormText, { type: "description", __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 65}}, "Click on the name in the topbar while it's selected!"

          ), React.createElement('hr', {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 67}} )
          , React.createElement(FormTitle, { tag: "h2", __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 68}}, "Keybinds")
          , React.createElement('div', { className: "jss-modal-help-shortcuts", __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 69}}
            , React.createElement('div', {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 70}}
              , React.createElement(FormTitle, {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 71}}, "Navigate Snippets" )
              , React.createElement(KeyboardShortcut, { shortcut: "shift+up", __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 72}} )
              , React.createElement(KeyboardShortcut, { shortcut: "shift+down", __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 73}} )
            )
            , React.createElement('div', {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 75}}
              , React.createElement(FormTitle, {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 76}}, "Move Snippets By One"   )
              , React.createElement(KeyboardShortcut, { shortcut: "mod+up", __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 77}} )
              , React.createElement(KeyboardShortcut, { shortcut: "mod+down", __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 78}} )
            )
            , React.createElement('div', {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 80}}
              , React.createElement(FormTitle, {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 81}}, "Move Snippets By All"   )
              , React.createElement(KeyboardShortcut, { shortcut: "mod+shift+up", __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 82}} )
              , React.createElement(KeyboardShortcut, { shortcut: "mod+shift+down", __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 83}} )
            )
          ), React.createElement('hr', {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 85}} )
          , React.createElement(FormTitle, { tag: "h2", __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 86}} , "Information For Developers"  )
          , React.createElement(FormText, { type: "description", style: { paddingBottom: '6px' }, __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 87}}, "All snippets are run asynchronously, along with that there are three predefined variables:"
                        , React.createElement('br', {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 88}} )

            , React.createElement('ul', {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 90}}
              , React.createElement('li', {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 91}}, "Logger")
              , React.createElement('li', {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 92}}, "Webpack")
              , React.createElement('li', {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 93}}, "Patcher")
            ), "You can look at the source to find out how to use these or you can play with the Webpack and Patcher in the console by using the exposed \"JSS\" variable."

                                          , React.createElement('br', {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 96}} ), React.createElement('br', {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 96}} ), "Of course if you don't want to use my patcher and/or webpack you can always redefine them like so:"

                              , React.createElement('br', {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 98}} ), React.createElement('br', {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 98}} )

            , React.createElement('div', { className: "jss-codeblock-help", __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 100}}, makeCodeBlock({ content: 'Webpack = window.Webpack;', lang: 'js' }, null, {})), React.createElement('br', {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 100}} ), "Do note though that this requires the user to also have whatever plugin that defines said variable installed."


          )
          , React.createElement(FormTitle, { className: "jss-modal-help-content-mbottom", __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 104}}, "Cleanup Functions" )
          , React.createElement(FormText, { type: "description", style: { paddingBottom: '6px' }, __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 105}}, "If a snippet returns a function it will be cached and will run on every snippet rerun or can be manually called with the cleanup button next to the rocket."
                                         , React.createElement('br', {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 106}} ), React.createElement('br', {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 106}} ), "If your snippet does anything that can be unpatched such as polluting mainworld or patching a function please add one of these, not only does it make your life easier by unpatching subsequent reruns but it also lets the user unpatch it themself, they will also be run if the plugin unloaded."

                                                               , React.createElement('br', {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 108}} ), React.createElement('br', {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 108}} )

            , React.createElement('div', { className: "jss-codeblock-help", __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 110}}, makeCodeBlock({ content: `return () => { unpatch(); Logger.info('How about you unpatch some bitches?'); };`, lang: 'js' }, null, {})), React.createElement('br', {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 110}} ), "If a type other than function is returned nothing will be cached and the return value will be displayed in console."


          )
        )
      )
      , React.createElement(ModalFooter, {__self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 116}}
        , React.createElement(Button, {
          onClick: () => Manger.backupSnippets(),
          size: Button.Sizes.LARGE,
          color: Button.Colors.GREEN, __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 117}}, "Backup Snippets"

        )
        , React.createElement(Button, {
          onClick: event.onClose,
          look: Button.Looks.LINK,
          color: Button.Colors.TRANSPARENT, __self: undefined, __source: {fileName: _jsxFileName$2, lineNumber: 123}}, "Cancel"

        )
      )
    )
  );
};

const _jsxFileName$1 = "/home/runner/work/js-snippets/js-snippets/src/renderer/components/SettingsSections.jsx";/* The below source code is licensed under MIT. */

const Separator = () => ({ section: 'DIVIDER' });
const Header = () => ({ section: 'HEADER', label: 'Kernel' });
const Section = () => ({ section: 'JSS', label: 'JS Snippets', element: () => React.createElement(Panel, {__self: undefined, __source: {fileName: _jsxFileName$1, lineNumber: 12}} ) });

const Panel = () => {
  const [toggleEdit, _setToggleEdit] = React.useState(false);
  const [snippet, _setSnippet] = React.useState(Object.keys(Manger.snippets)[0]);

  const collapsedState = React.useState(false);
  const forceUpdate = React.useState(false)[1];

  const toggleEditRef = React.useRef(toggleEdit);
  const setToggleEdit = (data) => {
    toggleEditRef.current = data;
    _setToggleEdit(data);
  };

  const snippetRef = React.useRef(snippet);
  const setSnippet = (data) => {
    snippetRef.last = snippetRef._last;
    snippetRef.current = data;
    snippetRef._last = data;
    _setSnippet(data);
  };

  let toggleable, holdingControl, holdingShift;
  const shiftHandler = (e) => e.key === 'Shift' && (holdingShift = e.type === 'keydown');
  const ctrlHandler = (e) => e.key === 'Control' && (holdingControl = e.type === 'keydown');

  const onKeyPress = (event) => {
    if (toggleEditRef.current) return;

    if (event.type !== 'keyup' && event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      const snippets = Object.keys(Manger.snippets);
      const index = snippets.indexOf(snippetRef.current);

      // this specific event fires twice, don't ask me why
      if (event.key === 'ArrowDown') {
        toggleable = !toggleable;
        if (toggleable) return;
      }

      switch (true) {
        case holdingControl && holdingShift:
          if (event.key === 'ArrowUp')
            Manger.moveSnippet(snippetRef.current, 0);
          if (event.key === 'ArrowDown')
            Manger.moveSnippet(snippetRef.current, snippets.length - 1);
          break;
        case holdingControl && !holdingShift:
          if (event.key === 'ArrowUp')
            Manger.moveSnippet(snippetRef.current, index - 1);
          if (event.key === 'ArrowDown')
            Manger.moveSnippet(snippetRef.current, index + 1);
          break;
        case !holdingControl && holdingShift:
          if (event.key === 'ArrowUp')
            setSnippet(snippets.at(index - 1));
          if (event.key === 'ArrowDown')
            if (index !== snippets.length - 1)
              setSnippet(snippets.at(index + 1));
          break;
      }

      forceUpdate(value => !value);
    }

    ctrlHandler(event); shiftHandler(event);
  };

  const tabState = [snippetRef.current, setSnippet, forceUpdate];
  const topPasses = [toggleEditRef.current, setToggleEdit, collapsedState];

  const {
    Tooltip,
    InfoIcon,
    FormTitle,
    FormSection,
    ModalActions,
  } = modules$1();

  React.useEffect(() => {
    document.addEventListener('keyup', onKeyPress);
    document.addEventListener('keydown', onKeyPress);
    return () => {
      document.removeEventListener('keyup', onKeyPress);
      document.removeEventListener('keydown', onKeyPress);
    };
  }, []);

  return (
    React.createElement(FormSection, {__self: undefined, __source: {fileName: _jsxFileName$1, lineNumber: 101}}
      , React.createElement(FormTitle, { className: "jss-header", tag: "h1", __self: undefined, __source: {fileName: _jsxFileName$1, lineNumber: 102}}, "JS Snippets" )
      , React.createElement(Tooltip, { className: "jss-info-tooltip", text: "Information Modal" , position: "top", __self: undefined, __source: {fileName: _jsxFileName$1, lineNumber: 103}}
        , React.createElement('div', { className: "jss-info", onClick: () => ModalActions.openModal((event) => React.createElement(HelpModal, { event: event, __self: undefined, __source: {fileName: _jsxFileName$1, lineNumber: 104}} )), __self: undefined, __source: {fileName: _jsxFileName$1, lineNumber: 104}}
          , React.createElement(InfoIcon, { height: "16", width: "16", __self: undefined, __source: {fileName: _jsxFileName$1, lineNumber: 105}} )
        )
      )
      , React.createElement('div', { className: "jss-container", __self: undefined, __source: {fileName: _jsxFileName$1, lineNumber: 108}}
        , React.createElement(SideBar, { tabState: tabState, topPasses: topPasses, __self: undefined, __source: {fileName: _jsxFileName$1, lineNumber: 109}} )
        , React.createElement(CodeBlock, { tabState: tabState, topPasses: topPasses, __self: undefined, __source: {fileName: _jsxFileName$1, lineNumber: 110}} )
      )
    )
  );
};

var SettingsSections = { Separator, Header, Section, Panel };

const _jsxFileName = "/home/runner/work/js-snippets/js-snippets/src/renderer/index.js"; function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }/* The below source code is licensed under MIT. */

const patchSettingsView = (retry) => {
  if (!kernel.packages.getPackages()['kernel-settings'] || retry) {
    try {
      const { SettingsView } = modules$1();
      Patcher.after(SettingsView.prototype, 'getPredicateSections', function (_, res) {
        const ChangeLogIndex = res.findIndex(s => _optionalChain([s, 'optionalAccess', _2 => _2.section, 'optionalAccess', _3 => _3.toLowerCase, 'call', _4 => _4()]) === 'changelog');
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
          return React.createElement(SettingsSections.Panel, {__self: undefined, __source: {fileName: _jsxFileName, lineNumber: 35}} );
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
  const { ContextMenu, ContextMenuActions, ModalActions } = modules$1();
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

            if (_optionalChain([menu, 'optionalAccess', _5 => _5.type, 'optionalAccess', _6 => _6.displayName]) === displayName && patch) {
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
      const match = _optionalChain([args, 'access', _7 => _7.message, 'access', _8 => _8.content, 'access', _9 => _9.match, 'call', _10 => _10(/```js(.*?)```/s), 'optionalAccess', _11 => _11[1]]);
      if (!match) return ret;

      ret.props.children.splice(4, 0,
        React.createElement(ContextMenu.MenuGroup, {__self: undefined, __source: {fileName: _jsxFileName, lineNumber: 87}}
          , React.createElement(ContextMenu.MenuItem, {
            id: "jss-actions",
            label: "JSS Actions" , __self: undefined, __source: {fileName: _jsxFileName, lineNumber: 88}}
            , React.createElement(ContextMenu.MenuItem, {
              id: "jss-run",
              label: "Run Snippet" ,
              action: () => {
                Manger.runSnippet('from ContextMenu', match);
              }, __self: undefined, __source: {fileName: _jsxFileName, lineNumber: 91}} )
            , React.createElement(ContextMenu.MenuItem, {
              id: "jss-add",
              label: "Add Snippet" ,
              action: () => {
                ModalActions.openModal(event => {
                  return React.createElement(CreateModal, { event: event, newSnippet: match, __self: undefined, __source: {fileName: _jsxFileName, lineNumber: 102}} );
                });
              }, __self: undefined, __source: {fileName: _jsxFileName, lineNumber: 97}} )
            , React.createElement(ContextMenu.MenuItem, {
              id: "jss-add-startup",
              label: "Add Startup Snippet"  ,
              action: () => {
                ModalActions.openModal(event => {
                  return React.createElement(CreateModal, { event: event, newSnippet: match, startup: true, __self: undefined, __source: {fileName: _jsxFileName, lineNumber: 110}} );
                });
              }, __self: undefined, __source: {fileName: _jsxFileName, lineNumber: 105}} )
          )
        )
      );
      return ret;
    });
  });
};

let styleElement;
const loadStyles = () => {
  const style = _JSS.loadStyle('dist/styles.css');
  if (!style) return Logger.warn('Could not find styles file.');

  styleElement = document.head.appendChild(Object.assign(document.createElement('style'), {
    id: 'js-snippets-style', textContent: style,
  }));
};

var index = {
  start() {
    Webpack.onLoad(async () => {
      window.React = Webpack.getByProps('createElement', 'useEffect');

      loadStyles();
      patchSettingsView();
      patchMessageContextMenu();

      window.JSS = {
        Patcher: Patcher,
        Webpack: Webpack,
      };

      Logger.info('Package finished loading!');

      await Promise.all(
        Object.keys(Manger.snippets).map(async (snippet) => {
          if (!Manger.getSnippet(snippet)[1]) return;
          await Manger.runSnippet(snippet, null, true);
        })
      );

      Logger.info(`Startup snippets finished loading!`);
    });
  },
  stop() {
    Patcher.unpatchAll();
    Manger.unpatchAll();
    _optionalChain([styleElement, 'optionalAccess', _12 => _12.remove, 'call', _13 => _13()]);
  },
};

export { index as default };
