export const addSecretModal = {
  extends: 'ModalWindow',
  width: '100%',
  maxWidth: 'I3',
  maxHeight: '90dvh',
  onInit: (el, s) => {
    const name = el.call('getLastLocationPath')?.slice(1)
    const key = el.getSecrets(name)
    if (!name || !key) {
      return
    }
    s.quietUpdate({
      name,
      key
    })
  },
  onSubmit: async (e, el, s, ctx) => {
    e.preventDefault()

    const exists = el.getFunctions(s.key)
    const action = exists ? 'updateItem' : 'addItem'
    const res = await el.sdk[action](`functions`, s)

    if (res?.version) {
      await el.call('closeModal')
    } else {
      el.call('openNotification', {
        title: 'Error message',
        message: `Could not create a function ${s.key}`,
        type: 'error'
      })
    }
  },
};