export const ResetPasswordsForm = {
  flow: 'y',
  gap: 'B1',
  flex: '1',
  childExtends: {
    extend: 'InputField',
    props: {
      width: '100%',
      maxWidth: 'G+B',
    },
    Title: {},
    Input: {
      width: '100%',
    },
  },
  Password: {
    Input: {
      onInput: (ev, el, s) => {
        s.update({
          passwordTouched: true,
          password: el.node.value
        })
      },
    },
  },
  RepeatPassword: {
    Input: {
      onInput: (ev, el, s) => {
        s.update({
          repeatPasswordTouched: true,
          repeatPassword: el.node.value
        })
      },
    },
    Label_3: {
      show: (el, st) =>
        st.passwordTouched === true &&
        st.repeatPasswordTouched === true &&
        st.password !== st.repeatPassword,
    },
  },
};