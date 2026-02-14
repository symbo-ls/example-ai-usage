export const resetModal = {
  extends: 'ModalWindow',
  onSubmit: async (e, el, s, ctx) => {
    e.preventDefault()
    await el.call('closeModal')
  },
};