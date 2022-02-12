/* The below source code is licensed under MIT. */

import Webpack from './webpack';

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

export default () => modules;