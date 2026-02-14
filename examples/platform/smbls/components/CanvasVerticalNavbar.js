export const CanvasVerticalNavbar = {
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
  NavbarButtonSet: {
    childProps: {
      onClick: (ev, el) => {
        const activeContent = el.props.section
        el.setWindow('explorer', activeContent)
        window.setTimeout(() => {
          el.call('setSidebarContent', activeContent)
        }, 35)
      },
    },
  },
  NavbarButtonSet_meta: {
    Expand: {
      onClick: (ev, el) => {
        el.toggleWindow('explorer')
      },
    },
  },
};