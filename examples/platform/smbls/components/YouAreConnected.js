export const YouAreConnected = {
  width: '100%',
  if: (el) => el.getRootState().package > 0,
  attr: {
    id: 'connect',
  },
  SectionTitle: {
    text: 'Connection',
  },
  Grid: {
    ServerPreview_test: {
      Flex: {
        ConnectionLabel_dev: {
          SquareButton_force: {
            show: (el, s) => s.active,
            icon: 'reload outline',
            background: 'transparent',
            theme: 'common-card-outline-interactive',
            isActive: false,
            fontSize: 'Z',
            '--spacing-ratio': 1.2,
            borderWidth: '1px',
            borderStyle: 'solid',
            onClick: async (event, el) => {
              el.setProps({
                Icon: {
                  name: 'checkmark outline'
                }
              })
              const t = setTimeout(() => {
                el.setProps({
                  Icon: {
                    name: 'reload outline'
                  }
                })
                clearTimeout(t)
              }, 1000)

              await el.call('addSmblsSubdomains', el.getAppKey())
            },
          },
          isActive: (el) => el.getAppKey(),
          Circle: {},
          Link: {
            target: '_blank',
            fontWeight: '400',
            href: (el) => `https://${el.getAppKey()}/`,
            ':hover': {
              textDecoration: 'underline',
            },
            '@dark': {
              color: 'white',
            },
            '@light': {
              color: 'black',
            },
            text: (el) => el.getAppKey(),
          },
          text: null,
        },
        gap: 'A',
        flow: 'y',
        ConnectionLabel_local: {
          isActive: (el, s) => el.getRootState('clients').localhost,
          Circle: {},
          text: 'localhost',
        },
      },
      gap: 'C1',
      SectionHeader: {
        title: 'Development',
      },
    },
    ServerPreview_prod: {
      ConnectionLabel_published: {
        isActive: (el) => el.getRootState('createdAt'),
        Circle: {},
        text: (el, s) => (s.isActive ? 'Published' : 'Not published'),
        Link: {
          color: 'highlight',
          target: '_blank',
          fontWeight: '400',
          hide: (el) => !el.getRootState('domain'),
          href: (el) => el.getRootState('domain'),
          text: (el) =>
            el.getRootState('domain') &&
            new URL(el.getRootState('domain')).host,
          ':hover': {
            textDecoration: 'underline',
          },
        },
      },
      SectionHeader_last_connected: {
        Article: {
          P: {
            order: '-1',
            text: 'Last publish',
          },
          Title: {
            color: 'title',
            text: (el) =>
              el.getRootState('updatedAt') &&
              new Date(el.getRootState('updatedAt')).toLocaleString(),
          },
        },
        margin: '0',
        heading: null,
      },
      flex: 1,
      state: 'RELEASE',
      SectionHeader: {
        title: 'Production',
      },
    },
    width: '100%',
    flex: 1,
    templateColumns: 'repeat(4, 1fr)',
    position: 'relative',
    transition: 'C defaultBezier max-height',
    gap: 'A',
    ServerPreview_cli: {
      SectionHeader: {
        title: 'CLI',
      },
      ConnectionLabel: {
        isActive: (el, s) => el.getRootState('clients').cli,
      },
    },
    ServerPreview_ci: {
      SectionHeader: {
        title: 'CI',
      },
      ConnectionLabel: {},
    },
  },
  Flex: {
    staging: {
      publish: {
        Button_reset: {
          onClick: async (ev, el) => {
            ev.preventDefault()
            await el.call('openModal', '/reset')
          },
          margin: '- - - B1',
          fontWeight: '400',
          scrollToTop: false,
          background: 'transparent',
          theme: 'common-card-outline-interactive',
          text: 'Reset',
        },
        if: () => true,
        ContinueButton_publish: {
          scrollToTop: false,
          href: (el) => el.getCanvasPathname() + '/publish',
          margin: '0',
          color: 'white',
          text: 'Publish',
        },
      },
      noChanges: {
        if: () => false,
        text: 'You have no staged changes',
      },
    },
    props: {
      minWidth: '100%',
      align: 'center space-between',
      gridColumnStart: 'span 3',
      color: 'title',
      padding: 'B1 X - -',
    },
    version: {
      text: (el) => `Version 1.${el.getRootState().version}`,
    },
  },
};