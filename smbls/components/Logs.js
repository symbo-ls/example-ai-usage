export const Logs = {
  extend: 'Flex',
  props: {
    flexFlow: 'y',
    borderWidth: '0 0 0 2px',
    borderStyle: 'solid',
    borderColor: '--theme-document-dark-background',
    minWidth: 'G3',
    padding: 'A A2',
    gap: 'A2',
    onRender: (el, s) => {
        window.requestAnimationFrame(async () => {
          let [, _, nodeType, uid] = window.location.pathname.split('/')
          if (window.location.pathname === 'srcdoc') {
            uid = '02841d62-e018-45e7-92f4-7928f832cd30'
          }

          const logs = await el.call('read', `/node/${uid}/logs`)

          el.call('setInitialData', {
            logs
          })
        })
      },
    '@tabletM': {
      hide: true,
    },
  },
  H6: {
    fontSize: 'Z2',
    text: 'Logs',
    fontWeight: 'bold',
  },
  Flex: {
    flow: 'y',
    children: (el, s) => s.logs,
    childrenAs: 'state',
    padding: 'Z2',
    gap: 'B2',
    childProps: {
      flexFlow: 'y',
      gap: 'Y',
      width: '100%',
      position: 'relative',
      ':hover .buttons': {
        opacity: 1,
      },
      ':not(:last-child)': {
        border: '0 0 1px 0, dashed, gray',
      },
      Date: {
        fontWeight: '300',
        fontSize: 'Z1',
        color: 'caption',
        text: '{{ created_at }}',
        position: 'relative',
        Status: {
          round: 'C1',
          boxSize: 'Z',
          border: '1px, solid, caption',
          position: 'absolute',
          top: 'Y1',
          left: '-A2',
        },
      },
      Notes: {
        text: '{{ status_notes }}',
      },
      Title: {
        text: '{{ action_items }}',
      },
    },
  },
};