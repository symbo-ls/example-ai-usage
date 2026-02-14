export const MembersTable = {
  flow: 'y',
  width: '100%',
  margin: 'B1 0',
  overflow: 'hidden',
  onRender: async (el, s) => {
    const result = await el.sdk.getProjectMembers(el.getRootState('projectId'))
    s.update({
      projectMembers: result.map((r) => ({
        ...r,
        id: r.id,
        email: r.user.email,
        name: r.user.name || r.user.email,
        role: r.role
      })) || []
    })
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
  TableBody: {
    childProps: {
      RoleCell: {
        RoleSelectField: {
          Select: {
            onChange: (ev, el, s) => {
              ev.preventDefault()
              ev.stopImmediatePropagation()
              s.parent.update({
                toUpdate: {
                  id: s.id,
                  newRole: ev.target.value
                }
              })
            },
            children: () => [{
                value: 'owner',
                text: 'Owner'
              },
              {
                value: 'admin',
                text: 'Admin'
              },
              {
                value: 'editor',
                text: 'Editor'
              },
              {
                value: 'guest',
                text: 'Guest'
              }
            ],
          },
        },
      },
      ActionsCell: {
        EditButton: {
          onClick: (ev, el, s) => {
            s.parent.update({
              memberRoleBeingEdited: s.id,
              toUpdate: null
            })
          },
        },
        ConfirmUpdateRoleButton: {
          onClick: async (ev, el, s) => {
            ev.preventDefault()
            ev.stopImmediatePropagation()
            if (!s.parent.toUpdate) {
              return
            }
            try {
              const {
                id: memberId,
                newRole
              } = s.parent.toUpdate

              if (newRole) {
                // Call API to update member role
                await el.sdk.updateMemberRole(
                  s.root.projectId,
                  memberId,
                  newRole
                )

                s.parent.update({
                  memberRoleBeingEdited: null,
                  toUpdate: null,
                  successMessage: 'Member role updated successfully!'
                })

                // Refresh the table after a short delay
                setTimeout(async () => {
                  const result = await el.sdk.getProjectMembers(
                    s.root.projectId
                  )
                  s.parent.replace({
                    projectMembers: result.map((r) => ({
                      ...r,
                      id: r.user.id,
                      email: r.user.email,
                      name: r.user.name || r.user.email,
                      role: r.role
                    })) || []
                  })
                }, 500)
              }
            } catch (error) {
              s.parent.update({
                errorMessage: `Error: ${
                  error.message || 'Failed to update member role'
                }`,
                memberRoleBeingEdited: null,
                toUpdate: null
              })
            }
          },
        },
        CrossmarkButton: {
          onClick: (ev, el, s) => {
            s.parent.update({
              memberRoleBeingEdited: null,
              toUpdate: null
            })
          },
        },
        TrashButton: {
          show: (el, s) =>
            s.role !== 'owner' && ['owner', 'admin'].includes(s.root.projectRole),
          onClick: async (ev, el, s) => {
            const memberId = s.id
            ev.preventDefault()
            ev.stopImmediatePropagation()

            const memberName = s.name

            const res = window.confirm(
              `Do you really want to remove ${memberName} from this project?`
            )

            if (res) {
              try {
                await el.sdk.removeMember(
                  el.getRootState('projectId'),
                  memberId
                )
                s.parent.update({
                  successMessage: `${memberName} has been removed from the project.`
                })
              } catch (err) {
                s.parent.update({
                  errorMessage: `Error: ${
                    err.message || 'Failed to remove member'
                  }`
                })
              }
            }
          },
        },
      },
    },
    children: ({
      state
    }) => state.projectMembers,
  },
};