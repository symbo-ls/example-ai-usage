export const ConnectionNavbar = {
  align: 'center space-between',
  padding: '0',
  round: 'C1',
  gap: 'A',
  theme: 'canvas-card-glass',
  ':hover .avatar': {
    opacity: 0,
  },
  ConnectionLabel: {
    onClick: (ev, el) => {
      el.call('openInNewTab')
    },
    Circle: {
      onRender: (el, s) => {
        const handler = ({
          origin
        }) => {
          if (origin === 'auto') {
            el.setProps({
              isLoading: true
            })
            setTimeout(() => el.setProps({
              isLoading: false
            }), 1000)
          }
        }
        el.sdk.rootBus.on('checkpoint:done', handler)
      },
    },
  },
  NavbarButtonSet: {
    VersionsButton: {
      onClick: (ev, el) => {
        el.getRootState().toggle('isVersionsOpen', {
          preventUpdate: true
        })
        el.getVersionsAside()?.update()
      },
    },
    Pub: {
      onClick: async (ev, el) => {
        await el.call('openModal', '/publish')
      },
    },
    SettingsButton: {
      onClick: async (ev, el) => {
        await el.call('openModal', '/settings', {
          key: '/settings'
        })
      },
    },
  },
};