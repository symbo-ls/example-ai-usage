export const addThemeModal = {
  extends: '/add-global-theme-modal',
  onSubmit: (e, el, s) => {
    e.preventDefault()
    const {
      value,
      themeModifier
    } = s
    if (themeModifier && value) {
      const sceneTheme = el.getRootState().sceneTheme
      const globalTheme = '@' + sceneTheme

      const inversedKey = globalTheme === '@dark' ? '@light' : '@dark'
      const inversedValue = {
        color: value.background,
        background: value.color
      }
      el.updateDesignSystem({
        THEME: {
          [themeModifier]: {
            [globalTheme]: value,
            [inversedKey]: inversedValue
          }
        }
      })
      el.call('closeModal', el, s)
    }
  },
};