export const addMethodModal = {
  extends: 'ModalWindow',
  width: '100%',
  maxWidth: 'I3',
  maxHeight: '90dvh',
  onSubmit: (e, el, s, ctx) => {
    e.preventDefault()

    const key = s.key
    if (el.getData('methods')[key]) {
      return window.alert(`${key} method already exists`)
    }

    el.call('closeModal', el, s, ctx)

    setTimeout(() => {
      const item = el.setItem(s.parse())
      el.addItemOnCanvasPage(item)
    }, 75)
  },
};