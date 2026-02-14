export const CopyButton = {
  extends: 'IconButton',
  icon: 'copy outline',
  background: 'transparent',
  color: 'currentColor',
  isActive: false,
  padding: 'Y1',
  fontSize: 'Z',
  '--spacing-ratio': 1.2,
  onClick: (ev, el, s) => {
    ev.preventDefault()
    ev.stopPropagation()
    el.setProps({
      Icon: {
        name: 'checkmark outline'
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
    el.call('copyStringToClipboard', el.call('exec', el.props.value || s.value, el, s))
  },
};