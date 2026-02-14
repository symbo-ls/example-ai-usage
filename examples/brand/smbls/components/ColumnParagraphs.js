export const ColumnParagraphs = {
  extends: 'Grid',
  childExtends: 'P',
  width: '100%',
  gap: 'C',
  columns: '4fr 7fr 7fr',
  '@mobileM': {
    display: 'flex',
    flexFlow: 'column',
  },
  childProps: {
    maxWidth: 'G+C',
    color: 'paragraph',
  },
};