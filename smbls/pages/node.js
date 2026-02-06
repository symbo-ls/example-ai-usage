export const node = {
  extend: [
    'Page',
    'Layout',
  ],
  props: {
    width: '100%',
    padding: 'X',
    flexFlow: 'y',
    gap: 'X',
    onRender: (el, s) => {
        window.requestAnimationFrame(async () => {
          let [, _, protocol, nodeType, uid] = window.location.pathname.split('/')
          if (window.location.pathname === 'srcdoc') {
            protocol = 'Eth2'
            nodeType = 'validator'
            uid = '6a596043-2744-4d36-b10a-c8c2a35f6a7c'
          }

          s.protocol = protocol
          if (!s.parent.network) {
            s.parent.network = {
              protocol
            }
          } else {
            s.parent.network.protocol = protocol
          }

          const TYPE_MAP = {
            validator: 'validators',
            rpc: 'rpc_nodes'
          }
          const node = s.network?.[TYPE_MAP[nodeType]]?.filter(v => v.uid === uid)[0]
          if (node) {
            node.nodeType = nodeType
            node.protocol = protocol
          }

          el.call('setInitialData', {
            node
          })

          window.requestAnimationFrame(async () => {
            const node = await el.call('read', `/node/${nodeType}/${uid}`)
            node.nodeType = nodeType
            node.protocol = protocol
            el.call('setInitialData', {
              node
            })
          })
        })
      },
  },
  Header: {
    Link: {
      href: '/',
    },
  },
  Content: {
    state: 'node',
    PageHead: {
      state: '../network',
      extends: 'Flex',
      gap: 'A',
      flexFlow: 'x',
      padding: 'Z A',
      width: '100%',
      Protocol: {
        extends: [
          'Link',
          'Flex',
        ],
        align: 'center',
        href: '/network/{{ protocol }}',
        gap: 'Z',
        Avatar: {
          src: '{{ protocol }}.png',
          boxSize: 'A2',
        },
        Strong: {
          lineHeight: 1,
          text: '{{ protocol }}',
        },
      },
      NavButton: {
        theme: 'button',
        icon: 'chevron down',
        flow: 'row-reverse',
        href: '/network/{{ protocol }}',
        fontWeight: 'bold',
        text: 'Show All Nodes',
      },
      NavButton_edit: {
        theme: 'button',
        flow: 'row-reverse',
        margin: '- - - auto',
        icon: 'edit',
        text: 'Edit node',
        onClick: (ev, el, s) => {
            s.root.update({
              modal: '/edit-node'
            })
          },
      },
      DropdownParentFocus: {
        Input_trigger: {
          visibility: 'hidden',
        },
        IconButton_add: {
          theme: 'button',
          icon: 'moreVertical',
          Icon: {
            pointerEvents: 'none',
          },
        },
        Dropdown: {
          left: 'auto',
          right: '0',
          padding: 'X2 -',
          DropdownList: {
            childExtends: 'Button',
            childProps: {
              theme: 'button',
              align: 'start',
              gap: 'Y2',
            },
            CopyURL: {
              icon: 'copy',
              text: 'Copy',
              onClick: (ev, el, s) => {

                },
            },
            Delete: {
              icon: 'trash',
              text: 'Remove node',
              onClick: (ev, el, s, ctx) => {
                  const y = window.confirm('You sure you want to delete this node?')
                  if (y) el.call('remove', 'node', s.protocol, s.uid)
                },
            },
          },
        },
      },
    },
    Modal: {},
    Hr: {
      opacity: '0.05',
      margin: '0',
    },
    Flex: {
      align: 'stretch start',
      flex: 1,
      Box: {
        flex: 1,
        position: 'relative',
        Overflow: {
          overflow: 'hidden auto',
          position: 'absolute',
          inset: '0',
          ValidatorContent: {},
        },
      },
      NodeProperties: {},
    },
  },
};