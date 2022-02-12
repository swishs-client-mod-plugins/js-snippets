/* The below source code is licensed under MIT. */

import Manager from '../modules/manager';
import modules from '../modules/modules';

export default ({ event, tabState }) => {
  const [currentSnippet, setCurrentSnippet] = tabState;

  const {
    Text,
    Button,
    ModalComponents,
  } = modules();

  const {
    ModalRoot,
    ModalFooter,
    ModalContent,
    ModalCloseButton,
  } = ModalComponents;

  return (
    <ModalRoot size='small' transitionState={event.transitionState}>
      <ModalContent className='jss-modal-delete-content'>
        <ModalCloseButton
          className='jss-modal-delete-closebutton'
          onClick={event.onClose} />
        <Text
          size={Text.Sizes.SIZE_24}
          color={Text.Colors.HEADER_PRIMARY}
          className='jss-modal-delete-title'>
          This action is irreversible.
        </Text>
        <Text
          size={Text.Sizes.SIZE_16}
          color={Text.Colors.HEADER_SECONDARY}
          className='jss-modal-delete-subtitle'>
          Only click the below button if you are absolutely sure.
        </Text>
      </ModalContent>
      <ModalFooter>
        <Button
          size={Button.Sizes.LARGE}
          color={Button.Colors.RED}
          className='jss-modal-delete-button'
          onClick={() => {
            Manager.deleteSnippet(currentSnippet);
            setCurrentSnippet(Object.keys(Manager.snippets)[0]);
            event.onClose();
          }}>
          Delete it.
        </Button>
      </ModalFooter>
    </ModalRoot>
  );
};