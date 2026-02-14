export const publishModal = {
  extends: 'ModalWindow',
  maxWidth: '65vw',
  width: '100%',
  maxHeight: '65vh',
  height: '100%',
  onRender: async (el, s) => {
    await el.sdk.checkpoint()
    const {
      projectId,
      branch
    } = el.getRootState()
    const changes = await el.sdk.getBranchChanges(projectId, branch)
    const reducedChanges = changes.reduce(
      (acc, v) => {
        const isSchema = v[1][0] === 'schema'
        const key = isSchema ? v[1][1] : v[1][0]
        const subKey = isSchema ? v[1][2] : v[1][1]
        if (acc[key]) {
          if (!subKey) {
            acc[key].push(...Object.keys(v[2]))
          } else if (!acc[key].includes(subKey)) {
            acc[key].push(subKey)
          }
        } else {
          acc.other.push(key)
        }
        return acc
      }, {
        components: [],
        pages: [],
        functions: [],
        designSystem: [],
        other: []
      }
    )
    s.replace({
      changes: reducedChanges
    })
  },
  onSubmit: async (e, el, s) => {
    e.preventDefault()
    if (s.isLoading) {
      return
    }

    // First click shows confirmation state
    if (!s.isConfirming) {
      s.update({
        isConfirming: true
      })
      return
    }

    s.update({
      isLoading: true,
      isConfirming: false
    })
    const rootState = el.getRootState()
    const {
      projectId,
      branch,
      version
    } = rootState
    const result = await el.sdk.publishVersion(projectId, {
      version,
      branch
    })

    rootState.replace({
      version: result.value
    }, {
      preventUpdate: true
    })

    // Notify other UI parts
    el.sdk.rootBus.emit('version:published', {
      projectId,
      version: result.value
    })

    s.update({
      isLoading: false
    })

    await el.call('closeModal')
    el.call('setCookie', `${el.getAppKey()}_projectWasPublished`, true)
  },
};