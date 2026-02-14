export default {
  document: {
    '@light': {
      color: 'black',
      background: 'white',
    },
    '@dark': {
      color: 'white',
      background: 'softBlack',
    },
  },
  none: {
    color: 'none',
    background: 'none',
  },
  transparent: {
    color: 'currentColor',
    background: 'transparent',
  },
  dialog: {
    '@dark': {
      color: 'white',
      background: 'codGray',
      colorKey: 'white',
      colorType: null,
      backgroundKey: 'codGray',
      backgroundType: null,
    },
    '@light': {
      color: 'white',
      background: 'white 0.065',
    },
  },
  button: {
    '@dark': {
      color: 'white',
      background: 'transparent',
      ':hover': {
        background: 'deepFir',
      },
      ':active': {
        background: 'deepFir +15',
      },
    },
  },
};