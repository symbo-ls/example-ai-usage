export const projectAccountCopy = {
  extends: [
    'Page',
  ],
  gap: 'B2',
  flow: 'y',
  Group: {
    AccountFieldTemplate: {
      InputField: {
        Input: {
          onInput: (ev, el, s) => s.update({
            package: parseInt(el.node.value)
          }),
        },
      },
    },
  },
};