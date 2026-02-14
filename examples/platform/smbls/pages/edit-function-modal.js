export const editFunctionModal = {
  extends: '/add-function-modal',
  onInit: (el, s) => {
    const key = s.key || el.call('getLastLocationPath').slice(1)
    const item = el.getItem(key, s.type)
    return item && s.quietReplace(item)
  },
  onSubmit: async (e, el, s) => {
    e.preventDefault()
    el.call('updateItem', s.type, s.key, s)
    await el.call('closeModal')
  },
};