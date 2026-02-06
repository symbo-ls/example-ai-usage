export const DropdownSiblingFocus = {
  props: {
    position: 'relative',
    tabindex: '0',
    style: {
      '&:focus-within': {
        zIndex: 1000,
        '& ~ [dropdown]': {
          transform: 'translate3d(0,0,0)',
          opacity: 1,
          visibility: 'visible',
        },
      },
    },
  },
  Input_trigger: {
    type: 'checkbox',
    opacity: '0',
    visibility: 'hidden',
    position: 'absolute',
    inset: '0',
    onUpdate: (el) => el.node.blur(),
  },
  style: {
    '&:focus-within': {
      zIndex: 1000,
      '& ~ [dropdown]': {
        transform: 'translate3d(0,0,0)',
        opacity: 1,
        visibility: 'visible',
      },
    },
  },
};