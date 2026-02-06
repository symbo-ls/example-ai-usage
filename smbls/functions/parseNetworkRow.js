export const parseNetworkRow = function parseNetworkRow(data) {
    const result = {
      cloud_provider: new Set(),
      env: new Set(),
      node_types: new Set(),
      status: new Set()
    };

    // Parse validators
    if (Array.isArray(data.validators) && data.validators.length > 0) {
      result.node_types.add('Validator');
      data.validators.forEach(validator => {
        if (validator.cloud_provider) result.cloud_provider.add(validator.cloud_provider);
        if (validator.env) result.env.add(validator.env);
        if (validator.status) result.status.add(validator.status);
      });
    }

    // Parse rpc_nodes
    if (Array.isArray(data.rpc_nodes) && data.rpc_nodes.length > 0) {
      result.node_types.add('RPC');
      data.rpc_nodes.forEach(node => {
        if (node.cloud_provider) result.cloud_provider.add(node.cloud_provider);
        if (node.env) result.env.add(node.env);
        if (node.status) result.status.add(node.status);
      });
    }

    // Convert Sets to Arrays
    return {
      cloud_provider: Array.from(result.cloud_provider),
      env: Array.from(result.env),
      node_types: Array.from(result.node_types),
      status: Array.from(result.status)
    };
  }