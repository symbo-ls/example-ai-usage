export const LogoCopy = {
  extends: [
    'Link',
    'SquareButton',
  ],
  icon: 'logo',
  isActive: () => window.location.pathname === '/dashboard',
  fontSize: 'C',
  href: '/',
  position: 'relative',
  color: 'gray13',
  transition: 'B defaultBezier',
  transitionProperty: 'background, color',
  background: 'transparent 0',
  margin: 'W',
  padding: 'Y',
  round: '100%',
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
};