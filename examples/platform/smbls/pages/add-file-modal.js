export const addFileModal = {
  extends: 'ModalWindow',
  onSubmit: async (ev, el, s) => {
    ev.preventDefault()
    const {
      content,
      key,
      code,
      type,
      format
    } = s

    if (!key) {
      el.call('openNotification', {
        title: 'Validation message',
        message: 'Key can not be empty',
        type: 'warning'
      })
      return
    }
    if (content?.src) {
      content.src = content.src.replace(
        'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/',
        'https://files.symbo.ls/'
      )
    }

    const obj = {
      content,
      code,
      key,
      type,
      format
    }

    const exists = el.getFiles(key)
    const path = ['files', key]

    el.sdk.updateData([
      ['update', path, obj]
    ], {
      message: exists ? `Updated ${key}` : `Created ${key}`
    })

    // TODO: use event instead of calling rerenderFileSidebarByType function
    await el.call('rerenderFileSidebarByType', 'files')
    await el.call('closeModal')
    el.getCanvasContext().files[key] = obj
  },
};