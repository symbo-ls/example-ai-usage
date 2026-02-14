export const getCostsPerProtocol = function getCostsPerProtocol(data) {
    return data.map(item => {
      let currentCost = 0;
      let projectedCost = 0;

      const allValidators = item.validator_info || [];
      const allRpcs = item.rpc_info || [];

      allValidators.forEach(val => {
        if (typeof val.current_spend === 'number') {
          currentCost += val.current_spend;
        }
        if (typeof val.projected_cost === 'number') {
          projectedCost += val.projected_cost;
        }
      });

      allRpcs.forEach(rpc => {
        if (typeof rpc.current_spend === 'number') {
          currentCost += rpc.current_spend;
        }
        if (typeof rpc.projected_cost === 'number') {
          projectedCost += rpc.projected_cost;
        }
      });

      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });

      return {
        protocol: item.protocol,
        validatorCount: allValidators.length,
        rpcCount: allRpcs.length,
        currentCost: formatter.format(currentCost),
        projectedCost: formatter.format(projectedCost)
      };
    });
  }