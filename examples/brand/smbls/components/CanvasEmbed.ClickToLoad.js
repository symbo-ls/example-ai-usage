const Canvasembedclicktoload = {
  position: 'relative',
  border: '1px, solid, line',
  round: 'Z2',
  overflow: 'hidden',
  onClick: (e, el) => {
    el.LoaderRatio.setProps({
      animation: 'scaleInOut',
      animationDelay: 'F',
      pointerEvents: 'none',
    })
    el.CanvasEmbed.setProps({
      hide: false,
      show: true
    })
  },
  minHeight: 'G',
};

export { Canvasembedclicktoload as 'CanvasEmbed.ClickToLoad' }