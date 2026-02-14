export const TabsLink = {
  extends: 'Button',
  theme: null,
  background: 'transparent',
  color: 'paragraph',
  padding: 'Z1 A',
  margin: '0 0 -1px',
  transition: 'A, defaultBezier',
  transitionProperty: 'color, border-color, font-weight',
  borderRadius: '0',
  round: '0',
  borderWidth: '0 0 1px',
  borderColor: 'line',
  borderStyle: 'solid',
  ':hover': {
    color: 'title',
    '@dark': {
      borderColor: 'gray4',
    },
  },
  '.isActive': {
    fontWeight: '600',
    color: 'title',
    position: 'relative',
    zIndex: 2,
    '@dark': {
      borderColor: 'gray5',
    },
  },
  onClick: (ev, el, s, ctx) => {
    if (el.parent.props.onChoose) {
      return el.parent.props.onChoose(ev, el, s, ctx)
    }
  },
};