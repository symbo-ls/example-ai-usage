export const editFileModal = {
  extends: '/add-file-modal',
  onInit: (el, s) => {
    const key = s.key || el.call('getLastLocationPath').slice(1)
    const content = el.getFiles(key)
    s.quietUpdate({
      key,
      ...content
    })
  },
};