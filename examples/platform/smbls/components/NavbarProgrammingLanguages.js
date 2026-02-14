export const NavbarProgrammingLanguages = {
  extends: 'NavbarButtonSet',
  children: [
    {
      title: 'JavaScript',
      key: 'js',
      icon: 'js',
    },
    {
      title: 'TypeScript',
      key: 'ts',
      icon: 'ts',
    },
    {
      title: 'HTML',
      key: 'html',
      icon: 'html',
    },
  ],
  childProps: {
    isActive: el => el.getRootState('language') === el.props.key,
    onClick: (ev, el) => {
      el.getRootState().update({
        language: el.props.key
      })
      el.call('setCookie', 'language', el.getRootState('language'))
    },
  },
};