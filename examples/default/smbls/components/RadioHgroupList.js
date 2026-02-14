export const RadioHgroupList = {
  extend: 'Flex',
  childExtend: 'RadioHgroup',
  props: {
    flow: 'y',
    gap: 'B',
    childProps: {
      Hgroup: {
        gap: 'W2',
        H: {
          tag: 'h6',
        },
        P: {},
      },
      Radio: {
        Input: {},
        FLex: {
          ':after': {},
        },
      },
    },
    children: [
      {},
      {},
    ],
  },
};