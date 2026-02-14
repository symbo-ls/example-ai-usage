export const addCnameModal = {
  extends: [
    'ModalWindow',
    'Form',
  ],
  width: '100%',
  maxWidth: 'I',
  onSubmit: async (e, el, st, ctx) => {
    e.preventDefault()
    if (!st.cname) {
      return
    }

    const urlParams = new URLSearchParams(ctx.window.location.search)
    const type = urlParams.get('type')
    const domainName = urlParams.get('domainName')

    if (!type || !domainName) {
      return
    }

    const {
      root
    } = st
    if (root && root.domains && root.domains[type]) {
      if (root.domains[type].cname === st.cname) {
        st.replace({
          validationMessage: `CNAME with this name is already added for '${type}' environment`
        })
        return
      }
    }

    const domains = {}
    domains[type] = {
      domain: domainName,
      cname: st.cname
    }

    const response = await el.sdk.setProjectDomains(
      st.root.projectId,
      domains
    )

    if (response && response.success === true) {
      el.call('closeModal', el, st, ctx)
      st.root.update({
        domains
      })
    } else {
      el.call('openNotification', {
        title: 'Error message',
        message: `Could not create custom domain ${domainName}`,
        type: 'error'
      })
    }
  },
  tag: 'form',
  state: {
    cname: '',
    validationMessage: '',
  },
  ModalHeader: {
    title: 'Go to your DNS manager',
  },
  Flex: {
    InputField: {
      Input: {
        value: '{{ cname }}',
        required: true,
        placeholder: 'eg. test.com or www.test.com or sub.test.com',
        onInput: (ev, el, st) => {
          const {
            node
          } = el
          const {
            value
          } = node

          const regex =
            /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/gu

          if (!regex.test(value)) {
            st.replace({
              cname: null,
              validationMessage: 'Invalid cname'
            })

            return
          }

          st.update({
            validationMessage: '',
            cname: value
          })
        },
      },
      Title: {
        text: 'CNAME',
      },
      Label: {
        show: (ev, st) => st.validationMessage,
        color: 'red',
        text: (ev, st) => st.validationMessage,
      },
    },
    overflow: 'auto',
    padding: 'A',
    minWidth: '100%',
    flow: 'column',
    flexAlign: 'flex-start space-between',
    gap: 'B3',
    childProps: {
      width: '50%',
    },
  },
  ModalFooter: {
    CheckButton: {
      type: 'submit',
      reverse: true,
      text: 'Save',
      ':hover': {
        cursor: 'pointer',
      },
    },
  },
};