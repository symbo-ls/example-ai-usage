export const ValidatorInfo = {
  extend: 'Flex',
  props: (el, s) => ({
    flexFlow: 'y',
    gap: 'C1',
    padding: 'A A2',
    round: 'A2 A2 B+X B+X',
    transition: 'B1 defaultBezier opacity',
  }),
  Header: {
    extends: 'Flex',
    align: 'center',
    gap: 'Z',
    Avatar: {
      src: '{{ protocol }}.png',
      boxSize: 'B1',
    },
    H5: {
      lineHeight: 1,
      text: '{{ protocol }}',
    },
  },
  Flex: {
    if: () => false,
    Add: {
      extends: 'Button',
      theme: 'transparent',
      padding: 'Z A',
      ':hover': {
        theme: 'dialog',
      },
      icon: 'plus',
      text: 'Add Node',
      gap: 'Y1',
      onClick: (ev, el, s) => {
        ev.stopPropagation()
        s.root.update({
          editMode: true
        })
      },
    },
    align: 'center space-between',
    gap: 'B2',
    Repo: {
      extends: [
        'IconText',
        'Link',
      ],
      fontWeight: '300',
      order: 10,
      icon: (el, s) => s.repo_url?.includes('gitlab') ? 'gitlab' : 'github',
      gap: 'X2',
      href: '{{repo_url}}',
      text: (el, s) => s.repo_url?.split('.com/')[1] || '...',
      ':hover': {
        textDecoration: 'underline',
      },
      margin: '- - - auto',
      target: '_blank',
    },
    padding: '- A - -',
  },
  Grid: {
    childExtends: 'Hgroup',
    templateColumns: 'repeat(4, 1fr)',
    gap: 'C',
    childProps: {
      H: {
        tag: 'h6',
        order: 2,
      },
      P: {
        color: 'caption',
        fontSize: 'Z1',
      },
    },
    children: [
      {
        H: {
          text: '{{ network_type }}',
        },
        P: {
          text: 'Network Type',
        },
      },
      {
        H: {
          text: '{{ network_layer }}',
        },
        P: {
          text: 'Network Layer',
        },
      },
      {
        H: {
          text: '{{ participation }}',
        },
        P: {
          text: 'Network access',
        },
      },
      {
        gridColumn: 'span 3',
        H: {
          text: null,
          Link: {
            href: '{{repo_url}}',
            text: (el, s) => s.repo_url?.split('.com/')[1] || '...',
            target: '_blank',
            ':hover': {
              textDecoration: 'underline',
            },
          },
        },
        P: {
          text: 'Repo URL',
        },
      },
    ],
  },
  NoContent: {
    show: (el, s) => !s.validators?.length && !s.rpc_nodes?.length,
    padding: 'A A2',
    textAlign: 'center',
    text: 'Network is offline',
  },
  Both: {
    margin: 'B -Z2 A',
    flexFlow: 'y',
    gap: 'Z',
    Title: {
      fontSize: 'Z2',
      margin: '- - - Z2',
      text: 'Nodes ',
      Span: {
        fontWeight: '100',
        text: (el, s) => `(${(s.validators?.length + s.rpc_nodes?.length) || 0})`,
      },
    },
    Validators: {
      show: (el, s) => s.validators?.length,
      children: (el, s) => s.validators,
      extends: 'ValidatorsList',
    },
    RPC: {
      show: (el, s) => s.rpc_nodes?.length,
      children: (el, s) => s.rpc_nodes,
      extends: 'ValidatorsList',
    },
  },
  Communication: {
    flexFlow: 'y',
    gap: 'Z',
    Title: {
      fontSize: 'Z2',
      text: 'Communication Channels',
    },
    Grid: {
      margin: 'A - - -',
      hide: (el, s) => !s.communication_channels,
      templateColumns: 'repeat(4, 1fr)',
      childProps: {
        Link: {
          href: '{{ value }}',
          text: '{{ key }}',
          target: '_blank',
          ':hover': {
            textDecoration: 'underline',
          },
        },
      },
      childrenAs: 'state',
      children: (el, s) => {
        if (s.communication_channels) {
          const channels = JSON.parse(s.communication_channels)[0]
          const keyVal = Object.entries(channels).filter(v => v[1])
          return keyVal.map(v => ({
            key: v[0],
            value: v[1]
          }))
        }
      },
    },
    NoContent: {
      hide: (el, s) => s.communication_channels,
      text: 'n/a',
      tag: 'h6',
      margin: '0',
      fontWeight: '300',
      color: 'caption',
    },
  },
};