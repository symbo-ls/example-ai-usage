export default {
  modalIn: {
    from: {
      transform: 'scale(0.95)',
      opacity: 0,
    },
    to: {
      transform: '',
      opacity: 1,
    },
  },
  modalInUp: {
    from: {
      transform: 'translate3d(0, 6.5%, 0)',
      opacity: 0,
    },
    to: {
      transform: '',
      opacity: 1,
    },
  },
  modalInDown: {
    from: {
      transform: 'translate3d(0, -6.5%, 0)',
      opacity: 0,
    },
    to: {
      transform: '',
      opacity: 1,
    },
  },
  modalOut: {
    to: {
      transform: 'scale(0.95)',
      opacity: 0,
    },
  },
  modalOutDown: {
    from: {
      transform: '',
      opacity: 1,
    },
    to: {
      transform: 'translate3d(0, 6.5%, 0)',
      opacity: 0,
    },
  },
  fadeIn: {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
  fadeInSlowly: {
    '0%': {
      opacity: 0,
    },
    '35%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
  fadeInUp: {
    from: {
      transform: 'translate3d(0, 12.5%, 0)',
      opacity: 0,
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
      opacity: 1,
    },
  },
  fadeInUpShort: {
    from: {
      transform: 'translate3d(0, 6.5%, 0)',
      opacity: 0,
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
      opacity: 1,
    },
  },
  fadeInUpLong: {
    from: {
      transform: 'translate3d(0, 45%, 0)',
      opacity: 0,
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
      opacity: 1,
    },
  },
  fadeInDown: {
    from: {
      transform: 'translate3d(0, -12.5%, 0)',
      opacity: 0,
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
      opacity: 1,
    },
  },
  fadeInLeft: {
    from: {
      transform: 'translate3d(12.5%, 0, 0)',
      opacity: 0,
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
      opacity: 1,
    },
  },
  fadeInDownLong: {
    from: {
      transform: 'translate3d(0, -45%, 0)',
      opacity: 0,
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
      opacity: 1,
    },
  },
  fadeOut: {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  },
  fadeOutSlowly: {
    '0%': {
      opacity: 1,
    },
    '75%': {
      opacity: 0.75,
    },
    '100%': {
      opacity: 0,
    },
  },
  fadeOutUp: {
    from: {
      transform: 'translate3d(0, 0, 0)',
      opacity: 1,
    },
    to: {
      transform: 'translate3d(0, -12.5%, 0)',
      opacity: 0,
    },
  },
  fadeOutUpLong: {
    from: {
      transform: 'translate3d(0, 0, 0)',
      opacity: 1,
    },
    to: {
      transform: 'translate3d(0, -45%, 0)',
      opacity: 0,
    },
  },
  fadeOutDown: {
    from: {
      transform: 'translate3d(0, 0, 0)',
      opacity: 1,
    },
    to: {
      transform: 'translate3d(0, 12.5%, 0)',
      opacity: 0,
    },
  },
  slideInOut: {
    '0%': {
      transform: 'translate3d(0, 50%, 0)',
      opacity: 0,
    },
    '15%': {
      transform: 'translate3d(0, -50%, 0)',
      opacity: 1,
    },
    '85%': {
      transform: 'translate3d(0, -50%, 0)',
      opacity: 1,
    },
    '100%': {
      transform: 'translate3d(0, -150%, 0)',
      opacity: 0,
    },
  },
  scaleOutIn: {
    from: {
      transform: 'scale(1.2)',
      opacity: '0',
    },
    to: {
      transform: 'scale(1)',
      opacity: '1',
    },
  },
  scaleInOut: {
    from: {
      transform: 'scale(1)',
      opacity: '1',
    },
    to: {
      transform: 'scale(1.2)',
      opacity: '0',
    },
  },
  overflowVisibleSlowly: {
    '0%': {
      overflow: 'hidden',
    },
    '35%': {
      overflow: 'hidden',
    },
    '100%': {
      overflow: 'visible',
    },
  },
  overflowHiddenSlowly: {
    '0%': {
      overflow: 'visible',
    },
    '75%': {
      overflow: 'hidden',
    },
    '100%': {
      overflow: 'hidden',
    },
  },
  rotate: {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
  blinking: {
    '0%': {
      opacity: 1,
    },
    '50%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
};