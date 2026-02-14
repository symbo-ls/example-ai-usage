export const EditNavbarCopy = {
  extends: 'Navbar',
  position: 'sticky',
  top: '0',
  width: '100%',
  fontSize: '1rem',
  padding: 'W X W Z2',
  round: '--canvas-round --canvas-round 0 0',
  onDblclick: (ev, el) => {
    el.getRootState().codeMinimized = !el.getRootState().codeMinimized
  },
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