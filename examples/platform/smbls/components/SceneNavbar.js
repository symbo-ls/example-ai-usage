export const SceneNavbar = {
  extends: 'Navbar',
  width: 'max-content',
  padding: 'W X W Z2',
  position: 'relative',
  round: 'Z2 Z2 X2 X2',
  backdropFilter: 'none',
  alignSelf: 'start',
  borderWidth: '0',
  zIndex: 1001,
  height: 'auto',
  margin: '0',
  transform: 'translate3d(0, 0, 1px)',
  align: 'center space-between',
  fontSize: 'Y1',
  onClick: ev => ev.stopPropagation(),
  NavbarButtonSet: {
    Fullscreen: {
      icon: el => !el.getRootState('isFullscreen') ?
        'fullscreen' : 'fullscreen exit',
      onClick: async (ev, el) => {
        const Canvas = el.getCanvas()
        await Canvas.call('toggleFullscreen')
        el.getRootState().isFullscreen = Boolean(document.fullscreenElement)
        el.update()
      },
    },
    Minimize: {
      onClick: (ev, el) => {
        el.activateChosen(null)
      },
    },
    Close: {
      onClick: (ev, el, s) => {
        el.activateChosen(null)
      },
    },
  },
};