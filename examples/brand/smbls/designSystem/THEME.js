export default {
  transparent: {
    '@dark': {
      background: 'transparent',
      color: 'white 0.65',
    },
    '@light': {
      background: 'transparent',
      color: 'black 0.65',
    },
  },
  text: {
    background: 'transparent 0',
    '@dark': {
      color: 'gray10',
    },
    '@light': {
      color: 'gray4',
    },
  },
  document: {
    '@dark': {
      color: 'gray12',
      background: 'gray1 1 +4',
    },
    '@light': {
      background: 'gray15',
      color: 'gray1',
    },
  },
  primary: {
    '@dark': {
      color: 'white',
      background: 'electricBlue',
    },
    '@light': {
      color: 'white',
      background: 'gray1',
    },
  },
  secondary: {
    '@dark': {
      color: 'gray14',
      background: 'gray2 0.85',
      ':hover': {
        color: 'gray15',
        background: 'gray2 1 +6',
      },
      ':active': {
        color: 'gray16',
        background: 'gray2 1 +10',
      },
      '.isActive': {
        color: 'gray16',
        background: 'gray2 1 +10',
      },
    },
    '@light': {
      color: 'gray4',
      background: 'gradient-dark',
      ':hover': {
        color: 'gray2',
        background: 'gradient-dark-active',
      },
      ':active': {
        color: 'gray2',
        background: 'gradient-dark-active',
      },
      '.isActive': {
        color: 'gray2',
        background: 'gradient-dark-active',
      },
    },
  },
  'secondary-highlight': {
    '@dark': {
      color: 'gray14',
      background: 'gray2 0.85 +16',
      ':hover': {
        color: 'gray15',
        background: 'gray2 1 +20',
      },
      ':active': {
        color: 'gray16',
        background: 'gray2 1 +26',
      },
      '.isActive': {
        color: 'gray16',
        background: 'gray2 1 +26',
      },
    },
    '@light': {
      color: 'gray3',
      background: 'gray15',
      ':hover': {
        color: 'gray2',
        background: 'white',
      },
      ':active': {
        color: 'gray2',
        background: 'white',
      },
      '.isActive': {
        color: 'gray2',
        background: 'white',
      },
    },
  },
  tertiary: {
    '@dark': {
      color: 'gray10',
      background: 'transparent',
      ':hover': {
        color: 'gray15',
        background: 'gray2 1 +6',
      },
      ':active': {
        color: 'gray16',
        background: 'gray2 1 +10',
      },
      '.isActive': {
        color: 'gray16',
        background: 'gray2 1 +10',
      },
    },
    '@light': {
      color: 'gray6',
      background: 'transparent',
      ':hover': {
        color: 'gray2',
        background: 'gradient-dark-active',
      },
      ':active': {
        color: 'gray2',
        background: 'gradient-dark-active',
      },
      '.isActive': {
        color: 'gray2',
        background: 'gradient-dark-active',
      },
    },
  },
  quaternary: {
    '@dark': {
      color: 'gray10',
      background: 'gray3 .95',
      ':hover': {
        color: 'gray15',
        background: 'gray3',
      },
      ':active': {
        color: 'gray15',
        background: 'gray3',
      },
      '.isActive': {
        color: 'gray15',
        background: 'gray3',
      },
    },
    '@light': {
      color: 'gray2',
      background: 'gray15 .95',
      ':hover': {
        color: 'gray15',
        background: 'gray4',
      },
      ':active': {
        color: 'gray15',
        background: 'gray4',
      },
      '.isActive': {
        color: 'gray15',
        background: 'gray4',
      },
    },
  },
  quinary: {
    '@dark': {
      color: 'gray10',
      background: 'gradient-light',
      ':hover': {
        color: 'gray15',
        background: 'gradient-light-active',
      },
      ':active': {
        color: 'gray15',
        background: 'gradient-light-active',
      },
      '.isActive': {
        color: 'gray15',
        background: 'gradient-light-active',
      },
    },
    '@light': {
      color: 'gray4',
      background: 'gradient-dark',
      ':hover': {
        color: 'gray2',
        background: 'gradient-dark-active',
      },
      ':active': {
        color: 'gray2',
        background: 'gradient-dark-active',
      },
      '.isActive': {
        color: 'gray2',
        background: 'gradient-dark-active',
      },
    },
    '.child': '--quaternary',
  },
  default: {
    '@dark': {
      color: 'gray11',
      background: 'gray6 .35',
    },
    '@light': {
      background: 'gray7 .15',
      color: 'gray6 1 32',
    },
  },
  property: {
    '@dark': {
      color: '--theme-default-dark-color',
      background: '--theme-default-dark-background',
    },
    '@light': {
      background: '--theme-default-light-background',
      color: '--theme-default-light-color',
    },
  },
  color: {
    '@dark': {
      color: 'white',
      background: 'color .25',
    },
    '@light': {
      background: 'color .25',
      color: 'color 1 32',
    },
  },
  theme: {
    '@dark': {
      color: 'white',
      background: 'theme',
    },
    '@light': {
      color: 'gray4 .75',
      background: 'theme',
    },
  },
  typography: {
    '@dark': {
      color: 'white',
      background: 'typography .25',
    },
    '@light': {
      background: 'typography .25',
      color: 'typography 1 32',
    },
  },
  space: {
    '@dark': {
      color: 'white',
      background: 'space .25',
    },
    '@light': {
      background: 'space .25',
      color: 'space 1 32',
    },
  },
  shape: {
    '@dark': {
      color: 'white',
      background: 'shape .3',
    },
    '@light': {
      background: 'shape .3',
      color: 'shape 1 32',
    },
  },
  icons: {
    '@dark': {
      color: 'white',
      background: 'icons .25',
    },
    '@light': {
      background: 'icons .25',
      color: 'icons 1 32',
    },
  },
  css: {
    '@dark': {
      color: 'white',
      background: 'css .25',
    },
    '@light': {
      background: 'css .25',
      color: 'css 1 32',
    },
  },
  html: {
    '@dark': {
      color: 'white',
      background: 'html .28',
    },
    '@light': {
      background: 'html .28',
      color: 'html 1 32',
    },
  },
  alert: {
    background: 'yellow',
    color: 'black',
  },
  warning: {
    '@dark': {
      background: 'yellow .85',
      color: 'gray1',
    },
    '@light': {
      color: 'gray16',
      background: 'yellow',
    },
  },
  error: {
    '@dark': {
      background: 'red .85',
      color: 'gray1',
    },
    '@light': {
      background: 'red',
      color: 'gray16',
    },
  },
  success: {
    '@dark': {
      background: 'green .85',
      color: 'gray1',
    },
    '@light': {
      background: 'green',
      color: 'gray16',
    },
  },
  info: '--common-card-outline-interactive',
  header: {
    '@dark': {
      color: 'white',
      backgroundColor: 'gray1 .85',
      borderColor: 'white 0.01',
    },
    '@light': {
      color: 'black',
      background: 'gray15 .9',
      borderColor: 'black 0.01',
    },
  },
  navbar: {
    '@dark': {
      color: 'white',
      backdropFilter: 'blur(3px)',
      backgroundColor: 'gray1 .9 +6',
    },
    '@light': {
      color: 'black',
      backdropFilter: 'blur(3px)',
      background: 'gray15 .95',
    },
  },
  'navbar-button': {
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
        backgroundColor: 'gray5 .9',
      },
      '@light': {
        color: 'black',
        backgroundColor: 'gray12 .95',
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
  'navbar-button-active': {
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
  stroke: {
    '@dark': {
      color: 'transparent',
      '-webkit-text-stroke': '.5px white',
    },
    '@light': {
      color: 'transparent',
      '-webkit-text-stroke': '.5px black',
    },
  },
  'common-card': {
    '@dark': {
      color: 'gray12',
      background: 'gray2 0.65',
    },
    '@light': {
      color: 'gray2',
      background: 'gray16 +6',
    },
  },
  'common-card-interactive': {
    '@dark': {
      color: 'gray13',
      background: 'gray2 0.65',
      ':hover': {
        background: 'gray2',
      },
      ':focus': {
        background: 'gray2 1 +6',
      },
      ':active': {
        background: 'gray2 1 +6',
      },
    },
    '@light': {
      color: 'gray3',
      background: 'gray16 +6',
      ':hover': {
        background: 'gray16 1 +16',
      },
      ':focus': {
        background: 'gray16 1 +26',
      },
      ':active': {
        background: 'gray16 1 +26',
      },
    },
  },
  'common-card-outline': {
    '@dark': {
      color: 'gray12',
      borderColor: 'gray3 0.65',
    },
    '@light': {
      color: 'gray2',
      borderColor: 'gray14',
    },
  },
  'common-card-outline-interactive': {
    '@dark': {
      color: 'gray12',
      borderColor: 'gray3 .65',
      ':hover': {
        background: 'gray2 .65',
      },
      ':focus': {
        background: 'gray2',
      },
      ':active': {
        background: 'gray2',
      },
    },
    '@light': {
      color: 'gray2',
      borderColor: 'gray14',
      ':hover': {
        background: 'gray16 .65',
      },
      ':focus': {
        background: 'gray16',
      },
      ':active': {
        background: 'gray16',
      },
    },
  },
  'common-card-child': {
    '@dark': {
      color: 'gray12',
      background: 'gray2 1 -10',
    },
    '@light': {
      color: 'gray2',
      background: 'gray16 +16',
    },
  },
  'common-box': {
    '@dark': {
      background: 'gray2',
    },
    '@light': {
      background: 'white .75',
    },
  },
  'common-box-secondary': {
    '@dark': {
      background: 'gray3',
    },
    '@light': {
      background: 'white .65',
    },
  },
  'canvas-card': {
    '@dark': {
      borderWidth: '1px',
      borderColor: 'line',
      borderStyle: 'solid',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      color: 'gray12',
      background: 'gray1 0.97',
    },
    '@light': {
      color: 'gray2',
      background: 'gray16 +6',
    },
  },
  'canvas-card-glass': {
    '@dark': {
      borderWidth: '1px',
      borderColor: 'line',
      borderStyle: 'solid',
      boxShadow: '0 6px 16px -6px rgb(79 79 79 / 10%) inset, 0 4px 32px rgba(0, 0, 0, 0.25)',
      backdropFilter: 'blur(35px)',
      background: 'gray1 0.85',
      color: 'gray12',
    },
    '@light': {
      color: 'gray2',
      background: 'gray16 0.95 +6',
      backdropFilter: 'blur(35px)',
      boxShadow: '0 6px 16px -6px rgb(255 255 255 / 26%) inset, 0 10px 16px rgba(0, 0, 0, 0.01)',
    },
  },
  'dialog-elevated': {
    '@dark': {
      color: 'title',
      background: 'gray3 0.95 -16',
    },
    '@light': {
      color: 'title',
      background: 'gray14 0.98',
    },
  },
  field: {
    '@dark': {
      color: 'gray14',
      background: 'gray3 0.5',
      ':hover': {
        color: 'gray15',
        background: 'gray3 0.65 +2',
      },
      ':focus': {
        color: 'gray16',
        background: 'gray3 0.65 +6',
      },
    },
    '@light': {
      color: 'gray3',
      background: 'white 0.95',
      ':hover': {
        color: 'gray2',
        background: 'white',
      },
      ':focus': {
        color: 'gray2',
        background: 'white',
      },
    },
  },
  'field-placeholder': {
    '@dark': {
      color: 'gray12',
      background: 'gray3 0.5',
      ':hover': {
        color: 'gray15',
        background: 'gray3 0.65 +2',
      },
      ':focus': {
        color: 'gray16',
        background: 'gray3 0.65 +6',
      },
    },
    '@light': {
      color: 'gray5',
      background: 'white 0.85',
      ':hover': {
        color: 'gray2',
        background: 'white',
      },
      ':focus': {
        color: 'gray2',
        background: 'white',
      },
    },
  },
  'field-static': {
    '@dark': {
      color: 'gray14',
      background: 'gray3 0.5',
    },
    '@light': {
      color: 'gray3',
      background: 'white 0.95',
    },
  },
  'field-highlight': {
    '@dark': {
      color: 'gray14',
      background: 'gray3 0.65 +6',
      ':hover': {
        color: 'gray15',
        background: 'gray3 0.85 +10',
      },
      ':focus': {
        color: 'gray16',
        background: 'gray3 0.85 +10',
      },
    },
    '@light': {
      color: 'gray3',
      background: 'white 0.95',
      ':hover': {
        color: 'gray2',
        background: 'white',
      },
      ':focus': {
        color: 'gray2',
        background: 'white',
      },
    },
  },
  scene: {
    '@dark': {
      color: 'gray14',
      background: 'gray2 0.85',
    },
    '@light': {
      color: 'gray4',
      background: 'gradient-dark',
    },
  },
  'scene-preview-interactive': {
    '@dark': {
      color: 'gray13',
      background: 'gray2 0.5',
      ':hover': {
        background: 'gray2 .85',
      },
      ':active': {
        background: 'gray2 1 +1',
      },
    },
    '@light': {
      color: 'gray3',
      background: 'gray16 +6',
      ':hover': {
        background: 'gray16 1 +16',
      },
      ':active': {
        background: 'gray16 1 +26',
      },
    },
  },
  headerCaptions: {
    '@dark': {
      color: 'white',
      backdropFilter: 'blur(3px)',
      backgroundColor: 'gray2 0.95 -6',
    },
    '@light': {
      color: 'black',
      backdropFilter: 'blur(3px)',
      backgroundColor: 'gray13 0.89',
    },
  },
  headerSidebar: {
    '@dark': {
      color: 'white',
      backgroundColor: 'gray1 .95',
      borderColor: 'white 0.01',
    },
    '@light': {
      color: 'black',
      background: 'gray16 .95 +10',
      borderColor: 'black 0.01',
    },
  },
  layer: {
    '@dark': {
      background: 'gray7 0.1',
    },
    '@light': {
      background: 'gray15 0.1',
    },
  },
  transparentPattern: {
    '@dark': {
      background: 'transparentBg',
      backgroundColor: 'document',
      backgroundSize: '20px 20px',
      backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
    },
  },
  dots: {
    backgroundPosition: 'top',
    backgroundRepeat: 'repeat',
    backgroundSize: '20px 20px',
    '@dark': {
      backgroundImage: 'dotsDark',
      backgroundPosition: 'top',
      backgroundRepeat: 'repeat',
      backgroundSize: '20px 20px',
    },
    '@light': {
      backgroundImage: 'dotsLight',
      backgroundPosition: 'top',
      backgroundRepeat: 'repeat',
      backgroundSize: '20px 20px',
    },
  },
  line: {
    '@dark': {
      background: '--color-line-dark',
    },
    '@light': {
      background: '--color-line-light',
    },
  },
  modalFade: {
    '@dark': {
      color: 'white',
      backdropFilter: 'blur(3px)',
      backgroundColor: 'gray1 0.75 +6',
    },
    '@light': {
      color: 'black',
      backdropFilter: 'blur(3px)',
      backgroundColor: 'gray13 0.75',
    },
  },
  modal: {
    '@dark': {
      color: 'white',
      background: 'gray2',
    },
    '@light': {
      color: 'gray5',
      background: 'gray16',
    },
  },
  modalPreview: {
    '@dark': {
      color: 'white',
      background: 'gray3 .98 -16',
    },
    '@light': {
      color: 'gray5',
      background: 'gray16',
    },
  },
  sepia: {
    ':hover': {
      opacity: '.65',
    },
    ':active': {
      opacity: '1',
    },
    '@dark': {
      color: 'yellow',
      ':hover': {
        background: 'yellow 0.15 85',
      },
      ':active': {
        background: 'yellow 0.15 85',
      },
    },
    '@light': {
      color: 'yellow 1 -25',
      ':hover': {
        background: 'yellow 0.2',
      },
      ':active': {
        background: 'yellow 0.2',
      },
    },
  },
  'sepia-active': {
    color: 'yellow',
    background: 'yellow 0.15 85',
    borderColor: 'yellow 0.15 85',
  },
};