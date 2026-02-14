export const ClickableItem = {
  props: ({ 
    state
  }) => ({
    transition: 'B defaultBezier',
    transitionProperty: 'opacity, transform',
    theme: 'secondary',
    opacity: 0.85,
    userSelect: 'none',
    draggable: false,

    ':hover': {
      opacity: 0.9,
      transform: 'scale(1.005)'
    },
    ':active': {
      opacity: 1,
      transform: 'scale(1.005)'
    },
    ':focus': {
      opacity: 1
    },
    '.isActive': {
      opacity: 1,
      theme: 'secondary @' + state.root.globalTheme || 'dark' + '.active'
    }
  }),
};