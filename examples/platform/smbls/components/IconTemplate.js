export const IconTemplate = {
  extends: [
    'CanvasButton',
  ],
  round: 'X',
  aspectRatio: '1 / 1',
  transition: 'A defaultBezier',
  transitionProperty: 'transform, opacity, border-radius',
  padding: 'A2',
  align: 'center center',
  '& @container (min-width: 10px)': {
    border: '10px solid blue',
    color: 'red !important',
    style: {
      color: 'red !important',
    },
  },
};