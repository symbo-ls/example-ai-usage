export const NavbarTooltipParent = {
  onUpdate: (el, s) => {
    const active = window.location.pathname.includes(s.href)
    if (active) {
      el.call('setNavbarTooltipPosition')
    }
  },
  onMouseenter: (ev, el, s) => {
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