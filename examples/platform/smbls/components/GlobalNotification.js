export const GlobalNotification = {
  childExtends: [
    'Notification',
  ],
  flexFlow: 'y',
  gap: 'Y1',
  position: 'fixed',
  '.left-bottom': {
    left: 'A2',
    bottom: 'Z2',
  },
  zIndex: 9990100,
  round: 'Y',
  bottom: 'C1',
  left: '50%',
  transform: 'translateX(-50%)',
  childrenAs: 'state',
  children: (el, s) => s.notifications,
  childProps: (el, s) => ({
    theme: s.type,
    minWidth: 'F',
    maxWidth: 'G2',
    padding: 'Z1 B1 Z A',
    align: 'start',
    boxShadow: '0, 10px, 26px, -4px, document',
    animation: 'fadeInUp',
    minWidth: 'F3',
    overflow: 'hidden',
    animationDuration: 'F, C, C',
    transform: 'translate3d(-50%, 35%, 0)',
    transition: 'B defaultBezier',
    transitionProperty: 'height, background, padding',
    // eslint-disable-next-line no-shadow
    onMouseover: (ev, el, s) => (s.hover = true),
    // eslint-disable-next-line no-shadow
    onMouseout: (ev, el, s) => (s.hover = false),
    // eslint-disable-next-line no-shadow
    onClick: (ev, el) => {
      el.call('closeNotification', null, {
        forced: true
      })
      if (s.href) {
        el.router(s.href || '/dashboard', el.getRoot())
      }
    },
    IconText: null,
    Hgroup: {
      H: {
        color: 'currentColor',
        tag: 'strong',
        text: '{{title}}'
      },

      P: {
        color: 'currentColor',
        text: '{{message}}'
      }
    },
    Icon: {
      position: 'absolute',
      padding: 'Z',
      onClick: (ev, el, s) => {
        ev.preventDefault()
        ev.stopPropagation()
        el.parent.call('closeNotification', {
          forced: true
        })
      },
      top: '0',
      right: '0',
      boxSizing: 'none',
      name: 'crossmark',
      color: 'currentColor',
      cursor: 'pointer'
    }
  }),
};