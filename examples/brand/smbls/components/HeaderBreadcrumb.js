export const HeaderBreadcrumb = {
  padding: '0',
  fontSize: 'Z2',
  Button_page: {
    Dropdown: {
      ListInDropdown: {
        children: el => [{
          if: (el, s) => el.isAuthorised(),
          text: 'Dashboard',
          href: '/dashboard'
        }, {
          if: (el, s) => el.isAuthorised(),
          text: 'Canvas',
          href: el.getCanvasPathnameAnyway()
        }, {
          hide: el => !el.getRootState('email').endsWith('@symbols.app'),
          text: 'Governance',
          href: '/governance'
        }, {
          text: 'Documentation',
          href: '/developers'
        }, {
          hide: true,
          text: 'Tutorials',
          href: '/tutorials'
        }, {
          text: 'Examples',
          href: '/docs/examples'
        }, {
          text: 'Resources',
          href: '/docs/resources'
        }],
      },
    },
  },
};