export const CodeWithTitleAndButtons = {
  extends: 'CodePreviewWithTitle',
  margin: '0',
  minWidth: 'F3',
  maxWidth: '50%',
  align: 'stretch',
  '@tabletS': {
    maxWidth: 'none',
  },
  Buttons: {
    CopyButton: {
      value: el => {
        const val = el.call('getCodePreviewValue', el.parent.props.value || '//')
        return val
      },
    },
  },
};