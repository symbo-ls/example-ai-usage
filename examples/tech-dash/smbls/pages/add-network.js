export const addNetwork = {
  extend: 'FormModal',
  props: {
    extends: 'FormModal',
    tag: 'form',
    gap: 'C',
    width: '80%',
    maxWidth: 'I',
    onSubmit: async (ev, el, s) => {
      ev.preventDefault()
      await el.call('add', 'network')
    },
    Hgroup: {
      margin: '0',
      H: {
        tag: 'strong',
        text: 'Add Network',
      },
      P: {
        text: 'Add new network',
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
            text: 'Protocol',
          },
          Field: {
            Input: {
              name: 'protocol',
              required: true,
              placeholder: 'E.g. Polygon',
              type: 'text',
              value: '{{ protocol }}'
            },
          },
        },
        {
          Caption: {
            text: 'Network Layer',
          },
          Field: {
            Input: null,
            Select: {
              padding: 'A A2',
              round: 'C1',
              theme: 'field',
              Selects: {
                name: 'network_layer',
                value: '{{ network_layer }}',
                required: true,
                children: [{
                    text: 'Please select',
                    selected: true,
                    disabled: 'disabled'
                  }, {
                    text: 'L1',
                    value: 'L1',
                  },
                  {
                    text: 'L2',
                    value: 'L2',
                  },
                  {
                    text: 'L3',
                    value: 'L3',
                  },
                ],
                childProps: {
                  selected: (el, s) => {
                    return s.network_layer === el.props.value
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
            text: 'Network type',
          },
          Field: {
            Input: {
              name: 'network_type',
              placeholder: 'E.g. Costmos SDK',
              required: true,
              type: 'text',
              value: '{{ network_type }}'
            },
          },
        },
        {
          gridColumn: '1 / span 2',
          Caption: {
            text: 'Network access',
          },
          Field: {
            Input: null,
            Select: {
              padding: 'A A2',
              round: 'C1',
              theme: 'field',
              Selects: {
                name: 'participation',
                value: '{{ participation }}',
                required: true,
                children: [{
                    text: 'Please select',
                    selected: true,
                    disabled: 'disabled'
                  }, {
                    text: 'Permissioned',
                    value: 'Permissioned',
                  },
                  {
                    text: 'Semi-permissioned',
                    value: 'Semi-permissioned'
                  },
                  {
                    text: 'Permissionless',
                    value: 'Permissionless',
                  },
                ],
                childProps: {
                  selected: (el, s) => {
                    return s.participation === el.props.value
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
            text: 'Repository',
          },
          Field: {
            Input: {
              name: 'repo_url',
              placeholder: 'https://github.com',
              type: 'url',
              value: '{{ repo_url }}'
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