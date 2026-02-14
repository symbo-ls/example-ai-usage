export const FnEditNavbar = {
  extends: [
    'MicroNavbar',
    'Navbar',
  ],
  width: '100%',
  padding: 'W1 X X1',
  NavbarButtonSet: {
    NavbarButton_docs: {
      onClick: (ev, el) => {
        el.setWindow('docs', '/functions')
      },
    },
    NavbarButton_close: {
      onClick: (ev, el) => {
        el.activateFunction(null)
      },
    },
  },
};