export const UserNavbar = {
  AvatarStatus: {
    margin: '-W - - -',
    Avatar: {},
    Status: {},
  },
  Hgroup: {
    gap: 'W',
    H: {
      tag: 'h5',
      text: 'Nika Tomadze',
    },
    P: {
      text: 'active now',
    },
  },
  IconButtonSet: {
    margin: '- - - auto',
    childProps: {
      Icon: {},
    },
    children: () => [{}, {}],
  },
  extend: 'Flex',
  props: {
    minWidth: 'G2',
    align: 'center flex-start',
    gap: 'Z',
  },
};