export const TutorialsRowItem = {
  padding: '0',
  gap: 'Y1',
  flow: 'y',
  widthRange: 'F2',
  round: '0',
  overflow: 'visible',
  ':after': null,
  cursor: 'pointer',
  opacity: '0.8',
  transition: 'A defaultBezier all',
  ':hover': {
    opacity: '1',
    '& .playButton': {
      opacity: '1',
    },
  },
  onClick: (ev, el, s) => {
    el.call('openModalVideo', `https://www.youtube.com/embed/${s.youtubeId}?controls=1&amp;autoplay=1`)
  },
};