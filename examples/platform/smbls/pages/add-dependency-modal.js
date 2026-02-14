export const addDependencyModal = {
  extends: 'ModalWindow',
  width: '100%',
  minHeight: 'G3',
  maxWidth: 'I',
  maxHeight: '90dvh',
  onSubmit: async (e, el, s) => {
    e.preventDefault()
    if (s.disabled) {
      return
    }

    s.update({
      error: '',
      loading: true,
      disabled: true
    })

    const {
      name,
      version
    } = s

    await window
      .fetch(`https://pkg.symbo.ls/${name}@${version}`)
      .then(async res => {
        if (!res.ok) {
          s.update({
            error: await res.text(),
            disabled: false
          })
          return
        }

        const [resolvedVersion] = res.url
          .substring(`https://pkg.symbo.ls/${name}@`.length)
          .split('/')

        const value = s.version
        const obj = {
          key: name,
          value,
          resolvedVersion,
          type: s.type,
          version: s.schemaVersion
        }

        const exists = el.getDependencies(name)
        const action = exists ? 'updateItem' : 'addItem'

        try {
          await el.sdk[action]('dependencies', obj, {
            message: exists ? 'Updated dependency' : 'Added dependency'
          })

          await el.call('rerenderFileSidebarByType', 'dependencies')
          await el.call('closeModal')
        } catch (err) {
          console.error(err)
          el.call('openNotification', {
            type: 'error',
            message: err.message
          })
        } finally {
          s.update({
            loading: false,
            disabled: false
          })
        }
      })
  },
};