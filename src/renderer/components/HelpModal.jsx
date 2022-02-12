/* The below source code is licensed under MIT. */

import Manager from '../modules/manager';
import modules from '../modules/modules';

export default ({ event }) => {

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
  } = modules();

  const {
    ModalRoot,
    ModalHeader,
    ModalFooter,
    ModalContent,
    ModalCloseButton,
  } = ModalComponents;

  return (
    <ModalRoot size='large' transitionState={event.transitionState}>
      <ModalHeader>
        <Header tag='h2' size={Header.Sizes.SIZE_20}>
          Help Modal
        </Header>
        <ModalCloseButton
          onClick={event.onClose}
          className='jss-modal-create-closebutton' />
      </ModalHeader>
      <ModalContent className='jss-modal-help-content'>
        <Scroller fade={true}>
          <FormTitle tag='h2'>Context Menus</FormTitle>
          <FormText type='description'>
            There is a context menu patch on all messages that lets you quickly add any valid js quote block to snippets or directly run it.
          </FormText><br />
          <ContextMenu.default>
            <ContextMenu.MenuGroup>
              <ContextMenu.MenuItem id='jss-actions' label='JSS Actions'>
                <ContextMenu.MenuItem id='trolololol' label={`u can't click me lol`} />
              </ContextMenu.MenuItem>
            </ContextMenu.MenuGroup>
          </ContextMenu.default><hr />
          <FormTitle tag='h2'>FAQ</FormTitle>
          <FormTitle>What does that rocket icon do?</FormTitle>
          <FormText type='description'>
            It makes a snippet automatically run on startup if it's clicked!
          </FormText>
          <FormTitle>What does that broom icon do?</FormTitle>
          <FormText type='description'>
            Snippets can return "cleanup" functions that usually run on plugin unload but you can manually call them too!
          </FormText>
          <FormTitle>How do I rename a snippet?</FormTitle>
          <FormText type='description'>
            Right click on the name in the sidebar!
          </FormText>
          <FormTitle>How do I run a snippet?</FormTitle>
          <FormText type='description'>
            Click on the name in the topbar while it's selected!
          </FormText><hr />
          <FormTitle tag='h2'>Keybinds</FormTitle>
          <div className='jss-modal-help-shortcuts'>
            <div>
              <FormTitle>Navigate Snippets</FormTitle>
              <KeyboardShortcut shortcut='shift+up' />
              <KeyboardShortcut shortcut='shift+down' />
            </div>
            <div>
              <FormTitle>Move Snippets By One</FormTitle>
              <KeyboardShortcut shortcut='mod+up' />
              <KeyboardShortcut shortcut='mod+down' />
            </div>
            <div>
              <FormTitle>Move Snippets By All</FormTitle>
              <KeyboardShortcut shortcut='mod+shift+up' />
              <KeyboardShortcut shortcut='mod+shift+down' />
            </div>
          </div><hr />
          <FormTitle tag='h2' >Information For Developers</FormTitle>
          <FormText type='description' style={{ paddingBottom: '6px' }}>
            All snippets are run asynchronously, along with that there are three predefined variables:<br />

            <ul>
              <li>Logger</li>
              <li>Webpack</li>
              <li>Patcher</li>
            </ul>

            You can look at the source to find out how to use these or you can play with the Webpack and Patcher in the console by using the exposed "JSS" variable.<br /><br />

            Of course if you don't want to use my patcher and/or webpack you can always redefine them like so:<br /><br />

            <div className='jss-codeblock-help'>{makeCodeBlock({ content: 'Webpack = window.Webpack;', lang: 'js' }, null, {})}</div><br />

            Do note though that this requires the user to also have whatever plugin that defines said variable installed.
          </FormText>
          <FormTitle className='jss-modal-help-content-mbottom'>Cleanup Functions</FormTitle>
          <FormText type='description' style={{ paddingBottom: '6px' }}>
            If a snippet returns a function it will be cached and will run on every snippet rerun or can be manually called with the cleanup button next to the rocket.<br /><br />

            If your snippet does anything that can be unpatched such as polluting mainworld or patching a function please add one of these, not only does it make your life easier by unpatching subsequent reruns but it also lets the user unpatch it themself, they will also be run if the plugin unloaded.<br /><br />

            <div className='jss-codeblock-help'>{makeCodeBlock({ content: `return () => { unpatch(); Logger.info('How about you unpatch some bitches?'); };`, lang: 'js' }, null, {})}</div><br />

            If a type other than function is returned nothing will be cached and the return value will be displayed in console.
          </FormText>
        </Scroller>
      </ModalContent>
      <ModalFooter>
        <Button
          onClick={() => Manager.backupSnippets()}
          size={Button.Sizes.LARGE}
          color={Button.Colors.GREEN}>
          Backup Snippets
        </Button>
        <Button
          onClick={event.onClose}
          look={Button.Looks.LINK}
          color={Button.Colors.TRANSPARENT}>
          Cancel
        </Button>
      </ModalFooter>
    </ModalRoot>
  );
};