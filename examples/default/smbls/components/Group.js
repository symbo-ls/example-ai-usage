export const Group = {
  Title: {
    text: 'Field Title',
    color: 'caption',
    userSelect: 'none',
    whiteSpace: 'nowrap',
  },
  extend: 'Flex',
  props: {
    flow: 'y',
    align: 'flex-start',
    gap: 'Y1',
    minWidth: 'F',
    childProps: {
      width: '100%',
    },
  },
};