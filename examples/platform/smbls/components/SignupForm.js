export const SignupForm = {
  flow: 'column',
  gap: 'A',
  flex: '1',
  '@mobileL': {
    minWidth: '100%',
  },
  childExtends: {
    extend: 'InputField',
    props: {
      width: '100%',
      '@mobileL': {
        maxWidth: '100%',
      },
    },
    Title: {},
    Input: {
      width: '100%',
      onInput: (ev, el, s) => {
        s.update({
          [el.parent.key.toLowerCase()]: el.node.value
        })
      },
    },
  },
  Email: {
    Input: (_, s) => ({
      height: 'B2',
      '@mobileL': {
        height: 'unset'
      },
      autofocus: true,
      autocomplete: 'email',
      required: true,
      value: s.email ? s.email : s.value,
      placeholder: 'e.g. hello@symbo.ls',
      disabled: s.hasToken
    }),
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
};