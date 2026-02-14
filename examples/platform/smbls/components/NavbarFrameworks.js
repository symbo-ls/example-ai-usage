export const NavbarFrameworks = {
  extends: 'NavbarButtonSet',
  children: [
    {
      title: 'Symbols',
      key: 'symbols',
      icon: 'logo',
    },
    {
      title: 'DOMQL',
      key: 'domql',
      icon: 'domql',
    },
    {
      pointerEvents: 'none',
      opacity: '.25',
      title: 'React',
      key: 'react',
      icon: 'react',
    },
    {
      pointerEvents: 'none',
      opacity: '.25',
      title: 'jQuery',
      key: 'jquery',
      icon: 'jquery',
    },
  ],
  childProps: {
    isActive: el => el.getRootState('framework') === el.props.key,
    click: (ev, el) => {
      el.getRootState().update({
        framework: el.props.key
      })
      el.call('setCookie', 'framework', el.getRootState('framework'))
    },
  },
};