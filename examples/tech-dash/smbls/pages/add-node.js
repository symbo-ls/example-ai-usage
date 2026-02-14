export const addNode = {
  extend: 'FormModal',
  tag: 'form',
  props: {
    gap: 'C',
    width: '80%',
    maxWidth: 'I',
    onSubmit: async (ev, el, s) => {
      ev.preventDefault()
      await el.call('add', 'node')
    },
    Hgroup: {
      margin: '0',
      H: {
        tag: 'strong',
        text: 'Add node',
      },
      P: {
        text: 'Add node in {{ protocol }} network',
      },
    },
    Form: {
      columns: 'repeat(2, 1fr)',
      '@mobileM': {
        columns: 'repeat(1, 1fr)',
      },
      children: () => [{
          gridColumn: '1 / span 2',
          Caption: {
            text: 'Moniker',
          },
          Field: {
            Input: {
              name: 'moniker',
              value: '{{ moniker }}',
              placeholder: 'E.g. Bcw-Technologies',
              type: 'text',
              required: true,
              value: '{{ moniker }}'
            },
          },
        },
        {
          Caption: {
            text: 'Node type',
          },
          Field: {
            Input: null,
            Select: {
              padding: 'A A2',
              round: 'C1',
              theme: 'field',
              Selects: {
                value: '{{ nodeType }}',
                name: 'nodeType',
                required: true,
                children: [{
                    text: 'Please select',
                    selected: true,
                    disabled: 'disabled'
                  }, {
                    text: 'Validator',
                    value: 'validator',
                  },
                  {
                    text: 'RPC',
                    value: 'rpc',
                  },
                  {
                    text: 'Archival-RPC',
                    value: 'archival-RPC',
                  },
                ],
                childProps: {
                  selected: (el, s) => {
                    return s.nodeType === el.props.value
                  }
                }
              },
              Icon: {
                color: 'caption',
                right: 'Z'
              }
            },
          },
        },
        {
          Caption: {
            text: 'Cloud Provider',
          },
          Field: {
            Input: null,
            Select: {
              padding: 'A A2',
              round: 'C1',
              theme: 'field',
              Selects: {
                value: '{{ cloud_provider }}',
                name: 'cloud_provider',
                required: true,
                children: [{
                    text: 'Please select',
                    selected: true,
                    disabled: 'disabled'
                  }, {
                    text: 'AWS',
                    value: 'AWS',
                  },
                  {
                    text: 'GCP',
                    value: 'GCP',
                  },
                  {
                    text: 'Latitude',
                    value: 'Latitude',
                  },
                  {
                    text: 'OVH',
                    value: 'OVH',
                  },
                  {
                    text: 'Nirvana',
                    value: 'Nirvana',
                  },
                ],
                childProps: {
                  selected: (el, s) => {
                    return s.cloud_provider === el.props.value
                  }
                }
              },
              Icon: {
                color: 'caption',
                right: 'Z'
              }
            },
          },
        },
        {
          Caption: {
            text: 'Priority',
          },
          Field: {
            Input: null,
            Select: {
              padding: 'A A2',
              round: 'C1',
              theme: 'field',
              Selects: {
                name: 'category',
                value: '{{ category }}',
                required: true,
                children: [{
                    text: 'Please select',
                    selected: true,
                    disabled: 'disabled'
                  }, {
                    text: 'P1',
                    value: 'P1',
                  },
                  {
                    text: 'P2',
                    value: 'P2',
                  },
                  {
                    text: 'P3',
                    value: 'P3',
                  },
                ],
                childProps: {
                  selected: (el, s) => {
                    return s.category === el.props.value
                  }
                }
              },
              Icon: {
                color: 'caption',
                right: 'Z'
              }
            },
          },
        },
        {
          Caption: {
            text: 'Do we manage proposals?',
          },
          Field: {
            Input: null,
            Select: {
              padding: 'A A2',
              round: 'C1',
              theme: 'field',
              Selects: {
                name: 'do_we_manage_proposals',
                value: '{{ do_we_manage_proposals }}',
                children: [{
                    text: 'Please select',
                    selected: true,
                    disabled: 'disabled'
                  }, {
                    text: 'Yes',
                    value: 'Yes',
                  },
                  {
                    text: 'No',
                    value: 'No',
                  },
                ],
                childProps: {
                  selected: (el, s) => {
                    return s.do_we_manage_proposals === el.props.value
                  }
                }
              },
              Icon: {
                color: 'caption',
                right: 'Z'
              }
            },
          },
        },
        {
          Caption: {
            text: 'SLA',
          },
          Field: {
            Input: {
              name: 'sla',
              value: '{{ sla }}',
              placeholder: '99.99%',
              value: '{{ sla }}'
            },
          },
        },
        {
          Caption: {
            text: 'Projected Cost',
          },
          Field: {
            Input: {
              name: 'projected_cost',
              value: '{{ projected_cost }}',
              placeholder: '$2,911.00',
              value: '{{ projected_cost }}'
            },
          },
        },
      ],
      tag: 'div',
    },
    Button: {
      text: 'Save',
      theme: 'primary',
      type: 'submit',
    },
  },
};