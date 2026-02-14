export const SelectRoleField = {
  extends: 'SelectField',
  Select: {
    children: () => [{
        value: 'guest',
        text: 'Guest'
      },
      {
        value: 'editor',
        text: 'Editor'
      },
      {
        value: 'admin',
        text: 'Admin'
      },
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