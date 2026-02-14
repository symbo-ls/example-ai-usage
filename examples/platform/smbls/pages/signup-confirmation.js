export const signupConfirmation = {
  flow: 'y',
  align: 'center',
  height: '100%',
  margin: 'auto',
  onInit: async (el, s) => {
    await el.call('confirmEmail')
  },
};