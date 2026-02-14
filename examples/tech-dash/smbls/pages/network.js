export const network = {
  extend: 'Page',
  props: {
    width: '100%',
    padding: 'X',
    flexFlow: 'y',
    gap: 'X',
    onRender: (el, s) => {
      window.requestAnimationFrame(async () => {
        let [, _, protocol] = window.location.pathname.split('/')
        if (window.location.pathname === 'srcdoc') {
          protocol = 'Eth2'
        }

        const network = s.fleet?.filter(v => v.protocol === protocol)[0]
        if (network) {
          network.protocol = protocol
        }

        el.call('setInitialData', {
          network
        })

        window.requestAnimationFrame(async () => {
          const network = await el.call('read', `/${protocol}`)
          console.log({
            network
          })
          network.protocol = protocol

          el.call('setInitialData', {
            protocol,
            network
          })
        })
      })
    },
    Header: {
      Link: {
        href: '/',
      },
    },
    Flex: {
      width: '100%',
      align: 'stretch start',
      theme: 'dialog',
      position: 'relative',
      round: 'A',
      flex: 1,
      state: 'network',
      Box: {
        flex: 1,
        position: 'relative',
        Flex: {
          padding: 'Z',
          gap: 'A',
          NavButton: {
            theme: 'button',
            icon: 'chevron left',
            href: '/',
            fontWeight: 'bold',
            text: 'All Networks',
          },
          NavButton_add: {
            theme: 'button',
            flow: 'row-reverse',
            margin: '- - - auto',
            icon: 'plus',
            text: 'Add node',
            onClick: (ev, el, s) => {
              s.root.update({
                modal: '/add-node'
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
                  gap: 'Y',
                },
                CopyURL: {
                  icon: 'copy',
                  text: 'Copy',
                  onClick: (ev, el, s) => {

                  },
                },
                Update: {
                  icon: 'edit',
                  text: 'Edit',
                  onClick: (ev, el, s) => {
                    s.root.update({
                      modal: '/edit-network'
                    })
                  },
                },
                Delete: {
                  icon: 'trash',
                  text: 'Delete',
                  onClick: (ev, el, s, ctx) => {
                    const y = window.confirm('You sure you want to delete this network?')
                    if (y) el.call('remove', 'network', s.protocol)
                  },
                },
              },
            },
          },
        },
        Hr: {
          opacity: '0.05',
          margin: '0 0 B',
        },
        ValidatorInfo: {},
      },
      Modal: {},
    },
  },
};