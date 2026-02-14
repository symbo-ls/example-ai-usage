export const editIconModal = {
  extends: '/add-icon-modal',
  onInit: (el, s) => {
    const path = window.location.pathname
    const iconName = path.split('edit-icon/')[1]
    const ICONS = el.getDesignSystem('ICONS')
    if (!iconName) return
    const DEFAULT_ICONS = el.getRootState().DEFAULT_ICONS
    const iconInLib = (ICONS || DEFAULT_ICONS)[iconName] || DEFAULT_ICONS[iconName]
    if (!iconName || !iconInLib) return

    s.update({
      iconName,
      src: iconInLib
    }, {
      preventUpdate: true
    })
  },
  onSubmit: (e, el, s) => {
    e.preventDefault()
  },
  ModalFooter: {
    'IconButton.trash': {
      onClick: (ev, el, s) => {
        const {
          iconName
        } = s
        const text = 'Do you want to remove the icon?'

        if (iconName && window.confirm(text)) {
          const ICONS = el.getDesignSystem('ICONS')
          delete ICONS[iconName]
          el.updateDesignSystem({
            ICONS
          })
          el.context.closeModal(el, s)
        }
      },
    },
  },
};