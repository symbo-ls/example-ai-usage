export const projectAccount = {
  gap: 'B2',
  flow: 'y',
  padding: 'C1',
  width: '100%',
  maxWidth: 'J2',
  margin: '0 auto',
  onInit: (el, s) => {
    const rootState = el.getRootState()
    const state = {
      projectName: rootState.projectName,
      projectId: rootState.projectId,
      projectKey: rootState.appKey,
      tier: rootState.tier || 'none',
      isSharedLibrary: rootState.isSharedLibrary || false,
      bucket: rootState.bucket || 'none',
      designTool: rootState.designTool || 'none',
      seats: rootState.seats || 1,
      version: rootState.version || 'none',
      access: rootState.access || 'none',
      visibility: rootState.visibility || 'none',
      createdAt: rootState.createdAt || 'none',
      updatedAt: rootState.updatedAt || 'none',
      tags: rootState.tags || [],
    }
    el.call('overwrite', s, state)
  },
  onStateUpdate: (changes, el) => {
    if (changes.successMessage) {
      el.call('openNotification', {
        title: 'Success message',
        message: changes.successMessage,
        type: 'success'
      })
    }
    if (changes.errorMessage) {
      el.call('openNotification', {
        title: 'Error message',
        message: changes.errorMessage,
        type: 'error'
      })
    }
  },
};