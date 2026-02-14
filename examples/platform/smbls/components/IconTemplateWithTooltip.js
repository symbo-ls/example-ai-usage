export const IconTemplateWithTooltip = {
  extends: [
    'ClickableItem',
    'Link',
    'IconText',
    'TooltipParent',
  ],
  round: 'X',
  scrollToTop: false,
  aspectRatio: '1 / 1',
  flexAlign: 'center center',
  href: (el, s) => window.location.pathname + '/edit-icon/' + s.key,
  transition: 'A defaultBezier',
  transitionProperty: 'transform, opacity, border-radius',
  theme: null,
  padding: 'A2',
  '& @container (min-width: 50px)': {
    border: '10px solid blue',
    color: 'red !important',
    style: {
      color: 'red !important',
    },
  },
  ':hover': {
    theme: 'secondary',
    transform: 'scale(1.015)',
    '> svg': {
      fontSize: 'E',
    },
  },
  onClick: (event, element, state, ctx) => {
    element.call('copyStringToClipboard', state.key)
  },
  TooltipHidden: {
    props: (el, s) => ({
      flexFlow: 'row',
      flexAlign: 'center',
      shapeDirection: 'top',
      padding: 'X Y1',
      top: '103%',
      pointerEvents: 'auto',
      whiteSpace: 'nowrap',
      minWidth: '0',
      gap: 'X2',
      name: 'copy outline',
      title: s.key,
      onClick: (event, el, state) => {
        event.stopImmediatePropagation()
        event.preventDefault()
        el.setProps({
          Icon: {
            name: 'checkmark outline'
          }
        })
        const t = setTimeout(() => {
          el.setProps({
            Icon: {
              name: 'copy outline'
            }
          })
          clearTimeout(t)
        }, 1000)
        el.call('copyStringToClipboard', state.key)
      }
    }),
  },
};