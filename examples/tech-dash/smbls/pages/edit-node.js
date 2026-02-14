export const editNode = {
  extend: '/add-node',
  props: {
    onSubmit: async (ev, el, s) => {
      ev.preventDefault()
      console.log(s)
      await el.call('edit', 'node', s.protocol)
    },
    Hgroup: {
      margin: '0',
      H: {
        tag: 'strong',
        text: 'Edit Node',
      },
      P: {
        text: 'Edit properties for existing node',
      },
    },
    Form: {},
    Hr: {
      margin: '-A1 0 X',
      opacity: '0.05',
    },
    Form_2: {
      extends: 'ModalForm',
      columns: 'repeat(2, 1fr)',
      '@mobileM': {
        columns: 'repeat(1, 1fr)',
      },
      children: () => [{
          Caption: {
            text: 'Status',
          },
          Field: {
            Input: null,
            Select: {
              padding: 'A A2',
              round: 'C1',
              theme: 'field',
              required: true,
              Selects: {
                name: 'status',
                children: [{
                    text: 'Please select',
                    selected: true,
                    disabled: 'disabled'
                  }, {
                    text: 'Off',
                    value: 'Off',
                  }, {
                    text: 'Onboarding',
                    value: 'Onboarding',
                  },
                  {
                    text: 'Stable/Mainterance',
                    value: 'Stable/Mainterance',
                  },
                  {
                    text: 'Live',
                    value: 'Live',
                  },
                ],
                childProps: {
                  selected: (el, s) => {
                    return s.status === el.props.value
                  }
                }
              },
              Icon: {
                color: 'caption',
                right: 'Z'
              }
            },
          },
        }, {
          Caption: {
            text: 'Client version',
          },
          Field: {
            Input: {
              name: 'client_version',
              placeholder: '1.2.3...',
              required: true,
              type: 'text',
              value: '{{ client_version }}'
            },
          },
        }, {
          Caption: {
            text: 'Reward claim',
          },
          Field: {
            Input: null,
            Select: {
              padding: 'A A2',
              round: 'C1',
              theme: 'field',
              Selects: {
                name: 'reward_claim',
                required: true,
                children: [{
                    text: 'Please select',
                    selected: true,
                    disabled: 'disabled'
                  }, {
                    text: 'Automatic',
                    value: 'Automatic',
                  },
                  {
                    text: 'Manual',
                    value: 'Manual',
                  },
                ],
                childProps: {
                  selected: (el, s) => {
                    return s.reward_claim === el.props.value
                  }
                }
              },
              Icon: {
                color: 'caption',
                right: 'Z'
              }
            },
          },
        }, {
          Caption: {
            text: 'Node Operator',
          },
          Field: {
            Input: null,
            Select: {
              padding: 'A A2',
              round: 'C1',
              theme: 'field',
              Selects: {
                name: 'owner',
                required: true,
                children: [{
                  text: 'Please select',
                  selected: true,
                  disabled: 'disabled'
                }, {
                  text: 'Tornike',
                  value: 'Tornike',
                }, {
                  text: 'Peter',
                  value: 'Peter',
                }, {
                  text: 'Yan',
                  value: 'Yan',
                }, {
                  text: 'Patrick',
                  value: 'Patrick',
                }, {
                  text: 'Prashant',
                  value: 'Prashant',
                }, {
                  text: 'Ankit',
                  value: 'Ankit',
                }, {
                  text: 'Raja',
                  value: 'Raja',
                }, {
                  text: 'Reza',
                  value: 'Reza',
                }, {
                  text: 'Tommy',
                  value: 'Tommy',
                }, ],
                childProps: {
                  selected: (el, s) => {
                    return s.node_operator === el.props.value
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
          gridColumn: '1 / span 2',
          Caption: {
            text: 'Public key',
          },
          Field: {
            Input: {
              name: 'public_key',
              placeholder: 'Public key',
              value: '{{ public_key }}'
            },
          },
        }, {
          gridColumn: '1 / span 2',
          Caption: {
            text: 'Reward address',
          },
          Field: {
            Input: {
              name: 'reward_address',
              placeholder: 'Reward address',
              value: '{{ reward_address }}'
            },
          },
        }, {
          gridColumn: '1 / span 2',
          Caption: {
            text: 'Explorer Link',
          },
          Field: {
            Input: {
              name: 'explorer_link',
              placeholder: 'Explorer link',
              value: '{{ explorer_link }}'
            },
          },
        },
      ],
      tag: 'div',
    },
  },
};