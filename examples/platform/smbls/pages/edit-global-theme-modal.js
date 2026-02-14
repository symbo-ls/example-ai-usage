export const editGlobalThemeModal = {
  extends: '/add-global-theme-modal',
  onInit: (el, s) => {
    const THEME = el.getDesignSystem('THEME')
    if (!THEME) {
      return
    }
    const docThemes = THEME.document
    const themeModifier =
      s.key || window.location.pathname.split('global-theme/')[1]
    const value = docThemes[themeModifier]

    if (!value || !themeModifier) {
      return
    }
    s.update({
      themeModifier,
      value
    }, {
      preventUpdate: true,
      preventContentUpdate: true
    })
  },
  ModalFooter: {
    'IconButton.trash': {
      click: async (ev, el, s) => {
        const {
          themeModifier
        } = s
        const THEME = el.getDesignSystem('THEME')
        const text = 'Do you want to remove the color?'
        if (themeModifier && window.confirm(text)) {
          delete THEME.document[themeModifier]
          await el.updateDesignSystem({
            THEME: {
              document: THEME.document
            }
          })
          el.call('closeModal', el, s)
        }
      },
    },
  },
};