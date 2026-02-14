export const MultipleSelect = {
  childExtends: 'IconText',
  theme: 'field',
  width: 'F2',
  flow: 'y',
  align: 'flex-start center',
  round: 'Z',
  padding: 'Y X',
  overflow: 'auto',
  '& svg': {
    opacity: 0,
  },
  childProps: {
    width: '100%',
    gap: 'Z',
    padding: 'Z',
    cursor: 'pointer',
    Icon: {
      name: 'checkmark',
      opacity: '0',
    },
    ':hover': {
      '& svg': {
        opacity: '1',
      },
    },
  },
};