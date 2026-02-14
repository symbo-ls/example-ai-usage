export const Uptime = {
  extend: 'Flex',
  Flex: {
    maxWidth: '100%',
    childProps: {
      minWidth: 'Z1',
      boxSize: 'Z1',
      background: 'green .3',
      border: '1px, solid, green',
      round: 'W',
      style: {
        '&:hover': {
          opacity: '1 !important',
        },
      },
      transition: 'A defaultBezier opacity',
    },
    gap: 'X',
    children: (el, s) => new Array(300).fill({}),
    flow: 'row wrap',
    height: '2.8em',
    overflow: 'hidden',
    ':hover > div': {
      opacity: 0.5,
    },
  },
  props: {
    flow: 'y',
    gap: 'Z',
  },
  Title: {
    fontSize: 'Z',
    text: 'Uptime',
    order: -1,
  },
};