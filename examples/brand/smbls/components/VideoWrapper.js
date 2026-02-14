export const VideoWrapper = {
  overflow: 'hidden',
  position: 'relative',
  paddingBlockStart: '56.25%',
  width: '100%',
  round: 'A',
  childProps: {
    position: 'absolute',
    inset: '0',
    width: '100%',
    height: '100%',
  },
  onClick: (e, el) => {
    el.Picture.setProps({
      hide: true
    })
    el.Iframe.setProps({
      hide: false,
      show: true
    })
  },
};