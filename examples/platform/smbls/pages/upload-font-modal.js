export const uploadFontModal = {
  extends: 'ModalWindow',
  padding: 'A B',
  onInit: (el, s) => {
    const path = window.location.pathname
    const pathArray = path.split('edit-font/')
    const {
      FONT
    } = el.getDesignSystem()
    const key = pathArray[1]
    if (key && FONT[key]) {
      const value = el.call('deepClone', FONT[key])
      return s.update({
        key,
        value
      }, {
        preventUpdate: true
      })
    }
    s.update({
      value: []
    }, {
      preventUpdate: true
    })
  },
  onSubmit: (e, el, s, ctx) => {
    e.preventDefault()
    const {
      key,
      value
    } = s

    if (!key || !value) return
    const t = setTimeout(() => {
      el.updateDesignSystem({
        FONT: {
          [key]: value
        }
      })
      clearTimeout(t)
    }, 75)

    el.call('closeModal', el, s, ctx)
  },
};