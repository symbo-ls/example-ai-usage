export const Table = {
  text: null,
  extend: 'Flex',
  childExtend: [
    'NetworkRow',
    'Link',
  ],
  props: {
    width: '100%',
    children: (el, s) => s.fleet,
    childrenAs: 'state',
    flow: 'y',
    position: 'relative',
    zIndex: 2,
  },
};