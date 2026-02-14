export const CanvasButton = {
  '.isActive': {
    '@dark': {
      color: 'white',
      backgroundColor: 'gray5',
    },
    '@light': {
      color: 'black',
      backgroundColor: 'gray11',
    },
    ':hover': {
      '@dark': {
        backgroundColor: 'gray5 .9',
      },
      '@light': {
        backgroundColor: 'gray12 .95',
      },
    },
  },
  '!isActive': {
    '@dark': {
      color: 'gray14',
      backgroundColor: 'transparent 0',
    },
    '@light': {
      color: 'gray3',
      backgroundColor: 'transparent 0',
    },
    ':hover': {
      '@dark': {
        color: 'white',
        backgroundColor: 'gray4 .9',
      },
      '@light': {
        color: 'black',
        backgroundColor: 'gray13 .95',
      },
    },
    ':active': {
      '@dark': {
        color: 'white',
        backgroundColor: 'gray5 .9',
      },
      '@light': {
        color: 'black',
        backgroundColor: 'gray12 .95',
      },
    },
  },
};