export const ProgressStepSet = {
  extend: 'Flex',
  childExtend: 'Progress',
  props: {
    gap: 'A',
    childProps: {
      minWidth: 'C',
    },
    children: [
      {
        value: 0.7,
      },
      {},
    ],
  },
};