/* The below source code is licensed under MIT. */

import Manager from '../modules/manager';
import modules from '../modules/modules';

export default ({ event, tabState = [0, 0, 0], existingName, newSnippet, startup }) => {
  const setCurrentSnippet = tabState[1];
  const [snippetName, setSnippetName] = React.useState(existingName || '');

  const {
    Header,
    Button,
    TextInput,
    FormTitle,
    ModalComponents,
  } = modules();

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
      Manager.changeName(existingName, snippetName);
      setCurrentSnippet(snippetName);
    } else if (newSnippet) {
      Manager.createSnippet(snippetName, newSnippet);
      if (startup) Manager.updateSnippet(snippetName, undefined, startup);
    } else {
      Manager.createSnippet(snippetName);
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
    <ModalRoot size='small' transitionState={event.transitionState}>
      <ModalHeader>
        <Header tag='h2' size={Header.Sizes.SIZE_20}>
          Create Snippet
        </Header>
        <ModalCloseButton
          onClick={event.onClose}
          className='jss-modal-create-closebutton' />
      </ModalHeader>
      <ModalContent className='jss-modal-create-content'>
        <FormTitle>Snippet Name</FormTitle>
        <TextInput
          autofocus={true}
          value={snippetName}
          onChange={setSnippetName}
          placeholder='observeModuleFunctions!' />
      </ModalContent>
      <ModalFooter>
        <Button
          onClick={updateSnippet}
          color={Button.Colors.GREEN}>
          Add Snippet
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