export const EmailConfirmationError = {
  flow: 'y',
  align: 'center',
  gap: 'B',
  TryAgainButton: {
    onClick: async (_, el, s) => {
      s.update({
        loading: true
      })
      await el.call('confirmEmail')
    },
  },
};