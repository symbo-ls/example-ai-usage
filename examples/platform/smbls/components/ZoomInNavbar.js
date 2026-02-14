export const ZoomInNavbar = {
  align: 'center',
  onFrame: (el, s) => {
    const data = el.getCanvasScope()
    const {
      positions
    } = data
    const scale = positions?.scale
    el.variables({
        scale
      })
      .changed(_ => {
        el.Box.node.innerText = scale ? parseInt(scale * 100) + '%' : '100%'
      })
  },
  NavbarButton_out: {
    onClick: (ev, el, s) => {
      const data = el.getCanvasScope()
      const frameWindow = el.getCanvasFrameWindow()
      const {
        x,
        y
      } = el.getCanvasPositions()
      const {
        innerWidth,
        innerHeight
      } = frameWindow
      data.panzoomInstance.smoothZoom(x + innerWidth / 2, y + innerHeight / 2, 0.75)
    },
  },
  Box: {
    onDblclick: (ev, el, s, ctx) => {
      const data = el.getCanvasScope()
      const frameWindow = el.getCanvasFrameWindow()
      const {
        innerWidth,
        innerHeight
      } = frameWindow
      const {
        x,
        y
      } = el.getCanvasPositions()
      el.call('clearFollowing')
      data.panzoomInstance.smoothZoomAbs(
        x + innerWidth / 2,
        y + innerHeight / 2,
        1
      )
    },
  },
  NavbarButton_in: {
    onClick: (ev, el, s) => {
      const data = el.getCanvasScope()
      const Canvas = el.getCanvas()
      const frameWindow = Canvas.Iframe.node.contentWindow
      const positions = el.getCanvasPositions()
      const {
        x,
        y
      } = positions
      const {
        innerWidth,
        innerHeight
      } = frameWindow
      data.panzoomInstance.smoothZoom(x + innerWidth / 2, y + innerHeight / 2, 1.25)
    },
  },
};