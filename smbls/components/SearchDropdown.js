export const SearchDropdown = {
  extend: [
    'Flex',
    'Dropdown',
  ],
  attr: {
    dropdown: true,
  },
  props: {
    flow: 'y',
    gap: 'A',
    padding: 'Z1 A',
    fontSize: 'Z2',
    theme: null,
    '@dark': {
      backdropFilter: 'blur(8px)',
      boxShadow: 'black .35, 0px, 15px, 150px, 280px',
      background: '#1D1D1D .95',
    },
    '@light': {
      background: 'gray1 .95',
      backdropFilter: 'blur(8px)',
      boxShadow: 'white .68, 0px, 15px, 150px, 280px',
    },
    onMousedown: (ev, el, s) => {
      ev.preventDefault()
    },
    onClick: (ev, el, s) => {
      ev.stopPropagation()
      el.parent.Header.Search.Input.node.focus()
    },
  },
  CaptionTitle: {
    Text: {
      text: 'Search results',
    },
  },
  Flex: {
    gap: 'Z',
    flow: 'y',
    margin: '- -Z2',
    children: (el, s) => {
      const fuse = el.props.fuse

      function searchAll(query) {
        const results = fuse.search(query);

        return results.map(r => ({
          key: r.item.key,
          title: r.item.title,
          code: r.item.code,
          type: r.item.type, // component / page / function
          score: r.score,
        }));
      }

      const result = searchAll(s.searchTerm)
      console.log(result, s.searchTerm)
      return result
    },
    childrenAs: 'state',
    childExtends: 'SearchItem',
    onInit: async (el, s) => {
      const fuse = await import('fuse.js')
      const Fuse = fuse.default

      const fuseOptions = {
        isCaseSensitive: false,
        shouldSort: true,
        findAllMatches: true,
        includeScore: true,
        threshold: 0.4, // Adjust for fuzzy matching sensitivity
        keys: [{
            name: "title",
            weight: 2
          }, // Higher weight for titles
          {
            name: "networkName",
            weight: 1.5
          },
          {
            name: "moniker",
            weight: 1.5
          },
          {
            name: "owner",
            weight: 1
          },
          {
            name: "env",
            weight: 1
          },
          {
            name: "cloudProvider",
            weight: 0.5
          },
          {
            name: "publicKey",
            weight: 0.3
          },
        ]
      }

      // Function to create searchable items from fleet data
      function flattenFleetData(fleet) {
        const searchItems = []

        fleet.forEach(network => {
          // Add network itself as searchable
          searchItems.push({
            id: network.id,
            key: `network-${network.id}`,
            title: network.protocol,
            subtitle: `${network.network_type} • ${network.network_layer}`,
            type: 'network',
            networkName: network.protocol,
            networkType: network.network_type,
            networkLayer: network.network_layer,
            participation: network.participation,
            original: network
          })

          // Add validators
          network.validators?.forEach(validator => {
            searchItems.push({
              id: validator.uid,
              key: `validator-${validator.uid}`,
              title: validator.moniker || 'Unknown',
              subtitle: `Validator • ${network.protocol} • ${validator.env}`,
              type: 'validator',
              networkName: network.protocol,
              moniker: validator.moniker,
              owner: validator.owner,
              env: validator.env,
              cloudProvider: validator.cloud_provider,
              publicKey: validator.public_key,
              clientVersion: validator.client_version,
              original: validator,
              networkId: network.id
            })
          })

          // Add RPC nodes
          network.rpc_nodes?.forEach(rpc => {
            searchItems.push({
              id: rpc.uid,
              key: `rpc-${rpc.uid}`,
              title: rpc.moniker || 'RPC Node',
              subtitle: `RPC • ${network.protocol} • ${rpc.env}`,
              type: 'rpc',
              networkName: network.protocol,
              moniker: rpc.moniker,
              env: rpc.env,
              clientVersion: rpc.client_version,
              original: rpc,
              networkId: network.id
            })
          })
        })

        return searchItems
      }

      // Get fleet data from root state
      const fleet = window.fleet || s.parent.fleet || s.root.fleet || []
      const searchItems = flattenFleetData(fleet)

      console.log('Indexed items:', searchItems.length)
      el.props.fuse = new Fuse(searchItems, fuseOptions)
    },
  },
  Filters: {
    hide: (el, s) => s.searchTerm,
  },
  Results: {
    CaptionTitle: {
      margin: '- - Z',
      Text: {
        text: (el, s) => s.searchTerm ? 'Search results' : 'Recent searches',
      },
    },
    Flex: {
      gap: 'Z',
      flow: 'y',
      margin: '- -Z2',
      fontSize: 'Z2',
      children: (el, s) => {
        if (!s.searchTerm && !s.filters?.length) {
          return s.recents
        }

        const fuse = el.props.fuse

        function searchAll(query) {
          const results = fuse.search(query);

          return results.map(r => ({
            id: r.item.id,
            title: r.item.title,
            type: r.item.type, // component / page / function
            score: r.score,
          }));
        }

        let term = s.searchTerm || ''
        if (s.filters) term = s.searchTerm + ' ' + s.filters.join(' ')

        const result = searchAll(term)
        return result
      },
      childrenAs: 'state',
      childExtends: 'SearchItem',
      onInit: async (el, s) => {
        const fuse = await import('fuse.js')
        const Fuse = fuse.default

        const fuseOptions = {
          isCaseSensitive: false,
          shouldSort: true,
          findAllMatches: true,
          includeScore: true,
          threshold: 0.4, // Adjust for fuzzy matching sensitivity
          keys: [{
              name: "title",
              weight: 2
            }, // Higher weight for titles
            {
              name: "networkName",
              weight: 1.5
            },
            {
              name: "moniker",
              weight: 1.5
            },
            {
              name: "owner",
              weight: 1
            },
            {
              name: "env",
              weight: 1
            },
            {
              name: "cloudProvider",
              weight: 0.5
            },
            {
              name: "publicKey",
              weight: 0.3
            },
          ]
        }

        // Function to create searchable items from fleet data
        function flattenFleetData(fleet) {
          const searchItems = []

          fleet.forEach(network => {
            // Add network itself as searchable
            searchItems.push({
              id: network.id,
              key: `network-${network.id}`,
              title: network.protocol,
              subtitle: `${network.network_type} • ${network.network_layer}`,
              type: 'network',
              networkName: network.protocol,
              networkType: network.network_type,
              networkLayer: network.network_layer,
              participation: network.participation,
              original: network
            })

            // Add validators
            network.validators?.forEach(validator => {
              searchItems.push({
                id: validator.uid,
                key: `validator-${validator.uid}`,
                title: validator.moniker || 'Unknown',
                subtitle: `Validator • ${network.protocol} • ${validator.env}`,
                type: 'validator',
                networkName: network.protocol,
                moniker: validator.moniker,
                owner: validator.owner,
                env: validator.env,
                cloudProvider: validator.cloud_provider,
                publicKey: validator.public_key,
                clientVersion: validator.client_version,
                original: validator,
                networkId: network.id
              })
            })

            // Add RPC nodes
            network.rpc_nodes?.forEach(rpc => {
              searchItems.push({
                id: rpc.uid,
                key: `rpc-${rpc.uid}`,
                title: rpc.moniker || 'RPC Node',
                subtitle: `RPC • ${network.protocol} • ${rpc.env}`,
                type: 'rpc',
                networkName: network.protocol,
                moniker: rpc.moniker,
                env: rpc.env,
                clientVersion: rpc.client_version,
                original: rpc,
                networkId: network.id
              })
            })
          })

          return searchItems
        }

        // Get fleet data from root state
        const fleet = window.fleet || s.parent.fleet || s.root.fleet || []
        const searchItems = flattenFleetData(fleet)

        el.props.fuse = new Fuse(searchItems, fuseOptions)
      },
    },
  },
};