export const deployNode = {
  extend: 'FormModal',
  tag: 'form',
  props: {
    gap: 'C',
    width: '80%',
    maxWidth: 'I',
    onSubmit: async (ev, el, s) => {
      ev.preventDefault()
      // TODO: Implement actual deployment logic
      await el.call('add', 'node')
    },
  },
  Hgroup: {
    margin: '0',
    H: {
      tag: 'strong',
      text: 'Deploy Node',
    },
    P: {
      text: 'Deploy a new node to a cloud provider',
    },
  },
  Form: {
    columns: 'repeat(2, 1fr)',
    '@mobileM': {
      columns: 'repeat(1, 1fr)',
    },
    children: () => [
      // Cloud Provider Selection
      {
        gridColumn: '1 / span 2',
        Caption: { text: 'Cloud Provider' },
        Field: {
          Input: null,
          RadioGroup: {
            flexFlow: 'row',
            gap: 'A',
            padding: 'Z 0',
            childProps: {
              cursor: 'pointer',
              padding: 'A B',
              round: 'A',
              border: '1px solid #333',
              flexAlign: 'center',
              gap: 'Z',
              transition: 'all 0.2s ease',
              ':hover': {
                borderColor: '#555',
              },
            },
            GCP: {
              onClick: (ev, el, s) => {
                s.update({ cloud_provider: 'GCP' })
              },
              style: (el, s) => s.cloud_provider === 'GCP' ? {
                borderColor: '#4285f4',
                background: 'rgba(66, 133, 244, 0.1)',
              } : {},
              Icon: {
                name: 'cloud',
                color: '#4285f4',
              },
              Span: {
                text: 'Google Cloud (GCP)',
                fontWeight: (el, s) => s.cloud_provider === 'GCP' ? '600' : '400',
              },
              input: {
                tag: 'input',
                type: 'radio',
                name: 'cloud_provider',
                value: 'GCP',
                checked: (el, s) => s.cloud_provider === 'GCP',
                display: 'none',
              },
            },
            Latitude: {
              onClick: (ev, el, s) => {
                s.update({ cloud_provider: 'Latitude' })
              },
              style: (el, s) => s.cloud_provider === 'Latitude' ? {
                borderColor: '#10b981',
                background: 'rgba(16, 185, 129, 0.1)',
              } : {},
              Icon: {
                name: 'server',
                color: '#10b981',
              },
              Span: {
                text: 'Latitude.sh',
                fontWeight: (el, s) => s.cloud_provider === 'Latitude' ? '600' : '400',
              },
              input: {
                tag: 'input',
                type: 'radio',
                name: 'cloud_provider',
                value: 'Latitude',
                checked: (el, s) => s.cloud_provider === 'Latitude',
                display: 'none',
              },
            },
          },
        },
      },
      // Network Selection
      {
        gridColumn: '1 / span 2',
        Caption: { text: 'Network' },
        Field: {
          Input: null,
          Select: {
            padding: 'A A2',
            round: 'C1',
            theme: 'field',
            Selects: {
              name: 'protocol',
              required: true,
              children: (el, s) => {
                const networks = s.fleet?.map(n => ({ text: n.protocol, value: n.protocol })) || []
                return [
                  { text: 'Select network', value: '', disabled: 'disabled' },
                  ...networks
                ]
              },
              childProps: {
                selected: (el, s) => {
                  if (el.props.value === '') return !s.protocol
                  return s.protocol === el.props.value
                }
              }
            },
            Icon: { color: 'caption', right: 'Z' }
          },
        },
      },
      // Moniker
      {
        gridColumn: '1 / span 2',
        Caption: { text: 'Node Name (Moniker)' },
        Field: {
          Input: {
            name: 'moniker',
            placeholder: 'E.g. bcw-validator-01',
            type: 'text',
            required: true,
            value: '{{ moniker }}'
          },
        },
      },
      // Node type
      {
        Caption: { text: 'Node Type' },
        Field: {
          Input: null,
          Select: {
            padding: 'A A2',
            round: 'C1',
            theme: 'field',
            onChange: (ev, el, s) => {
              s.update({ nodeType: ev.target.value })
            },
            Selects: {
              name: 'nodeType',
              required: true,
              children: [
                { text: 'Select type', value: '', disabled: 'disabled' },
                { text: 'Validator', value: 'validator' },
                { text: 'RPC', value: 'rpc' },
                { text: 'Archival-RPC', value: 'archival-RPC' },
              ],
              childProps: {
                selected: (el, s) => {
                  if (el.props.value === '') return !s.nodeType
                  return s.nodeType === el.props.value
                }
              }
            },
            Icon: { color: 'caption', right: 'Z' }
          },
        },
      },
      // Environment
      {
        Caption: { text: 'Environment' },
        Field: {
          Input: null,
          Select: {
            padding: 'A A2',
            round: 'C1',
            theme: 'field',
            Selects: {
              name: 'env',
              required: true,
              children: [
                { text: 'Select environment', value: '', disabled: 'disabled' },
                { text: 'Production', value: 'Production' },
                { text: 'Staging', value: 'Staging' },
                { text: 'Testnet', value: 'Testnet' },
              ],
              childProps: {
                selected: (el, s) => {
                  if (el.props.value === '') return !s.env
                  return s.env === el.props.value
                }
              }
            },
            Icon: { color: 'caption', right: 'Z' }
          },
        },
      },
      // GCP-specific fields
      {
        if: (_, s) => s.cloud_provider === 'GCP',
        Caption: { text: 'GCP Region' },
        Field: {
          Input: null,
          Select: {
            padding: 'A A2',
            round: 'C1',
            theme: 'field',
            Selects: {
              name: 'region',
              children: [
                { text: 'Select region', value: '', disabled: 'disabled' },
                { text: 'us-central1 (Iowa)', value: 'us-central1' },
                { text: 'us-east1 (South Carolina)', value: 'us-east1' },
                { text: 'europe-west1 (Belgium)', value: 'europe-west1' },
                { text: 'europe-west4 (Netherlands)', value: 'europe-west4' },
                { text: 'asia-east1 (Taiwan)', value: 'asia-east1' },
              ],
              childProps: {
                selected: (el, s) => {
                  if (el.props.value === '') return !s.region
                  return s.region === el.props.value
                }
              }
            },
            Icon: { color: 'caption', right: 'Z' }
          },
        },
      },
      {
        if: (_, s) => s.cloud_provider === 'GCP',
        Caption: { text: 'Machine Type' },
        Field: {
          Input: null,
          Select: {
            padding: 'A A2',
            round: 'C1',
            theme: 'field',
            Selects: {
              name: 'machine_type',
              children: [
                { text: 'Select machine type', value: '', disabled: 'disabled' },
                { text: 'e2-standard-4 (4 vCPU, 16GB)', value: 'e2-standard-4' },
                { text: 'e2-standard-8 (8 vCPU, 32GB)', value: 'e2-standard-8' },
                { text: 'n2-standard-8 (8 vCPU, 32GB)', value: 'n2-standard-8' },
                { text: 'n2-standard-16 (16 vCPU, 64GB)', value: 'n2-standard-16' },
              ],
              childProps: {
                selected: (el, s) => {
                  if (el.props.value === '') return !s.machine_type
                  return s.machine_type === el.props.value
                }
              }
            },
            Icon: { color: 'caption', right: 'Z' }
          },
        },
      },
      // Latitude-specific fields
      {
        if: (_, s) => s.cloud_provider === 'Latitude',
        Caption: { text: 'Latitude Region' },
        Field: {
          Input: null,
          Select: {
            padding: 'A A2',
            round: 'C1',
            theme: 'field',
            Selects: {
              name: 'region',
              children: [
                { text: 'Select region', value: '', disabled: 'disabled' },
                { text: 'Dallas, TX', value: 'dallas' },
                { text: 'Chicago, IL', value: 'chicago' },
                { text: 'Miami, FL', value: 'miami' },
                { text: 'Amsterdam, NL', value: 'amsterdam' },
                { text: 'Frankfurt, DE', value: 'frankfurt' },
                { text: 'Tokyo, JP', value: 'tokyo' },
              ],
              childProps: {
                selected: (el, s) => {
                  if (el.props.value === '') return !s.region
                  return s.region === el.props.value
                }
              }
            },
            Icon: { color: 'caption', right: 'Z' }
          },
        },
      },
      {
        if: (_, s) => s.cloud_provider === 'Latitude',
        Caption: { text: 'Server Plan' },
        Field: {
          Input: null,
          Select: {
            padding: 'A A2',
            round: 'C1',
            theme: 'field',
            Selects: {
              name: 'server_plan',
              children: [
                { text: 'Select plan', value: '', disabled: 'disabled' },
                { text: 'c3.small.x86 (8 cores, 32GB)', value: 'c3.small.x86' },
                { text: 'c3.medium.x86 (16 cores, 64GB)', value: 'c3.medium.x86' },
                { text: 'c3.large.x86 (32 cores, 128GB)', value: 'c3.large.x86' },
              ],
              childProps: {
                selected: (el, s) => {
                  if (el.props.value === '') return !s.server_plan
                  return s.server_plan === el.props.value
                }
              }
            },
            Icon: { color: 'caption', right: 'Z' }
          },
        },
      },
      // Node Operator
      {
        Caption: { text: 'Node Operator' },
        Field: {
          Input: null,
          Select: {
            padding: 'A A2',
            round: 'C1',
            theme: 'field',
            Selects: {
              name: 'owner',
              children: [
                { text: 'Select operator', value: '', disabled: 'disabled' },
                { text: 'Tornike', value: 'Tornike' },
                { text: 'Peter', value: 'Peter' },
                { text: 'Yan', value: 'Yan' },
                { text: 'Patrick', value: 'Patrick' },
                { text: 'Prashant', value: 'Prashant' },
                { text: 'Ankit', value: 'Ankit' },
                { text: 'Raja', value: 'Raja' },
                { text: 'Reza', value: 'Reza' },
                { text: 'Tommy', value: 'Tommy' },
              ],
              childProps: {
                selected: (el, s) => {
                  if (el.props.value === '') return !s.owner
                  return s.owner === el.props.value
                }
              }
            },
            Icon: { color: 'caption', right: 'Z' }
          },
        },
      },
      // Priority
      {
        Caption: { text: 'Priority' },
        Field: {
          Input: null,
          Select: {
            padding: 'A A2',
            round: 'C1',
            theme: 'field',
            Selects: {
              name: 'category',
              children: [
                { text: 'Select priority', value: '', disabled: 'disabled' },
                { text: 'P1 - Critical', value: 'P1' },
                { text: 'P2 - High', value: 'P2' },
                { text: 'P3 - Normal', value: 'P3' },
              ],
              childProps: {
                selected: (el, s) => {
                  if (el.props.value === '') return !s.category
                  return s.category === el.props.value
                }
              }
            },
            Icon: { color: 'caption', right: 'Z' }
          },
        },
      },
    ],
    tag: 'div',
  },
  Button: {
    text: 'Deploy Node',
    theme: 'primary',
    type: 'submit',
    icon: 'upload',
    flow: 'row-reverse',
    gap: 'Z',
  },
};
