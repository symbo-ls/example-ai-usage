export const AIThread = {
  extends: 'Flex',
  props: {
    padding: 'A1',
    width: '100%',
    maxWidth: '100%',
    margin: '- auto',
    height: '100%',
    transition: 'A defaultBezier height',
    maxHeight: '50dvh',
    flow: 'y',
    gap: 'A2',
    overflow: 'auto',
    '::-webkit-scrollbar': {
      display: 'none',
    },
    children: (el, s) => s.thread,
    childrenAs: 'state',
  },
  childExtends: {
    props: (el, s) => ({
        alignSelf: s.role === 'user' ? 'start' : 'end',
        ':first-child': {
          margin: 'auto - -'
        },
        onRender: el => {
          // prevent scrolling in platform
          // if (location.host === 'symbols.app') return

          // run setTimout to run it after everything else
          const t = setTimeout(() => {
            el.log('Scrolling', el.node, el)
            // el.node.scrollIntoView()
            window.scrollBy(0, 80)
            clearTimeout(t)
          }, 35)
        }
      }),
    content: (el, s) => {
        if (s.role === 'user') {
          return {
            extends: 'AIMessage',
            props: {
              contentEditable: false,
              shape: 'bubble',
              shapeDirection: 'top left',
              round: 'X C C C',
              padding: 'Y2 A',
              margin: '- -Z',
              // round: 'C',
              maxWidth: 'fit-content'
            },
            Message: {
              props: {},
              html: (el, s) => s.message
            },
          }
        }

        return {
          extends: 'P',
          props: {
            color: 'paragraph',
            maxWidth: 'I1'
          },
          html: (el, s) => s.message
        }
      },
  },
};