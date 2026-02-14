export const DropdownItem = {
  boxShadow: 'none',
  round: '0',
  background: 'transparent 0',
  opacity: 0.75,
  transition: 'A',
  transitionProperty: 'visibility, color, background, opacity',
  onClick: async (ev, el, s, ctx) =>
    await el.call('dropdownClick', ev, el, s, ctx),
  '@dark': {
    color: 'gray13',
  },
  '@light': {
    background: 'gray15',
    color: 'gray4',
  },
  ':hover': {
    opacity: 1,
    style: {
      svg: {
        opacity: 0.15,
      },
    },
    '@dark': {
      background: 'gray6 .05',
    },
    '@light': {
      background: 'white .5',
    },
  },
  '.isActive': {
    fontWeight: '500',
    opacity: 1,
    '@dark': {
      background: 'gray6 .15',
    },
    '@light': {
      background: 'white',
    },
    '& svg': {
      opacity: 0.5,
    },
    ':hover': {
      style: {
        svg: {
          opacity: 0.65,
        },
      },
      '@dark': {
        background: 'gray6 .15',
      },
      '@light': {
        background: 'white',
      },
    },
  },
};