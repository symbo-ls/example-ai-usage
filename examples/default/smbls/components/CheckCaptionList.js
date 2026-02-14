export const CheckCaptionList = {
  extend: 'Flex',
  childExtend: 'CheckCaption',
  props: {
    flow: 'y',
    gap: 'B',
    childProps: {
      Caption: {},
      Checkbox: {
        Input: {},
        Flex: {
          Icon: {
            name: 'check',
          },
        },
      },
    },
    children: [
      {},
      {},
    ],
  },
};