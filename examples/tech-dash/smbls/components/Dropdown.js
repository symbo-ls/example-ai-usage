export const Dropdown = {
  props: {
    isDropdownRoot: true,
    theme: 'dialog',
    round: 'Z2',
    position: 'absolute',
    left: '50%',
    transform: 'translate3d(0, -10px, 0)',
    top: '102%',
    minWidth: 'F',
    maxHeight: 'H',
    transition: 'A defaultBezier',
    transitionProperty: 'visibility, transform, opacity',
    overflow: 'hidden auto',
    opacity: '0',
    visibility: 'hidden',
    boxSizing: 'border-box',
    zIndex: 1000,
    '@dark': {
      boxShadow: 'black .20, 0px, 5px, 10px, 5px',
    },
    '@light': {
      boxShadow: 'gray5 .20, 0px, 5px, 10px, 5px',
    },
  },
  attr: {
    dropdown: true,
  },
  tag: 'section',
};