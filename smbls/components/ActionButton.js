export const ActionButton = {
  extends: 'Flex',
  flexAlign: 'center center',
  round: '100px',
  cursor: 'pointer',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  style: {
    userSelect: 'none'
  },
  ':hover': {
    style: {
      transform: 'scale(1.12)'
    }
  },
  ':active': {
    style: {
      transform: 'scale(0.95)'
    }
  },

  Icon: {
    name: (el, s) => s.icon || 'heart'
  }
}
