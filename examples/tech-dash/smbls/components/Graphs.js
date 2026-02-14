export const Graphs = {
  extend: 'Flex',
  Flex: {
    children: (el, s) => ['RAM', 'CPU'],
    childrenAs: 'state',
    childExtends: 'Flex',
    gap: 'D1',
    childProps: {
      flex: 1,
      flow: 'y',
      gap: 'Z',
      Title: {
        fontSize: 'Z',
        text: '{{ value }}',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
      },
      Chart: {
        heightRange: 'D3',
      },
    },
    flex: 2,
    order: 2,
  },
  props: {
    gap: 'D1',
  },
  BlockHeight: {
    extends: 'Flex',
    flex: 1,
    flow: 'y',
    gap: 'Z',
    Title: {
      fontSize: 'Z',
      whiteSpace: 'nowrap',
      textTransform: 'uppercase',
      text: 'Block Height',
    },
    'Chart.Block': {
      heightRange: 'D3',
      variant: 'Block',
      position: 'relative',
    },
    position: 'relative',
  },
};