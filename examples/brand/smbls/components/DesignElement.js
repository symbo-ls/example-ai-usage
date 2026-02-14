export const DesignElement = {
  extends: [
    'Link',
  ],
  width: '100%',
  flow: 'column',
  href: '/design-system',
  gap: 'Z2',
  padding: 'Z2 A',
  maxWidth: 'F1_default',
  borderRadius: 'Z',
  transition: 'background 250ms',
  ':hover': {
    '@dark': {
      background: 'white .05',
    },
    '@light': {
      background: 'black .05',
    },
  },
};