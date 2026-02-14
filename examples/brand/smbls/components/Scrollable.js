export const Scrollable = {
  gap: 'C',
  maxWidth: '100%',
  overflowY: 'auto',
  '::-webkit-scrollbar': {
    display: 'none',
  },
  '@mobileL': {
    padding: 'A B B B',
    style: {
      scrollSnapType: 'x mandatory',
    },
    scrollPadding: 'B',
  },
};