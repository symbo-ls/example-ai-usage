export const Layout = {
  props: {
    position: 'relative',
  },
  Header: {},
  SearchDropdown: {
    width: '100%',
    left: '0',
    extends: [
      'SearchDropdown',
      'Dropdown',
    ],
  },
  Content: {},
};