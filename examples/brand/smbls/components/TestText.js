export const TestText = {
  extends: 'InputField',
  minWidth: 'G2',
  align: 'stretch',
  Title: {
    text: 'Test text:',
  },
  Input: {
    onInput: (ev, el) => {
      el.getRootState().update({
        sampleText: el.node.value
      }, {
        preventUpdate: ['Canvas', 'Modal']
      })
    },
    theme: 'quaternary',
    padding: 'Z A',
    round: 'Y',
    placeholder: 'Today is a last day of the year',
    value: el => el.getRootState().sampleText,
  },
};