export const ValidatorsList = {
  props: {
    childrenAs: 'state',
    childProps: {
      flexFlow: 'y',
      ValidatorRow: {},
      ValidatorContent: {
        padding: 'B C3 C3',
        hide: (el, s) => !s.isActive,
      },
    },
    gap: 'Z',
    flexFlow: 'y',
  },
};