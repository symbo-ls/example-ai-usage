export const Row = {
  Flex: {
    Status: {
      props: (el, s) => ({
          order: '-1',
          background: el.call('getStatusColor', s.status),
          round: 'C',
          boxSize: 'Y2'
        }),
    },
    Title: {
      tag: 'strong',
      flexFlow: 'x',
      gap: 'X2',
      text: (el, s) => s.protocol,
    },
    Validator: {
      extends: 'NetworkRowLabel',
      text: 'Validator',
      props: {
        color: '#a1a1aa',
        background: '#a1a1aa20',
      },
      theme: null,
      fontSize: 'Z2',
      hide: (el, s) => !s.validator_info?.length,
    },
    Rpc: {
      extends: 'NetworkRowLabel',
      text: 'RPC',
      props: {
        color: '#a1a1aa',
        background: '#a1a1aa20',
      },
      theme: null,
      fontSize: 'Z2',
      hide: (el, s) => !s.rpc_info?.length,
    },
    Mainnet: {
      extends: 'NetworkRowLabel',
      text: 'Mainnet',
      props: {
        color: '#94a3b8',
        background: '#94a3b820',
      },
      theme: null,
      fontSize: 'Z2',
      hide: (el, s) => !el.call('filterByEnv', s.validator_info, 'Mainnet') && !el.call('filterByEnv', s.rpc_info, 'Mainnet'),
      order: 12,
    },
    Testnet: {
      extends: 'NetworkRowLabel',
      text: 'Testnet',
      props: {
        color: '#94a3b8',
        background: '#94a3b820',
      },
      theme: null,
      fontSize: 'Z2',
      hide: (el, s) => !el.call('filterByEnv', s.validator_info, 'Testnet') && !el.call('filterByEnv', s.rpc_info, 'Testnet'),
      order: 12,
    },
    gap: 'B',
    align: 'center',
    padding: 'A',
    width: '100%',
    Icon: {
      order: 13,
      icon: (el, s) => 'chevron' + (s.isActive ? 'Up' : 'Down'),
    },
    Spacer: {
      flex: 1,
      order: 10,
    },
  },
  props: {
    href: (el, s) => '/network/' + s.protocol,
    align: 'center',
    gap: 'Z2',
    childProps: {},
    padding: 'A A2',
    width: '100%',
    flexFlow: 'y',
    userSelect: 'none',
    cursor: 'pointer',
  },
};