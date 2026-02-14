export const ToggleCaptionList = {
  extend: 'Flex',
  childExtend: 'ToggleCaption',
  props: {
    flow: 'y',
    gap: 'B',
    childProps: {
      Caption: {
        text: 'Caption',
      },
      Toggle: {
        Input: {},
        Flex: {
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