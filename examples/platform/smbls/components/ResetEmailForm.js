export const ResetEmailForm = {
  flow: 'y',
  gap: 'A',
  flex: '1',
  height: '100%',
  childExtends: {
    extend: 'InputField',
    props: {
      width: '100%',
    },
    Title: {},
    Input: {
      width: '100%',
    },
  },
  '@mobileL': {
    justifyContent: 'unset',
    height: 'unset',
  },
  Email: {
    Input: {
      onInput: (ev, el, s) => {
        s.update({
          touched: true,
          email: el.node.value
        })
      },
    },
  },
};