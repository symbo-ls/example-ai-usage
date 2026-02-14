export const NavbarTooltip = {
  extends: 'TooltipHidden',
  top: '0',
  left: '0',
  theme: 'navbar',
  pointerEvents: 'none',
  tooltipPosition: 'bottom',
  shapeDirection: 'top',
  padding: 'Y Z2',
  fontSize: 'Z2',
  whiteSpace: 'nowrap',
  textAlign: 'center',
  minWidth: 'fit-content',
  lineHeight: 1,
  description: '',
  background: 'highlight-reversed',
  ':before': {
    color: 'highlight-reversed',
  },
  style: {
    pointerEvents: 'none !important',
  },
};