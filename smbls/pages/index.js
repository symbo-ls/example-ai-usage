import { main } from './main';
import { network } from './network';
import { node } from './node';
import { addNetwork } from './add-network';
import { addNode } from './add-node';
import { deployNode } from './deploy-node';
import { editNetwork } from './edit-network';
import { editNode } from './edit-node';
import { dashboard } from './dashboard';
import { addNetworkCopy } from './add-network-copy';
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