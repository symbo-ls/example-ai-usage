export const addIconModal = {
  extends: 'ModalWindow',
  onSubmit: (e, el, s) => {
    e.preventDefault()
    const {
      iconName,
      src
    } = s
    if (!iconName || !src) return

    el.call('closeModal', el, s)
    const t = setTimeout(() => {
      el.updateDesignSystem({
        ICONS: {
          [iconName]: src
        }
      })
      clearTimeout(t)
    }, 75)
  },
};