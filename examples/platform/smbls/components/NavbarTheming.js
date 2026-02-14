export const NavbarTheming = {
  extends: 'NavbarButtonSet',
  childProps: {
    theme: 'sepia',
    background: 'transparent 0',
    isActive: el => el.getRootState('globalTheme') === el.props.key,
    '!isActive': {
      opacity: '0.65',
    },
    '.isActive': {
      opacity: '1',
    },
    onClick: (ev, el) => {
      const key = el.props.key
      el.getRootState().update({
        globalTheme: key,
        sceneTheme: key
      })
      el.call('setCookie', 'sceneTheme', key)
      el.call('setCookie', 'globalTheme', key)
    },
  },
  children: [
    {
      key: 'light',
      icon: el =>
        el.getRootState('sceneTheme') === el.key.toLowerCase() ?
        'sun' : 'sun outline',
    },
    {
      key: 'dark',
      icon: el =>
        el.getRootState('sceneTheme') === el.key.toLowerCase() ?
        'moon' : 'moon outline',
    },
  ],
};