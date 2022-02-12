/* The below source code is licensed under MIT. */

import Manager from '../modules/manager';
import modules from '../modules/modules';

import CreateModal from './CreateModal';

export default ({ tabState, topPasses }) => {
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
  } = modules();

  return (
    <div className='jss-sidebar' style={collapsed ? { width: '47px' } : {}}>
      <div className='jss-sidebar-topbar'>
        {collapsed || <>
          <FormTitle tag='h3'>
            Snippets
          </FormTitle>
          <div
            className={classes.ButtonColors.button}
            onClick={() => {
              ModalActions.openModal(event => {
                return <CreateModal event={event} tabState={tabState} />;
              });
            }}>
            <PlusIcon height='20' width='20' />
          </div>
        </>}
        <div className={classes.ButtonColors.button} onClick={() => setCollapsed(!collapsed)}>
          <ArrowIcon height='20' width='20'
            direction={collapsed ? ArrowIcon.Directions.RIGHT : ArrowIcon.Directions.LEFT} />
        </div>
      </div>
      <div className='jss-sidebar-divider' />
      {collapsed ||
        <Scroller className='jss-sidebar-scroller' fade={true}>
          <TabBar
            selectedItem={currentSnippet}
            type={TabBar.Types.SIDE}
            onItemSelect={setCurrentSnippet}>
            {Object.keys(Manager.snippets).map((snippet, index) => (
              <TabBar.Item id={snippet} itemType={TabBar.Types.SIDE}
                onContextMenu={(event) => {
                  ContextMenuActions.openContextMenu(event, () => (
                    <ContextMenu.default onClose={ContextMenuActions.closeContextMenu}>
                      <ContextMenu.MenuGroup>
                        <ContextMenu.MenuItem
                          id='jss-update-name' label='Change Snippet Name'
                          action={() => {
                            ModalActions.openModal(event => (
                              <CreateModal event={event} tabState={tabState} existingName={snippet} />
                            ));
                          }} />
                        <ContextMenu.MenuItem
                          id='jss-run-snippet' label='Run Snippet'
                          action={() => Manager.runSnippet(snippet)} />
                        <ContextMenu.MenuItem
                          id='jss-move-up' label='Move Snippet Above'
                          action={() => {
                            Manager.moveSnippet(snippet, index - 1);
                            forceUpdate(value => !value);
                          }} />
                        <ContextMenu.MenuItem
                          id='jss-move-down' label='Move Snippet Below'
                          action={() => {
                            Manager.moveSnippet(snippet, index + 1);
                            forceUpdate(value => !value);
                          }} />
                        <ContextMenu.MenuItem
                          id='jss-delete' label='Delete Snippet' color='colorDanger'
                          action={() => {
                            Manager.deleteSnippet(snippet);
                            if (snippet === currentSnippet)
                              setCurrentSnippet(Object.keys(Manager.snippets)[0]);
                            forceUpdate(value => !value);
                          }} />
                      </ContextMenu.MenuGroup>
                    </ContextMenu.default>
                  ));
                }}>
                {snippet}
              </TabBar.Item>
            ))}
          </TabBar>
        </Scroller>}
    </div>
  );
};