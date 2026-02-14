export const NavbarDesignTools = {
  extends: 'NavbarButtonSet',
  children: [
    {
      title: 'Figma preview',
      key: 'figma',
      icon: 'figma',
    },
    {
      title: 'Sketch',
      key: 'sketch',
      icon: 'sketch',
    },
    {
      title: 'Discussion',
      key: 'comments',
      icon: 'discussion',
    },
    {
      title: 'Export',
      key: 'export',
      icon: 'install',
    },
  ],
  childProps: {
    isActive: el => el.getRootState('designTool') === el.props.key,
    onClick: (ev, el) => {
      el.getRootState().update({
        pkgManager: el.props.key
      })
      el.call('setCookie', 'pkgManager', el.getRootState('pkgManager'))
    },
  },
};