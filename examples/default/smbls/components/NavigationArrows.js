export const NavigationArrows = {
  extend: 'Flex',
  childExtend: 'IconButton',
  props: {
    gap: 'Z',
    childProps: {
      round: '100%',
    },
    children: [
      {
        Icon: {
          name: 'chevronLeft',
        },
      },
      {
        Icon: {
          name: 'chevronRight',
        },
      },
    ],
  },
};