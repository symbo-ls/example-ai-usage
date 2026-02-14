export const editComponentModal = {
  extends: '/add-component-modal',
  onInit: (el, s) => {
    const componentKey = s.key || el.call('getLastLocationPath').slice(1)
    const item = el.getItem(componentKey)
    return item && s.quietReplace(item)
  },
  onSubmit: async (e, el, s, ctx) => {
    e.preventDefault()

    const obj = s.parse()
    const {
      type,
      key
    } = obj
    delete obj.advanced

    if (!key) {
      el.call('openNotification', {
        title: 'Validation message',
        message: 'Key is required',
        type: 'warning'
      })
      return
    }

    const res = el.call('updateItem', type, key, obj, {
      forceChosenUpdate: true
    })

    if (res?.success) {
      el.call('closeModal')
    } else {
      el.call('openNotification', {
        title: 'Error message',
        message: `Could not create ${s.type} ${s.title}`,
        type: 'error'
      })
    }
  },
  ModalHeader: {
    title: 'Edit {{ key }} component',
    p: 'Edit a platform schema for component',
  },
  Flex: {
    'Flex.info': {
      'InputField.key': {
        pointerEvents: 'none',
        Input: {
          opacity: '.65',
          disabled: 'disabled',
        },
      },
    },
    'Button.showAdvanced': {},
    'Flex.advanced': {
      'GroupField.value': null,
    },
  },
  ModalFooter: {
    CheckButton: {
      type: 'submit',
      icon: 'checkmark',
      text: 'Save',
    },
    IconButton: {
      icon: 'trash outline',
      onClick: async (ev, el, s, ctx) => {
        if (s.key && window.confirm(`Do you want to remove the ${s.type}?`)) {
          el.sdk.deleteItem(`${s.type}s`, s.key)
          await el.call('closeModal')
        }
      },
    },
  },
};