export const EditForm = {
  extend: 'FormModal',
  props: {
    gap: 'C',
    width: '80%',
    maxWidth: 'H3',
    onSubmit: async (ev, el, s) => {
      ev.preventDefault()

      await el.call('addNew')
    },
  },
  Hgroup: {
    margin: '0',
    H: {
      tag: 'strong',
      text: 'Update Network',
    },
    P: {
      text: 'Edit properties for existing Network',
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
            placeholder: 'E.g. Polygon',
            type: 'text',
            value: '{{ protocol }}'
          },
        },
      },
      {
        gridColumn: '1 / span 2',
        Caption: {
          text: 'Network Layer',
        },
        Field: {
          Input: {
            placeholder: 'v0.1.2',
            value: '{{ network_layer }}'
          },
        },
      },
      {
        gridColumn: '1 / span 2',
        Caption: {
          text: 'Network Type',
        },
        Field: {
          Input: {
            placeholder: 'v0.1.2',
            value: '{{ network_type }}'
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
  tag: 'form',
};