export const EditFormCopy = {
  extend: 'FormModal',
  props: {
    gap: 'C',
    width: '80%',
    maxWidth: 'H3',
    onSubmit: async (ev, el, s) => {
        ev.preventDefault()

        const URL = 'https://bigbrother.symbo.ls/api/fleet'

        const formData = new FormData(el.node);
        const data = Object.fromEntries(formData)
        // output as an object

        console.log(data)
        await window.fetch(URL, {
          body: JSON.stringify(data)
        })

        // s.root.update({
        //   editMode: false
        // })
        // el.lookup('ModalFade').removeContent()
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
            text: 'Status',
          },
          Field: {
            Input: null,
            SelectField: {
              width: '100%',
              Selects: {
                name: 'status',
                value: '{{ status }}',
                children: [{
                    value: 'Onboarding',
                    text: 'Onboarding'
                  },
                  {
                    value: 'Maintenance',
                    text: 'Maintenance'
                  },
                  {
                    value: 'Off',
                    text: 'Off'
                  }
                ]
              },
            },
          },
        },
        {
          gridColumn: '1 / span 2',
          Caption: {
            text: 'Environment',
          },
          Field: {
            Input: {
              name: 'env',
              placeholder: 'mainnet',
              value: '{{ env }}'
            },
          },
        },
        {
          gridColumn: '1 / span 2',
          Caption: {
            text: 'Version',
          },
          Field: {
            Input: {
              placeholder: 'v0.1.2',
              value: '{{ version }}'
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