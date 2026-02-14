export const SettingsTabs = {
  extends: 'TabsLinkSwitcher',
  children: (el) => [
    el.isAdmin() && {
      href: '/project-account',
      text: el.getRootState('projectName')
    },
    el.isOwner() && {
      href: '/pricing',
      text: 'Billing'
    },
    el.isEditMode() && {
      href: '/project-data',
      text: 'Data'
    },
    {
      href: '/install',
      text: 'Install'
    },
    el.isEditMode() && {
      href: '/project-versions',
      text: 'Versions'
    },
    el.isAdmin() && {
      href: '/connect',
      text: 'Connect'
    },
    el.isAdmin() && {
      href: '/shared-libs',
      text: 'Shared Libraries'
    },
    {
      href: '/settings',
      text: 'Settings'
    }
  ].filter(v => v),
  childrenAs: 'props',
  childProps: {
    isActive: (el, s) => s.key === el.props.href,
    borderStyle: 'solid',
    fontWeight: '400',
    padding: 'Z B1',
    '!isActive': {
      fontWeight: '400',
    },
    onClick: (ev, el, s) => {
      // el.call(
      //   'openModal',
      //   '/settings',
      //   {
      //     key: el.props.href
      //   },
      //   { forced: true }
      // )
      s.update({
        key: el.props.href
      })
    },
  },
};