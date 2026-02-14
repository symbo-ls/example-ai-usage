export const DangerZoneSection = {
  width: '100%',
  maxWidth: 'I2',
  gap: 'B1',
  align: 'flex-start',
  position: 'relative',
  flow: 'y',
  margin: 'C1 0',
  CardContent: {
    ContinueButton: {
      onClick: async (ev, el, st) => {
        // Double confirmation is not recommended because it can be frustrating for users.
        if (
          !window.confirm(
            `Are you sure you want to delete this project? This action cannot be undone.`
          )
        ) {
          return
        }

        if (
          !window.confirm(
            `Please confirm once more that you want to permanently delete "${st.projectName}".`
          )
        ) {
          return
        }

        const {
          projectId
        } = st

        try {
          await el.sdk.removeProject(projectId) // removeProject does not return anything
          el.call('openNotification', {
            title: 'Success message',
            message: 'The project has been successfully removed.',
            type: 'success'
          })
          setTimeout(() => {
            window.location.href = '/dashboard'
            el.router('/dashboard', el.getRoot())
          }, 1000)
        } catch (error) {
          el.call('openNotification', {
            title: 'Error message',
            message: `Error: ${error.message || 'Failed to delete project.'}`,
            type: 'error'
          })
        }
      },
    },
  },
};