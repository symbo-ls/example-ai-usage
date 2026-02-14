export const addGlobalThemeModal = {
  extends: 'ModalWindow',
  onSubmit: async (e, el, s, ctx) => {
    e.preventDefault()
    const {
      value,
      themeModifier
    } = s
    if (!themeModifier || !value) {
      return
    }
    const modifierName =
      themeModifier.slice(0, 1) === '@' ? themeModifier : `@${themeModifier}`

    await el.call('closeModal')
    const t = setTimeout(async () => {
      await el.updateDesignSystem({
        THEME: {
          document: {
            [modifierName]: value
          }
        }
      })
      clearTimeout(t)
    }, 75)
  },
};