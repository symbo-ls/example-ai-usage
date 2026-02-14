export const NetworkRow = {
  extend: 'Grid',
  props: {
    templateColumns: '3fr 3fr 3fr 2fr 2fr',
    gap: 'Z2',
    href: (el, s) => '/network/' + s.protocol,
    align: 'center',
    padding: 'A1 A2',
    width: '100%',
    poisition: 'relative',
    childProps: {
      gap: 'Z2',
      flexAlign: 'center',
    },
    borderWidth: '0 0 1px 0',
    borderStyle: 'solid',
    borderColor: '--theme-document-dark-background',
    userSelect: 'none',
    cursor: 'pointer',
    transition: 'background, defaultBezier, A',
    ':hover': {
      background: 'deepFir',
    },
    ':active': {
      background: 'deepFir 1 +5',
    },
  },
  Name: {
    Avatar: {
      src: '{{ protocol }}.png',
      boxSize: 'B1',
    },
    Title: {
      tag: 'strong',
      flexFlow: 'x',
      gap: 'X2',
      text: (el, s) => s.protocol,
    },
  },
  Env: {
    childExtends: 'NetworkRowLabel',
    childProps: {
      background: 'env .25',
    },
    children: (el, s) => s.parsed?.env,
  },
  NodeTypes: {
    childExtends: 'NetworkRowLabel',
    childProps: {
      color: 'white',
      theme: null,
      fontSize: 'Z2',
      background: 'nodeType .25',
    },
    children: (el, s) => s.parsed?.node_types,
  },
  CloudProvider: {
    childExtends: 'NetworkRowLabel',
    childProps: {
      color: 'white',
      theme: null,
      fontSize: 'Z2',
      background: 'cloudProvider .25',
    },
    children: (el, s) => s.parsed?.cloud_provider,
  },
  Status: {
    childExtends: 'NetworkRowLabel',
    childProps: {
      color: 'white',
      theme: null,
      fontSize: 'Z2',
      background: 'SLA .25',
    },
    children: (el, s) => s.parsed?.status,
  },
  on: {
    init: (el, s) => {
      const parsed = el.call('parseNetworkRow', s)
      s.parsed = parsed
    },
  },
};