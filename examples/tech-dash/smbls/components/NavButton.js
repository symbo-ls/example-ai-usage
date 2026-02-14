export const NavButton = {
  extend: [
    'Link',
    'Button',
  ],
  props: {
    theme: 'button',
    padding: 'Z1 A1',
    fontSize: 'Z1',
    gap: 'Y',
    fontWeight: '300',
    transition: 'background, defaultBezier, A',
    text: '300',
    '@dark': {
      color: 'white',
      background: 'transparent',
      ':hover': {
        background: 'deepFir',
      },
      ':active': {
        background: 'deepFir 1 +5',
      },
    },
  },
};