export const calculateCosts = function calculateCosts(data) {
    let totalCurrentCost = 0;
    let totalProjectedCost = 0;

    data.forEach(item => {
      const allValidators = item.validator_info || [];
      const allRpcs = item.rpc_info || [];

      allValidators.forEach(val => {
        if (typeof val.current_spend === 'number') {
          totalCurrentCost += val.current_spend;
        }
        if (typeof val.projected_cost === 'number') {
          totalProjectedCost += val.projected_cost;
        }
      });

      allRpcs.forEach(rpc => {
        if (typeof rpc.current_spend === 'number') {
          totalCurrentCost += rpc.current_spend;
        }
        if (typeof rpc.projected_cost === 'number') {
          totalProjectedCost += rpc.projected_cost;
        }
      });
    });

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });

    return {
      totalCurrentCost: formatter.format(totalCurrentCost),
      totalProjectedCost: formatter.format(totalProjectedCost)
    };
  }