export const ValidatorRow = {
  extends: 'Link',
  props: {
    flexFlow: 'x',
    gap: 'A2',
    padding: 'A1 B',
    flexAlign: 'center start',
    cursor: 'pointer',
    background: 'deepFir',
    href: (el, s) => '/node/' + s.parent.protocol + '/' + (el.__ref.path.includes('RPC') ? 'rpc' : 'validator') + '/{{ uid }}',
    ':hover': {
      background: 'deepFir 1 +5',
    },
    transition: 'B defaultBezier background',
    round: 'C1',
  },
  Status: {
    props: (el, s) => ({
        order: '-1',
        background: el.call('getStatusColor', s.status),
        round: 'C',
        boxSize: 'Y2'
      }),
  },
  Strong: {
    text: '{{moniker}}',
  },
  Version: {
    text: '({{ client_version }})',
    color: 'white',
    fontSize: 'Z2',
    fontWeight: '200',
  },
  PublicKey: {
    extends: 'Flex',
    flexAlign: 'center start',
    hide: (el, s) => !s.public_key,
    Text: {
      text: '{{public_key}}',
      overflow: 'hidden',
      maxWidth: '95%',
      textOverflow: 'ellipsis',
    },
    CopyButton: {
      value: (el, s) => s.public_key,
    },
  },
  Env: {
    extends: 'NetworkRowLabel',
    fontWeight: '500',
    fontSize: 'Z2',
    text: (el, s) => s.env,
    props: (el, s) => {
      const color = el.call('getEnvColor', s.env)
      return {
        color: color,
        background: color + '20',
      }
    },
  },
};