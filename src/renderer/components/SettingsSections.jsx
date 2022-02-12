/* The below source code is licensed under MIT. */

import Manager from '../modules/manager';
import modules from '../modules/modules';

import SideBar from './SideBar';
import CodeBlock from './CodeBlock';
import HelpModal from './HelpModal';

export const Separator = () => ({ section: 'DIVIDER' });
export const Header = () => ({ section: 'HEADER', label: 'Kernel' });
export const Section = () => ({ section: 'JSS', label: 'JS Snippets', element: () => <Panel /> });

export const Panel = () => {
  const [toggleEdit, _setToggleEdit] = React.useState(false);
  const [snippet, _setSnippet] = React.useState(Object.keys(Manager.snippets)[0]);

  const collapsedState = React.useState(false);
  const forceUpdate = React.useState(false)[1];

  const toggleEditRef = React.useRef(toggleEdit);
  const setToggleEdit = (data) => {
    toggleEditRef.current = data;
    _setToggleEdit(data);
  };

  const snippetRef = React.useRef(snippet);
  const setSnippet = (data) => {
    snippetRef.last = snippetRef.current;
    snippetRef.current = data;
    _setSnippet(data);
  };

  let toggleable, holdingControl, holdingShift;
  const shiftHandler = (e) => e.key === 'Shift' && (holdingShift = e.type === 'keydown');
  const ctrlHandler = (e) => e.key === 'Control' && (holdingControl = e.type === 'keydown');

  const onKeyPress = (event) => {
    if (toggleEditRef.current) return;

    if (event.type !== 'keyup' && event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      const snippets = Object.keys(Manager.snippets);
      const index = snippets.indexOf(snippetRef.current);

      // this specific event fires twice, don't ask me why
      if (event.key === 'ArrowDown') {
        toggleable = !toggleable;
        if (toggleable) return;
      }

      switch (true) {
        case holdingControl && holdingShift:
          if (event.key === 'ArrowUp')
            Manager.moveSnippet(snippetRef.current, 0);
          if (event.key === 'ArrowDown')
            Manager.moveSnippet(snippetRef.current, snippets.length - 1);
          break;
        case holdingControl && !holdingShift:
          if (event.key === 'ArrowUp')
            Manager.moveSnippet(snippetRef.current, index - 1);
          if (event.key === 'ArrowDown')
            Manager.moveSnippet(snippetRef.current, index + 1);
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
  } = modules();

  React.useEffect(() => {
    document.addEventListener('keyup', onKeyPress);
    document.addEventListener('keydown', onKeyPress);
    return () => {
      document.removeEventListener('keyup', onKeyPress);
      document.removeEventListener('keydown', onKeyPress);
    };
  }, []);

  return (
    <FormSection>
      <FormTitle className='jss-header' tag='h1'>JS Snippets</FormTitle>
      <Tooltip className='jss-info-tooltip' text='Information Modal' position='top'>
        <div className='jss-info' onClick={() => ModalActions.openModal((event) => <HelpModal event={event} />)}>
          <InfoIcon height='16' width='16' />
        </div>
      </Tooltip>
      <div className='jss-container'>
        <SideBar tabState={tabState} topPasses={topPasses} />
        <CodeBlock tabState={tabState} topPasses={topPasses} />
      </div>
    </FormSection>
  );
};

export default { Separator, Header, Section, Panel };