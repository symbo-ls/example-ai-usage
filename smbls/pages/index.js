import { main } from './main.js';
import { network } from './network.js';
import { node } from './node.js';
import { addNetwork } from './add-network.js';
import { addNode } from './add-node.js';
import { deployNode } from './deploy-node.js';
import { editNetwork } from './edit-network.js';
import { editNode } from './edit-node.js';
import { dashboard } from './dashboard.js';
import { addNetworkCopy } from './add-network-copy.js';
export default {
      '/': main,
'/network': network,
'/node': node,
'/add-network': addNetwork,
'/add-node': addNode,
'/deploy-node': deployNode,
'/edit-network': editNetwork,
'/edit-node': editNode,
'/dashboard': dashboard,
'/add-network-copy': addNetworkCopy,

    }