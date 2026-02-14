export const WatchVideo = {
  align: 'center flex-start',
  gap: 'B1',
  round: 'A2',
  padding: 'X2 D X2 X1',
  maxWidth: 'fit-content',
  transition: 'transform B defaultBezier',
  cursor: 'pointer',
  borderColor: 'line',
  borderWidth: '1px',
  borderStyle: 'solid',
  '@mobileL': {
    flow: 'y',
    align: 'center center',
    padding: 'A A B1 A',
    gap: 'C1',
    round: 'B2',
  },
  ':hover': {
    transform: 'scale(1.0085)',
    '& img': {
      transform: 'scale(1.0085)',
    },
    '& button': {
      letterSpacing: '.35px',
    },
  },
  onClick: (event, el, s) => {
    el.call('openModalVideo', `https://www.youtube.com/embed/ko1TXI9pejg?autoplay=1`)
  },
};