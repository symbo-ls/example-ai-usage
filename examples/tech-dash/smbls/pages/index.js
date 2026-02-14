import { network } from './network';
import { node } from './node';
import { editNetwork } from './edit-network';
import { addNetwork } from './add-network';
import { editNode } from './edit-node';
import { dashboard } from './dashboard';
import { main } from './main';
import { addNode } from './add-node';
import { addNetworkCopy } from './add-network-copy';
export default {
      '/network': network,
'/node': node,
'/edit-network': editNetwork,
'/add-network': addNetwork,
'/edit-node': editNode,
'/dashboard': dashboard,
'/': main,
'/add-node': addNode,
'/add-network-copy': addNetworkCopy,

    }