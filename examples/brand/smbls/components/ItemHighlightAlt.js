export const ItemHighlightAlt = {
  extends: [
    'ItemHighlight',
  ],
  round: 'Z2',
  flow: 'column',
  align: 'flex-start space-between',
  margin: '- - - auto',
  width: '100%',
  padding: 'B B A',
  available: true,
  '@dark': null,
  '@light': null,
  '@screenM': {
    padding: 'B A A A1',
  },
  '@screenS': {
    gap: 'E1',
    padding: 'B B A',
  },
  '.available': {
    theme: 'common-card-interactive',
  },
  '!available': {
    order: 3,
    borderWidth: '1px',
    borderStyle: 'solid',
    background: 'none',
    theme: 'common-card-outline-interactive',
  },
};