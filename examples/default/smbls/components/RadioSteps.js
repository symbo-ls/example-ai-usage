export const RadioSteps = {
  extend: 'Flex',
  childExtend: 'RadioStep',
  props: {
    gap: 'Z1',
    childProps: {
      RadioMark: {},
      Progress: {},
      ':last-child > progress': {
        hide: true,
      },
    },
    children: [
      {
        RadioMark: {
          isActive: true,
        },
      },
      {},
    ],
  },
};