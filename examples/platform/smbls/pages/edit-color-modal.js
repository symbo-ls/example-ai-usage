export const editColorModal = {
  extends: '/add-color-modal',
  onInit: (el, s) => {
    const path = window.location.pathname
    const pathArray = path.split('edit-color/')
    const COLOR = el.getDesignSystem('COLOR')
    if (!COLOR) return
    const key = pathArray[1]
    const value = COLOR[key] || el.getRootState().DEFAULT_DESIGN_SYSTEM.COLOR[key]
    if (!key || !value) return
    s.update({
      key,
      value: value || key
    }, {
      preventUpdate: true,
      preventContentUpdate: true
    })
  },
};