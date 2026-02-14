export const AccessCodeField = {
  extends: 'GroupField',
  Grid: {
    childProps: {
      onKeyup: (event, element, state) => {
        const {
          target,
          keyCode
        } = event
        const {
          value
        } = target
        const next = element.nextElement()
        const previous = element.previousElement()

        const isNumber = (keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105)
        const isBackspace = event.keyCode === 8 || event.keyCode === 46

        target.select()

        if (isNumber && value.length && next) next.node.focus()
        if ((!value.length || isBackspace) && previous) previous.node.focus()

        state.value[element.key] = value
        element.lookup('Input').setProps({
          value: Object.values(state.value).join('')
        })
      },
      onPaste: (event, element, state) => {
        event.preventDefault()
        const paste = (event.clipboardData || window.clipboardData).getData('text')
        if (!paste) return
        const value = paste.split('')
        state.value = value
        state.update()
      },
    },
  },
};