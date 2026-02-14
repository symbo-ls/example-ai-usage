export const ToggleHgroupList = {
  extend: 'Flex',
  childExtend: 'ToggleHgroup',
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
      Toggle: {
        margin: '- - - auto',
        Input: {},
        Flex: {
          after: {},
        },
      },
    },
    children: [
      {},
      {},
    ],
  },
};