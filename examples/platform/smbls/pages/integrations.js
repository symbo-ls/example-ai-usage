export const integrations = {
  extends: [
    'Page',
  ],
  flow: 'y',
  gap: 'D1',
  Packages: {
    flexFlow: 'y',
    gap: 'C1',
    SectionTitle: {
      flexAlign: 'center space-between',
      text: 'Dependencies',
      Link: {
        extends: [
          'Link',
          'IconButton',
        ],
        icon: 'question mark fill',
        href: '/docs/dependencies',
      },
    },
    Grid: {
      show: (el, s) => Object.keys(s.parse()).length,
      gap: 'B1 C3',
      templateColumns: 'repeat(4, 1fr)',
      childExtends: {
        extend: [
          'Flex',
          'Link',
        ],
        props: (el, s) => ({
          isError: el.getPackages(el.props.Title.text) === 'error',
          ".isError": {
            color: 'red'
          },
          fontWeight: '400',
          align: 'center start',
          Icon: {
            name: 'npm'
          },
          Icon_error: {
            name: 'exclMark'
          }
        }),
        LoadingGif: {
          show: (el, s) => el.getPackages(el.parent.props.Title.text) === 'loading',
          inCenter: false,
          width: 'A',
          transform: 'scale(1.98)',
        },
        Icon: {
          show: (el, s) => el.getPackages(el.parent.props.Title.text) !== 'error' && el.getPackages(el.parent.props.Title.text) !== 'loading',
        },
        Icon_error: {
          show: (el, s) => el.getPackages(el.parent.props.Title.text) === 'error',
        },
        Title: {
          margin: '- A - Z',
        },
        Version: {
          opacity: 0.65,
        },
      },
      childrenAs: 'props',
      children: (el, s) => {
        const deps = el.getDependencies()
        const pkgs = el.getPackages()
        return Object.keys(deps).map((v) => ({
          href: window.location.pathname + '/edit-dependency/' + v.replaceAll('/', '..'),
          Title: {
            text: v
          },
          Version: {
            text: deps[v] + ' ' + pkgs[v] !== s[v] && pkgs[v] !== 'loading' && pkgs[v] !== 'error' ? `(${pkgs[v]})` : ''
          }
        }))
      },
    },
    SectionAddButton: {
      ignoreChildExtend: true,
      scrollToTop: false,
      href: () => window.location.pathname + '/add-dependency',
    },
    Line: {
      margin: 'D1 - 0',
    },
  },
  DesignTools: {
    show: (el) => el.getRootState().userId === 'usb148d6dd' || el.getRootState().userId === 'usce70482d',
    SectionTitle: {
      text: 'Design Tools',
    },
    state: '~/INTEGRATIONS',
    Grid: {
      gap: 'B1 C3',
      templateColumns: 'repeat(4, 1fr)',
      margin: '- - C1',
      children: [
        {
          extend: 'InputField',
          Title: {
            text: 'Figma file URL:',
          },
          Input: {
            type: 'url',
            width: '100%',
            placeholder: 'https://figma.com/...',
            value: (el, s) => s.figma?.url,
            required: true,
            onChange: (ev, el, s) => {
              const value = ev.target.value
              const figmaUrlRegex = /https:\/\/([\w.-]+\.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/
              if (figmaUrlRegex.test(value)) {
                s.rootUpdate({
                  INTEGRATIONS: {
                    figma: {
                      url: value
                    }
                  }
                })
              }
            },
          },
        },
        {
          extend: 'InputField',
          Title: {
            text: 'Sketch file URL:',
          },
          Input: {
            type: 'url',
            width: '100%',
            placeholder: 'https://sketch.com/...',
            value: (el, s) => s.sketch?.url,
            required: true,
            change: (ev, el, s) => {
              const value = ev.target.value
              const sketchUrlRegex = /https:\/\/([\w.-]+\.)?sketch.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/
              if (sketchUrlRegex.test(value)) {
                el.getRootState().update({
                  INTEGRATIONS: {
                    sketch: {
                      url: value
                    }
                  }
                })
              }
            },
          },
        },
      ],
    },
    Line: {
      margin: 'D1 - 0',
    },
  },
  Secrets: {
    SectionTitle: {
      flexAlign: 'center space-between',
      text: 'Secrets',
      Link: {
        extends: [
          'Link',
          'IconButton',
        ],
        icon: 'question mark fill',
        href: '/docs/secrets',
      },
    },
    Grid: {
      if: (el, s) => Object.keys(el.getSecrets()).length,
      gap: 'B1 C3',
      templateColumns: 'repeat(8, 1fr)',
      margin: '- - C1',
      childExtends: [
        'Flex',
        'Link',
      ],
      childrenAs: 'props',
      childProps: {
        fontWeight: '400',
        align: 'center start',
      },
      children: (el) => Object.keys(el.getSecrets()).map((v) => ({
        href: window.location.pathname + '/edit-secret/' + v,
        Title: {
          text: v
        }
      })),
    },
    SectionAddButton: {
      props: () => ({
        order: 3,
        ignoreChildExtend: true,
        scrollToTop: false,
        href: window.location.pathname + '/add-secret'
      }),
    },
    Line: {
      margin: 'D1 - 0',
    },
  },
  Analytics: {
    SectionTitle: {
      text: 'Analytics',
    },
    state: '~/INTEGRATIONS/analytics',
    P: {
      text: 'No analytics integration at this moment (TBA)',
    },
    Line: {
      margin: 'D1 - 0',
    },
  },
  Plugins: {
    SectionTitle: {
      text: 'Plugins',
    },
    state: '~/PLUGINS',
    P: {
      text: 'No plugins at this moment (TBA)',
    },
  },
};