export const addColorModal = {
  extends: 'ModalWindow',
  onInit: (el, s, ctx) => {
    if (!el.getDesignSystem()) return
    const lastPath = el.call('getLastLocationPath')
    const value = window.location.hash
    const key = value ?
      el.call('toCamelCase', el.call('nameTheColor').name(value)[1]) :
      lastPath !== '/add-color' && lastPath.slice(1)
    s.quietUpdate({
      key,
      value
    })
  },
  onSubmit: (e, el, s, ctx) => {
    e.preventDefault()
    const {
      key,
      value
    } = s
    if (!key || !value) return
    ctx.utils.closeModal(el, s, ctx)
    const t = setTimeout(() => {
      el.updateDesignSystem({
        COLOR: {
          [key]: value
        }
      })
      clearTimeout(t)
    }, 75)
  },
};