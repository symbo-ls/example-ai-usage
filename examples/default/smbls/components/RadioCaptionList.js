export const RadioCaptionList = {
  extend: 'Flex',
  childExtend: 'RadioCaption',
  props: {
    flow: 'y',
    gap: 'B',
    childProps: {
      Caption: {
        text: 'Caption',
      },
      Radio: {
        Input: {},
        FLex: {
          ':after': {},
        },
      },
    },
    children: [
      {},
      {},
    ],
  },
};