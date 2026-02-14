export const NavbarPackageManagers = {
  extends: 'NavbarButtonSet',
  children: [
    {
      title: 'NPM',
      key: 'npm',
      icon: 'npm',
    },
    {
      title: 'Yarn',
      key: 'yarn',
      icon: 'yarn',
    },
    {
      title: 'PNPM',
      key: 'pnpm',
      icon: 'pnpm',
    },
    {
      pointerEvents: 'none',
      opacity: '.25',
      title: 'CDN',
      key: 'cdn',
      icon: 'cdn',
    },
  ],
  childProps: {
    isActive: el => el.getRootState('pkgManager') === el.props.key,
    onClick: (ev, el) => {
      el.getRootState().update({
        pkgManager: el.props.key
      })
      el.call('setCookie', 'pkgManager', el.getRootState('pkgManager'))
    },
  },
};