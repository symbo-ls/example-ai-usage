export const NavbarButton = {
  extends: [
    'CanvasButton',
    'CircleButton',
  ],
  position: 'relative',
  padding: 'Y2',
  round: 'C1',
  theme: null,
  onMouseover: (ev, el, s) => {
    if (!s.hover) {
      s.hover = true
      el.call('setNavbarTooltipPosition', {
        visible: true
      })
    }
  },
  onMouseleave: (ev, el, s) => {
    if (s.hover) {
      s.hover = false
      const Tooltip = el.lookup('NavbarTooltip')
      if (Tooltip) {
        Tooltip.setProps({
          opacity: '0',
          visibility: 'hidden'
        })
      }
    }
  },
};