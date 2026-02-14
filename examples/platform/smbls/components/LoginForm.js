export const LoginForm = {
  flow: 'y',
  height: '100%',
  gap: 'C1',
  '@mobileL': {
    height: 'unset',
    justifyContent: 'flex-start',
    width: '100%',
  },
  Flex: {
    Identifier: {
      Input: {
        onInput: (ev, el, s) => {
          s.update({
            identifier: el.node.value
          })
        },
      },
    },
    Password: {
      Input: {
        onInput: (ev, el, s) => {
          s.password = el.node.value
          s.update({
            password: el.node.value
          })
        },
      },
    },
  },
};