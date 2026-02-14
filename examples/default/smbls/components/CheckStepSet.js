export const CheckStepSet = {
  extend: 'Flex',
  childExtend: 'CheckStep',
  props: {
    gap: 'Z1',
    childProps: {
      Icon: {
        '.isActive': {
          theme: 'primary',
        },
      },
      Progress: {},
      ':last-child > progress': {
        hide: true,
      },
    },
    children: [
      {
        Icon: {
          isActive: true,
        },
      },
      {},
    ],
  },
};