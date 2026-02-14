export const addFontFamilyModal = {
  extends: 'ModalWindow',
  onSubmit: (e, el, s) => {
    e.preventDefault()
    const {
      value,
      familyName
    } = s

    if (!familyName || !value) return

    ctx.utils.closeModal(el, s, ctx)
    const t = setTimeout(() => {
      el.updateDesignSystem({
        FONT_FAMILY: {
          [familyName]: value
        }
      })
      clearTimeout(t)
    }, 75)
  },
  Flex: {
    Fields: {
      InputField: {
        Input: {
          onKeyup: (e, el, s) => {
            s.update({
              [el.parent.key]: el.node.value
            })
          },
          onChange: (e, el, s) => {
            if (s.familyName) return
            const familyName = toCamelCase(s.familyName)
            s.update({
              familyName
            })
          },
        },
      },
    },
    Group: {
      Content: {
        Tools: {
          children: (el, state) => {
            return Object.values(state.value)
          },
        },
        SquareButton: {
          onClick: (ev, el, s) => {
            s.add('inherit')
          },
        },
      },
    },
  },
};