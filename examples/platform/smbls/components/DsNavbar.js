export const DsNavbar = {
  extends: 'Navbar',
  position: 'absolute',
  zIndex: 1,
  top: '50%',
  transform: 'translate3d(0, -50%, 0)',
  left: '--canvas-gutter',
  flow: 'y',
  padding: 'U1 U1',
  round: 'C1',
  gap: 'X',
  theme: 'canvas-card-glass',
  NavbarButtonSet_meta: {
    Expand: {
      onClick: (ev, el) => {
        el.toggleWindow('explorer')
      },
    },
  },
};