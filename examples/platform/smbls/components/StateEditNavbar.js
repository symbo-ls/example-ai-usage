export const StateEditNavbar = {
  extends: 'FnEditNavbar',
  NavbarButtonSet: {
    NavbarButton_docs: {
      onClick: (ev, el) => {
        el.setWindow('docs', '/state')
      },
    },
    NavbarButton_close: {
      onClick: (ev, el) => {
        el.activateState(null)
      },
    },
  },
};