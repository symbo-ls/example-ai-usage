export const dashboard = {
  extend: 'Page',
  props: {
    width: '100%',
    flexFlow: 'y',
    onRender: (el, s) => {
      window.requestAnimationFrame(async () => {
        const fleet = await el.call('read')
        window.fleet = fleet
        el.call('setInitialData', {
          fleet
        })
      })
    },
    padding: 'X',
    gap: 'X',
    Header: {},
    Flex: {
      width: '100%',
      align: 'stretch start',
      theme: 'dialog',
      round: 'A',
      flex: 1,
      position: 'relative',
      Box: {
        position: 'relative',
        flex: 1,
        Overflow: {
          overflow: 'hidden auto',
          position: 'absolute',
          inset: '0',
          PageHead: {
            flexFlow: 'x',
            padding: 'A A2 Z',
            width: '100%',
            Title: {
              fontSize: 'Z2',
              Strong: {
                fontWeight: '700',
                text: 'Network ',
              },
              Span: {
                fontWeight: '100',
                text: (el, s) => (s.fleet && s.fleet.length) ? `(${s.fleet.length})` : '',
              },
            },
            NavButton: {
              theme: 'button',
              flow: 'row-reverse',
              margin: '-Y1 -Z2 - auto',
              icon: 'plus',
              text: 'Add network',
              onClick: (ev, el, s) => {
                s.update({
                  modal: '/add-network'
                })
              },
            },
          },
          Tr: {
            extends: 'Grid',
            zIndex: 3,
            position: 'sticky',
            background: 'black .001',
            backdropFilter: 'blur(10px)',
            top: '0',
            padding: 'A A2',
            templateColumns: '3fr 3fr 3fr 2fr 2fr',
            color: 'caption',
            childProps: {
              fontSize: 'Z1',
            },
            children: [
              'Network',
              'Environment',
              'Node types',
              'Cloud provider',
              '',
            ],
          },
          Hr: {
            margin: '0',
            opacity: '.035',
          },
          Table: {
            round: 'C1',
          },
        },
        Modal: {},
      },
      MetaSectionBars: {
        minWidth: 'G3',
      },
    },
  },
};