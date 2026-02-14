export const IteratorFooter = {
  tag: 'footer',
  width: '100%',
  align: 'center space-between',
  transition: 'B defaultBezier',
  transitionProperty: 'height, opacity',
  overflow: 'hidden',
  position: 'absolute',
  theme: 'header',
  bottom: 'calc(100% - var(--spacing-X))',
  left: '0',
  padding: 'X',
  gap: 'X',
  '@dark': {
    boxShadow: '--theme-document-dark-background 0.65, 0, Z, A, -X',
  },
  '@light': {
    boxShadow: '--theme-document-light-background 0.65, 0, Z, A, -X',
  },
  childProps: {
    theme: 'field',
  },
  SquareButton_moveUp: {
    isFirst: (el, s) => parseInt(s.__element.__ref.__state) === 0,
    icon: 'arrowAngleUp',
    padding: '0',
    boxSize: 'B B',
    round: 'Y1',
    '.isFirst': {
      opacity: '.35',
      pointerEvents: 'none',
    },
    onClick: (ev, el, s) => {
      const key = parseInt(s.__element.__ref.__state)
      s.parent.apply((state) => ctx.utils.swapItemsInArray(state, key, key - 1))
    },
  },
  SquareButton_moveDown: {
    icon: 'arrowAngleDown',
    padding: '0',
    boxSize: 'B B',
    round: 'Y1',
    onClick: (ev, el, s) => {
      const key = parseInt(s.__element.__ref.__state)
      s.parent.apply((state) => ctx.utils.swapItemsInArray(state, key, key + 1))
    },
  },
  SquareButton_drag: {
    icon: 'drag outline',
    padding: '0',
    boxSize: 'B B',
    round: 'Y1',
  },
  SquareButton_plus: {
    margin: '0 0 0 auto',
    icon: 'plus',
    padding: '0',
    boxSize: 'B B',
    round: 'Y1',
    onClick: (ev, el, s) => {
      const key = parseInt(s.__element.__ref.__state)
      s.parent.apply((state) => state.splice(key + 1, 0, {}))
    },
  },
  SquareButton_trash: {
    icon: 'trash',
    padding: '0',
    boxSize: 'B B',
    round: 'Y1',
    onClick: (ev, el, s) => {
      // const scopeData = s.parent.parent
      const key = s.__element.key
      if (window.confirm('Do you want to remove item?')) {
        s.parent.remove(key)
      }
    },
  },
  SquareButton_copy: {
    icon: 'copy outline',
    padding: '0',
    boxSize: 'B B',
    round: 'Y1',
    onClick: (ev, el, s) => {
      const key = parseInt(s.__element.__ref.__state)
      const value = ctx.utils.deepClone(s.parse())
      s.parent.apply((state) => state.splice(key + 1, 0, value))
    },
  },
};