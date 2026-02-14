export const UsersTable = {
  onRender: async (el, s) => { 
    const projectMembers = await el.call('getProjectMembers')
    return s.set(projectMembers)
  },
  Flex_Title: {
    DocsLink: {
      onClick: async (ev, el) => {
        await el.call('openModal', '/settings', {
          key: '/invite'
        })
      },
    },
  },
  Flex_members: {
    childProps: {
      Avatar: {
        props: (el, s) => ({
          boxSize: 'B',
          key: s.name
        }),
      },
      IconButton_Remove: {
        onClick: async (ev, el, s) => {
          ev.preventDefault()
          ev.stopImmediatePropagation()
          const res = window.confirm(
            'Do you really want to remove the User from this Project?'
          )
          if (res) {
            try {
              const rs = el.getRootState()
              await el.sdk.removeMember(rs.projectId, s.id)
              el.parent.remove()
            } catch (err) {
              console.error(err)
            }
          }
        },
      },
    },
  },
};