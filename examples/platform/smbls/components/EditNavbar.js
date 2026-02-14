export const EditNavbar = {
  extends: 'Navbar',
  position: 'sticky',
  top: '0',
  width: '100%',
  padding: 'W X W Z2',
  fontSize: '1rem',
  NavbarButtonSet_meta: {
    Que: {
      onClick: (ev, el) => {
        el.setWindow('docs', '/properties')
      },
    },
    Close: {
      onClick: (ev, el) => {
        el.closeWindow('componentEditor')
      },
    },
  },
};