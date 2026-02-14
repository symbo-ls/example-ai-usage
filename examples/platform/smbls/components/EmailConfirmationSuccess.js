export const EmailConfirmationSuccess = {
  flow: 'y',
  align: 'center',
  gap: 'B',
  SigninButton: {
    onClick: (_, el) => {
      el.router('/signin', el.getRoot())
    },
  },
};