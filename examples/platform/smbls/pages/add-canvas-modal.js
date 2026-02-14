export const addCanvasModal = {
  extends: 'ModalWindow',
  width: '100%',
  maxWidth: 'I',
  onSubmit: async (e, el, s) => {
    e.preventDefault()
    await el.call('addCanvasPage', s)
    await el.call('closeModal')
  },
};