export const ModalVideo = {
  state: {},
  boxSize: '100% 100%',
  zIndex: '10',
  position: 'fixed',
  backdropFilter: 'blur(15px)',
  '!activeVideo': {
    display: 'none',
  },
  ':after': {
    content: '""',
    position: 'absolute',
    inset: '0',
    zIndex: 1,
    theme: 'document',
    opacity: '.65',
  },
  onClick: (event, el, state) => {
    el.call('closeModalVideo')
  },
  IconButton: {
    theme: 'transparent',
    position: 'absolute',
    top: 'A',
    right: 'A',
    padding: 'Z',
    round: '100%',
    zIndex: 2,
    onClick: (event, el, state) => {
      el.call('closeModalVideo')
    },
    ':hover': {
      theme: 'field',
    },
    Icon: {
      name: 'x',
      fontSize: 'D',
    },
  },
  Iframe: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    objectFit: 'fill',
    aspectRatio: '11 / 7',
    height: '65%',
    border: 'none',
    round: 'A',
    zIndex: 2,
    src: (el, s) => {
      const withAutoplay = (url) => {
        if (!url) return url

        const join = url.includes('?') ? '&' : '?'

        return (
          url +
          join +
          'autoplay=1&playsinline=1&controls=1&rel=0'
        )
      }

      return withAutoplay(s.activeVideo)
    },
    allow: 'autoplay; fullscreen; picture-in-picture',
    allowFullscreen: true,
    '@tabletS': {
      minWidth: '90%',
      maxWidth: '90%',
    },
  },
};