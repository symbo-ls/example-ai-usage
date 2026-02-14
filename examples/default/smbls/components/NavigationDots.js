export const NavigationDots = {
  tag: 'nav',
  extend: 'Flex',
  childExtend: 'Link',
  props: {
    gap: 'C1',
    childProps: {
      boxSize: 'Z',
      theme: 'dialog',
      round: '100%',
      cursor: 'pointer',
      text: '',
      '.isActive': {
        theme: 'primary',
      },
      ':active': {
        theme: 'primary',
      },
    },
    children: [
      {},
      {
        isActive: true,
      },
    ],
  },
};