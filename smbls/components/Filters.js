export const Filters = {
  extends: 'Flex',
  props: {
    gap: 'D1',
  },
  childExtends: 'FiltersSection',
  Env: {
    key: 'Environment',
    options: [
      'Mainnet',
      'Testnet',
    ],
    Flex: {
      childProps: {
        background: 'env .25',
      },
    },
  },
  NodeType: {
    key: 'Node Type',
    options: [
      'Validator',
      'RPC',
    ],
    Flex: {
      childProps: {
        color: 'white',
        theme: null,
        fontSize: 'Z2',
        background: 'nodeType .25',
      },
    },
  },
  Cloud: {
    key: 'Cloud Provider',
    options: [
      'GCP',
      'AWS',
    ],
    Flex: {
      childProps: {
        color: 'white',
        theme: null,
        fontSize: 'Z2',
        background: 'cloudProvider .25',
        style: {
          justifySelf: 'start',
        },
      },
      extends: [
        'Grid',
      ],
      display: 'grid',
      style: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
    },
  },
  NodeOp: {
    key: 'Node Operator',
    options: [
      'Tornike',
      'Peter',
      'Yan',
      'Patrick',
      'Prashant',
      'Ankit',
      'Raja',
      'Reza',
      'Tommy',
    ],
    Flex: {
      extends: [
        'Grid',
      ],
      childProps: {
        style: {
          justifySelf: 'start',
        },
      },
      style: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      display: 'grid',
    },
  },
  RewardClaim: {
    key: 'Reward Claim',
    options: [
      'Automatic',
      'Manual',
    ],
    Flex: {
      childProps: {
        color: 'white',
        theme: null,
        fontSize: 'Z2',
        background: 'rewardClaim .25',
      },
    },
  },
};