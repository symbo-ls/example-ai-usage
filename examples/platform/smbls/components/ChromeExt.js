export const ChromeExt = {
  P: {
    color: 'gray8',
    margin: '0 0 X2',
    text: 'Optionally you can install the Chrome extension to have realtime preview of your Symbols:',
  },
  Link: {
    target: '_blank',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    display: 'inline-block',
    href: '#',
    transition: 'opacity A defaultBezier, border A defaultBezier',
    round: 'Z',
    opacity: '.9',
    ':hover': {
      opacity: '1',
      borderColor: 'gray8 .25',
    },
    Img: {
      display: 'block',
      height: 'C1',
      src: 'chrome-ext.png',
    },
  },
};