export const ItemHighlight = {
  extends: 'Item',
  padding: 'B B1 A2 B1',
  round: 'Z2',
  flow: 'column',
  align: 'flex-start space-between',
  '@dark': {
    background: 'lightBlue .065',
    ':hover': {
      background: 'lightBlue .1',
    },
  },
  '@light': {
    theme: 'common-card',
  },
};