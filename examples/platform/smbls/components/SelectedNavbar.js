export const SelectedNavbar = {
  extends: 'EditNavbar',
  minWidth: 'G1',
  fontSize: 'Y2',
  position: 'absolute',
  bottom: '100%',
  margin: 'Z -',
  left: '50%',
  transition: 'X opacity defaultBezier',
  padding: '0 W 0 Z2',
  round: '--canvas-round',
  top: 'auto',
  pointerEvents: 'auto',
  theme: 'common-box',
  isEditing: (el, s) => s.isEditMode,
  transform: 'translate3d(-50%, 0, 1px)',
  borderColor: 'line',
  borderWidth: '1px',
  borderStyle: 'solid',
  '.isEditing': {
    theme: 'field',
  },
  '!isEditing': {
    theme: 'navbar',
  },
  onBeforeUpdate: (_, el, s, ctx, opts) => {
    s.isEditMode = Boolean(opts.force)

    const selected = el.getSelectedKey()
    if (!selected) return
    s.key = selected
    s.type = selected.startsWith('/') ? 'pages' : 'components'
  },
};