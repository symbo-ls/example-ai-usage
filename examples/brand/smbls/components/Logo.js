export const Logo = {
  extends: [
    'SquareButton',
  ],
  icon: 'logov2',
  boxSize: '1.25em',
  aspectRatio: '1 / 1',
  transition: 'B defaultBezier',
  transitionProperty: 'background, color',
  background: 'transparent 0',
  margin: 'U',
  padding: 'X',
  round: '100%',
  color: 'title',
  zIndex: 9999999,
  position: 'fixed',
  top: 'X2',
  left: 'Y',
  ':focus-within': {
    zIndex: 9990100,
  },
  '@dark': {
    color: 'white',
  },
  '@light': {
    color: 'black',
  },
  ':hover': {
    '@dark': {
      color: 'gray15',
      background: 'gray3',
    },
    '@light': {
      color: 'black',
      background: 'white',
    },
  },
  '.isActive': {
    '@dark': {
      color: 'gray15',
      background: 'gray3',
    },
    '@light': {
      color: 'black',
      background: 'white',
    },
  },
  onClick: (ev, el) => {
    ev.preventDefault()

    if (el.isEmbed()) {
      return
    }

    if (el.isDocs()) {
      document.activeElement?.blur()
      return el.router('/developers', el.getRoot())
    }

    if (!el.isDashboard()) {
      document.activeElement?.blur()
      return el.router('/', el.getRoot())
    }
  },
};