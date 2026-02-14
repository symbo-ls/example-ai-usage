export const BulletCaption = {
  tag: 'caption',
  text: 'Orders history',
  extend: 'Flex',
  props: {
    align: 'center flex-start',
    gap: 'Y1',
    ':before': {
      content: '""',
      boxSize: 'Z1',
      background: 'blue',
      round: 'A2',
    },
  },
};