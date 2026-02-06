export const ValidatorFooter = {
  props: {
    childProps: {
      theme: 'transparent',
      padding: 'Z A',
      ':hover': {
        theme: 'dialog',
      },
    },
    padding: 'A',
    gap: 'C1',
    margin: '0 -Y',
    onClick: (ev, el, s) => {
        ev.stopPropagation()
        ev.preventDefault()
      },
  },
  extends: 'Flex',
  Edit: {
    icon: 'check',
    text: 'Edit',
    gap: 'Y1',
    onClick: (ev, el, s) => {
        s.root.update({
          editMode: true
        })
      },
  },
  childExtends: 'Button',
};