export const WaitlistForm = {
  childExtends: 'Input',
  flow: 'y',
  gap: 'B1',
  flex: '1',
  childProps: {
    value: (el, s) => s[el.key.toLowerCase()],
    fontSize: 'A2',
    padding: 'Z1 A2',
    width: '100%',
    maxWidth: 'G',
    onChange: (ev, el, s) => {
      s.update({
        [el.key.toLowerCase()]: el.node.value
      })
    },
  },
};