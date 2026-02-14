export const Modal = {
  props: (el, s) => ({
    position: 'absolute',
    inset: '0',
    background: 'black 0.95 +15',
    backdropFilter: 'blur(3px)',
    flexAlign: 'center center',
    zIndex: 99,
    transition: 'all defaultBezier B',
    pointerEvents: 'auto',
    ...(s.root?.modal ? {
      opacity: 1,
      visibility: 'visible',
    } : {
      opacity: 0,
      visibility: 'hidden',
    }),
    ':empty': {
      opacity: 0,
      visibility: 'hidden',
      pointerEvents: 'none',
    },
    onClick: (ev, el, s) => {
      console.log(1)
      s.root.update({
        modal: false
      })

      if (el.key === 'Modal') el.removeContent()
      else el.lookup('Modal').removeContent()
    },
  }),
  content: (el, s) => ({
    Box: s.root.modal && {
      extend: s.root.modal,
      props: {
        onClick: (ev) => ev.stopPropagation()
      }
    } || {}
  }) || {},
};