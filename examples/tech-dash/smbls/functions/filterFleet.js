export const filterFleet = function filterFleet() {
  // Search filter
  if (root.search) {
    fleet = fleet.filter(item =>
      item.protocol.toLowerCase().includes(root.search.toLowerCase()) ||
      item.repo_url.includes(root.search)
    )
  }

  // Validators filter
  if (root.validators) {
    if (root.validators === 'Mainnet') {
      fleet = fleet.filter(item =>
        item.validator_info?.some(validator => validator.env === 'Mainnet')
      )
    } else if (root.validators === 'Testnet') {
      fleet = fleet.filter(item =>
        item.validator_info?.some(validator => validator.env === 'Testnet')
      )
    } else if (root.validators === 'None') {
      fleet = fleet.filter(item =>
        !item.validator_info?.length
      )
    }
    // 'All' option doesn't need additional filtering
  }

  // RPC filter
  if (root.rpc) {
    if (root.rpc === 'Mainnet') {
      fleet = fleet.filter(item =>
        item.rpc_info?.some(rpc => rpc.env === 'Mainnet')
      )
    } else if (root.rpc === 'Testnet') {
      fleet = fleet.filter(item =>
        item.rpc_info?.some(rpc => rpc.env === 'Testnet')
      )
    } else if (root.rpc === 'None') {
      fleet = fleet.filter(item =>
        !item.rpc_info?.length
      )
    }
    // 'All' option doesn't need additional filtering
  }

  // Status filter
  if (root.status) {
    fleet = fleet.filter(item => item.status === root.status)
  }

  // Last Updated filter
  if (root.lastUpdate && root.lastUpdate !== 'All Time') {
    const now = new Date()
    let targetDate = new Date()

    if (root.lastUpdate === 'Today') {
      targetDate.setHours(0, 0, 0, 0) // Start of today
    } else if (root.lastUpdate === 'Last 2 Days') {
      targetDate.setDate(now.getDate() - 2)
      targetDate.setHours(0, 0, 0, 0)
    } else if (root.lastUpdate === 'Last 3 Days') {
      targetDate.setDate(now.getDate() - 3)
      targetDate.setHours(0, 0, 0, 0)
    } else if (root.lastUpdate === 'Last Week') {
      targetDate.setDate(now.getDate() - 7)
      targetDate.setHours(0, 0, 0, 0)
    } else if (root.lastUpdate === 'Last Month') {
      targetDate.setMonth(now.getMonth() - 1)
      targetDate.setHours(0, 0, 0, 0)
    }

    fleet = fleet.filter(item => {
      // Check logs in validator_info
      const validatorLogs = item.validator_info?.flatMap(validator =>
        validator.logs?.map(log => new Date(log.created_at)) || []
      ) || []

      // Check logs in rpc_info
      const rpcLogs = item.rpc_info?.flatMap(rpc =>
        rpc.logs?.map(log => new Date(log.created_at)) || []
      ) || []

      // Combine all logs
      const allLogs = [...validatorLogs, ...rpcLogs]

      // Check if any log is newer than the target date
      return allLogs.some(logDate => logDate >= targetDate)
    })
  }
}