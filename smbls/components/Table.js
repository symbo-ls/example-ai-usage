export const filterFleet = (fleet, filter) => {
  if (!filter || !fleet || !Object.keys(filter).length) return fleet

  return fleet.filter(network => {
    // Get all nodes for checking
    const allNodes = [
      ...(network.validators || []).map(v => ({ ...v, nodeType: 'validator' })),
      ...(network.rpc_nodes || []).map(r => ({ ...r, nodeType: 'rpc' }))
    ]

    // Check if any node matches ALL filter conditions
    const hasMatchingNode = allNodes.some(node => {
      let matches = true

      // Check type filter
      if (filter.type) {
        matches = matches && node.nodeType === filter.type
      }

      // Check env filter
      if (filter.env) {
        matches = matches && node.env === filter.env
      }

      // Check cloud filter
      if (filter.cloud) {
        matches = matches && node.cloud_provider === filter.cloud
      }

      // Check reward claim filter
      if (filter.rewardClaim) {
        matches = matches && node.reward_claim === filter.rewardClaim
      }

      return matches
    })

    return hasMatchingNode
  })
}

// Check if network has at least one active node
export const hasActiveNode = (network) => {
  const allNodes = [
    ...(network.validators || []),
    ...(network.rpc_nodes || [])
  ]
  return allNodes.some(node => node.status !== 'Off')
}

// Check if network has at least one Off node
export const hasOffNode = (network) => {
  const allNodes = [
    ...(network.validators || []),
    ...(network.rpc_nodes || [])
  ]
  return allNodes.some(node => node.status === 'Off')
}

// Get networks with at least 1 active node
export const getActiveNetworks = (fleet, filter) => {
  const filtered = filterFleet(fleet, filter)
  return filtered?.filter(network => hasActiveNode(network)) || []
}

// Get networks with at least 1 Off node (can overlap with active)
export const getInactiveNetworks = (fleet, filter) => {
  const filtered = filterFleet(fleet, filter)
  return filtered?.filter(network => hasOffNode(network)) || []
}

export const Table = {
  props: {
    extends: 'Flex',
    childExtends: [
      'NetworkRow',
      'Link',
    ],
    childProps: {
      statusFilter: 'active',
    },
    width: '100%',
    children: (el, s) => getActiveNetworks(s.fleet, s.filter),
    childrenAs: 'state',
    flow: 'y',
    position: 'relative',
    zIndex: 2,
    text: null,
  },
};

export const InactiveTable = {
  props: {
    extends: 'Flex',
    childExtends: [
      'NetworkRow',
      'Link',
    ],
    childProps: {
      statusFilter: 'inactive',
    },
    width: '100%',
    children: (el, s) => getInactiveNetworks(s.fleet, s.filter),
    childrenAs: 'state',
    flow: 'y',
    position: 'relative',
    zIndex: 2,
    text: null,
  },
};
