export const DisabledPage = {
  maxHeight: 'none',
  overflow: 'visible',
  zIndex: '100',
  position: 'absolute',
  inset: '0 0 0 0',
  height: '100%',
  '.isActive': {
    maxHeight: '100dvh',
    overflow: 'hidden',
  },
  '!isActive': {
    maxHeight: 'none',
    overflow: 'visible',
  },
  overlay: {
    extend: [
      'Overlay',
      'Flex',
    ],
    props: {
      overflow: 'hidden',
      background: 'shadow-overlay',
      '!isActive': {
        animation: 'fadeOutDown',
        animationDuration: 'G',
        transition: 'G defaultBezier',
        transitionProperty: 'opacity, transform, visibility',
        opacity: '0',
        visibility: 'hidden',
        transform: 'translate3d(0, 12.5%, 0)',
        pointerEvents: 'none',
      },
      '.isActive': {
        animation: 'fadeInUp',
        animationDuration: 'G',
      },
    },
    message: {
      props: {
        animation: 'fadeInUpShort',
        animationDuration: 'G',
        animationDelay: 'G',
        margin: 'auto',
        padding: 'F E D',
        width: '100%',
        maxWidth: 'K_default',
        ArticleBig: {
          align: 'center',
          P: {
            color: 'gray8',
            margin: 'X 0 0',
            animation: 'fadeInUpShort',
            animationDuration: 'G',
            animationDelay: 'G1',
          },
        },
      },
      ArticleBig: {
        P: 'Add components from the marketplace.',
      },
    },
  },
};