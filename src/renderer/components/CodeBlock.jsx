/* The below source code is licensed under MIT. */

import Manager from '../modules/manager';
import modules from '../modules/modules';

import CleanIcon from './CleanIcon';
import DeleteModal from './DeleteModal';

export default ({ tabState, topPasses }) => {
  const [currentSnippet, , forceUpdate] = tabState;

  let snippet = Manager.getSnippet(currentSnippet);
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
  } = modules();

  const {
    button,
    disabled,
    dangerous,
  } = classes.ButtonColors;

  const {
    scrollbarGhostHairline
  } = classes.Scrollbar;

  return (
    <div className='jss-codeblock-container' style={{ width: collapsed ? '638px' : '510px' }}>
      <div className='jss-codeblock-topbar'>
        <Tooltip text='Click me to run the code!' position='top' className='jss-codeblock-topbar-tooltip'>
          <FormTitle tag='h3' onClick={async () => { await Manager.runSnippet(currentSnippet); forceUpdate(v => !v); }}>
            {currentSnippet}
          </FormTitle>
        </Tooltip>
        <div style={{ flex: 'auto' }} />
        {!Manager.unpatches[currentSnippet] ||
          <Tooltip text='Run Return Function' position='top'>
            <div className={button} onClick={async () => { await Manager.unpatches[currentSnippet](); forceUpdate(v => !v); }}>
              <CleanIcon height='20' width='20' />
            </div>
          </Tooltip>}
        <Tooltip text={`${startupMode ? 'Turn on' : 'Turn off'} Run on Startup`} position='top'>
          <div
            className={`${button} ${!startupMode ? `${disabled} jss-codeblock-topbar-rocket` : ''}`}
            onClick={() => {
              setStartupMode(!startupMode);
              Manager.updateSnippet(currentSnippet, snippet[0], !startupMode);
            }}>
            <RocketIcon height='20' width='20' />
          </div>
        </Tooltip>
        <div className={button} onClick={() => {
          if (toggleEdit) {
            Manager.updateSnippet(currentSnippet, editContent.trim());
            setToggleEdit(false);
          } else {
            setToggleEdit(true);
          }
        }}>
          {toggleEdit ? <CheckmarkIcon height='20' width='20' />
            : <PencilIcon height='20' width='20' />}
        </div>
        <div
          className={`${button} ${dangerous}`}
          onClick={() => {
            ModalActions.openModal(event => {
              return <DeleteModal event={event} tabState={tabState} />;
            });
          }}>
          <TrashIcon height='20' width='20' />
        </div>
      </div>
      <div className='jss-codeblock'>
        {toggleEdit ?
          <textarea
            autoFocus={true}
            value={editContent}
            className={scrollbarGhostHairline}
            onChange={(event) => setEditContent(event.target.value)} />
          : <CodeBlock snippet={snippet[0]} />
        }
      </div>
    </div>
  );
};

const CodeBlock = ({ snippet }) => {
  const { makeCodeBlock } = modules();

  const code = makeCodeBlock({ content: snippet, lang: 'js' }, null, {});
  const className = 'jss-codeblock-number';
  const render = code.props.render;

  code.props.render = (codeblock) => {
    const ret = render(codeblock);
    const props = ret?.props?.children?.props;
    if (!props?.dangerouslySetInnerHTML) return ret;

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