export const Role = {
  extends: 'SelectField',
  padding: '0',
  round: 'C1',
  Select: {
    onChange: async (ev, el, s) => {
      ev.preventDefault()
      ev.stopImmediatePropagation()
      const res = window.confirm(
        'Do you really want to change the User Role for this Project?'
      )
      if (res) {
        try {
          const rs = el.getRootState()
          await el.sdk.updateMemberRole(rs.projectId, s.id, ev.target.value)
        } catch (err) {
          console.error(err)
        }
      } else {
        ev.target.value = s.role
      }
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
    childProps: {
      attr: {
        selected: (el, s) => {
          const userRole = s.role || -1
          const optionValue = el.props.value
          return userRole === optionValue
        },
      },
    },
  },
};