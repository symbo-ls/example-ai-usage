export const Scene = {
  extends: 'SceneTemplate',
  margin: '- auto',
  boxSize: '100%',
  action: 'recreate',
  frameProps: {
    align: 'center center',
    position: 'absolute',
    inset: '0 0 0 0',
    width: '100%',
    height: '100%',
  },
  Iframe: {
    onRenderScene: (el, s) => {
      const value = el.call('isString', s.value) ? el.call('evalStringCodeUnsafe', s.value) : s.value

      const {
        useLibrary,
        frameProps,
        useRouter,
        useAppjs,
        initOptions
      } =
      el.parent.props
      if (!value) return

      window.requestAnimationFrame(async () => {
        await el.call('renderStateComponent', value, el, s, {
          useLibrary,
          frameProps,
          useRouter,
          useAppjs,
          initOptions
        })
      })
    },
    onRender: (el, s, ctx) => {
      el.node.onload = () => el.props.onRenderScene(el, s, ctx)
    },
    onUpdate: (el, s) => {
      if (el.props.scrollToTop)
        el.getRoot().node.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
    },
    onBeforeUpdate: (ch, el, s, ctx, opts) => {
      if (!opts.forcePreviewUpdate) return
      const frameWindow = el.node.contentWindow
      const forcedAction = opts.fromLayers ? 'update' : el.parent.props.action
      el.call('sceneActions')[forcedAction].call(frameWindow, el, s, ctx)
      return false
    },
  },
};