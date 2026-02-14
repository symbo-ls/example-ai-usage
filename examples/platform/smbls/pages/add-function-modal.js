export const addFunctionModal = {
  extends: 'ModalWindow',
  width: '100%',
  maxWidth: 'I3',
  maxHeight: '90dvh',
  onSubmit: async (e, el, s, ctx) => {
    e.preventDefault()

    const exists = el.getFunctions(s.key)

    if (s.value) {
      try {
        const res = exists ?
          await el.call('updateItem', s.type, s.key, s) :
          await el.call('createItem', s.type, s.key)

        if (res?.success) {
          await el.call('closeModal')
        } else {
          el.call('openNotification', {
            title: 'Error message',
            message: `Could not create function ${s.key}`,
            type: 'error'
          })
        }
      } catch (err) {
        console.log(`in addFunctionModal catch`, err.message)
        el.call('openNotification', {
          title: 'Error message',
          message: err.message,
          type: 'error'
        })
      }
    } else {
      el.call('openNotification', {
        title: 'Error message',
        message: 'There might be an error with the function code. Please check the code and try again.',
        type: 'error'
      })
    }
  },
};