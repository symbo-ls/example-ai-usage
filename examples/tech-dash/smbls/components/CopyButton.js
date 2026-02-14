export const CopyButton = {
  extend: 'IconButton',
  props: {
    icon: 'copy outline',
    background: 'transparent',
    color: 'currentColor',
    isActive: false,
    padding: 'Y1',
    fontSize: 'Z',
    '--spacing-ratio': 1.2,
    onClick: async (ev, el, s, ctx) => {
        ev.preventDefault()
        ev.stopPropagation()
        el.setProps({
          Icon: {
            name: 'check outline'
          }
        })
        const t = setTimeout(() => {
          el.setProps({
            Icon: {
              name: 'copy outline'
            }
          })
          clearTimeout(t)
        }, 1000)

        await el.call(
          'copyStringToClipboard',
          el.call('exec', el.props.value, el) ||
          el.call('exec', s.key, el) ||
          el.call('exec', s.value, el)
        )
      },
  },
};