export const IconButtonSet = {
  extend: 'Flex',
  childExtend: 'IconButton',
  props: {
    gap: 'Z',
    childProps: {
      Icon: {},
    },
    children: [
      {
        Icon: {
          name: 'sun',
        },
      },
      {
        Icon: {
          name: 'moon',
        },
      },
    ],
  },
};