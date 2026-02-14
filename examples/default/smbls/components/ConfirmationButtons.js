export const ConfirmationButtons = {
  extend: 'Flex',
  childExtend: 'Button',
  props: {
    gap: 'Y1',
    childProps: {
      theme: 'dialog',
      padding: 'Z1 B1',
    },
    children: [
      {
        text: 'No',
      },
      {
        text: 'YES',
      },
    ],
  },
};