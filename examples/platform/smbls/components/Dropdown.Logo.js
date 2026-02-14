const Dropdownlogo = {
  flow: 'y',
  gap: 'A',
  padding: 'Z1 A',
  CaptionTitle: {
    Text: {
      text: 'Active Project',
    },
    if: el => el.isCanvas(),
  },
  Flex: {
    if: el => el.isCanvas(),
    gap: 'Z',
    Avatar: {
      props: el => ({
        avatarType: 'initials',
        boxSize: 'B+X1',
        src: el.call('getProjectIcon') || `https://avatars.symbo.ls/${el.props.avatarType || 'initials'}/svg?seed=${
        el.props.key || el.key || 'no-avatar'
      }`,
        round: 'Z'
      }),
    },
    Hgroup: {
      flexFlow: 'y',
      margin: '- Z - -',
      gap: 'W',
      H: {
        color: 'title',
        tag: 'span',
        overflow: 'hidden',
        whiteSpace: 'wrap',
        textOverflow: 'anywhere',
        text: el => el.getRootState('projectName'),
      },
      P: {
        margin: '0',
        fontWeight: '400',
        color: 'paragraph',
        overflow: 'hidden',
        overflowWrap: 'anywhere',
        whiteSpace: 'wrap',
        textOverflow: 'anywhere',
        lineBreak: 'anywhere',
        text: el => `${el.getRootState('workingProjectOwner')}/${el.getRootState('workingProjectKey')}`,
      },
    },
    Upgrade: {
      if: (el) => el.isAuthorised() && el.getRootState('tier') === 'starter',
      extends: 'Link',
      color: 'blue',
      text: 'Free plan',
      margin: '- - - auto',
      alignSelf: 'start',
      whiteSpace: 'nowrap',
      fontSize: 'Z2',
      lineHeight: 1,
      ':hover': {
        textDecoration: 'underline',
      },
      onClick: (f, el, st) => {
        el.call('openModal', '/settings', {
          key: '/pricing'
        })
      },
    },
  },
  ProjectNav: {
    if: el => !el.isDashboard(),
    CaptionTitle: {
      margin: 'Z - X',
      Text: {
        text: 'Project',
      },
    },
    ListInDropdown: {
      margin: '- -Z2',
      gap: '0',
      childProps: {
        padding: 'Z+V1 Z2',
        fontSize: 'A',
        round: 'Z',
        fontWeight: '400',
        color: 'title',
        Text: null,
        Icon: {
          color: 'currentColor',
          opacity: '1',
          margin: '- Y1 - -',
          fontWeight: '100',
        },
        ':hover': {
          style: {
            svg: {
              opacity: 1,
            },
          },
        },
      },
      childrenAs: 'props',
      children: [
        {
          Icon: {
            name: 'upgrade',
          },
          text: 'Upgrade to team',
          Sup: {
            color: 'disabled',
            margin: '-Z - - X2',
            fontSize: 'Y',
            text: '(soon)',
          },
        },
        {
          Icon: {
            name: 'billing',
          },
          text: 'Billing',
        },
        {
          Icon: {
            name: 'sf settings fill',
          },
          text: 'Project Settings',
        },
      ],
    },
  },
  DashboardNav: {
    CaptionTitle: {
      margin: 'X -',
      Text: {
        text: 'Dashboard',
      },
    },
    ListInDropdown: {
      margin: '- -Z2',
      gap: '0',
      childProps: {
        padding: 'Z+V1 Z2',
        fontSize: 'A',
        round: 'Z',
        fontWeight: '400',
        color: 'title',
        Text: null,
        Icon: {
          color: 'currentColor',
          opacity: '1',
          margin: '- Y1 - -',
          fontWeight: '100',
        },
        ':hover': {
          style: {
            svg: {
              opacity: 1,
            },
          },
        },
      },
      childrenAs: 'props',
      children: el => [{
        Icon: {
          name: 'plus oval'
        },
        text: 'New project',
        onClick: async (ev, el) => {
          await el.call('openModal', '/settings', {
            key: '/onboarding'
          })
        },
      }, {
        Icon: {
          name: 'arrows diagonal'
        },
        extends: ['Link', 'Button'],
        text: 'Switch project',
        href: '/dashboard',
      }, {
        Icon: {
          name: 'back'
        },
        extends: ['Link', 'Button'],
        text: 'Back to dashboard',
        href: '/dashboard',
      }],
    },
  },
  UserNav: {
    CaptionTitle: {
      margin: 'Z - X',
      Text: {
        text: 'User',
      },
    },
    ListInDropdown: {
      margin: '- -Z2',
      gap: '0',
      childProps: {
        padding: 'Z+V1 Z2',
        fontSize: 'A',
        round: 'Z',
        fontWeight: '400',
        color: 'title',
        Text: null,
        Icon: {
          color: 'currentColor',
          opacity: '1',
          margin: '- Y1 - -',
          fontWeight: '100',
        },
        ':hover': {
          style: {
            svg: {
              opacity: 1,
            },
          },
        },
      },
      childrenAs: 'props',
      children: [
        {
          Icon: {
            name: null,
          },
          text: 'Profile',
          onClick: async (ev, el) => {
            await el.call('openModal', '/settings', {
              key: '/personal-account'
            })
          },
        },
        {
          extends: [
            'Link',
            'Button',
          ],
          Icon: {
            name: null,
          },
          text: 'Logout',
          href: '/logout',
        },
      ],
    },
  },
  GeneralNav: {
    CaptionTitle: {
      margin: 'Z - -',
      Text: {
        text: 'General',
      },
    },
    ListInDropdown: {
      margin: '- -Z2',
      gap: '0',
      childProps: {
        padding: 'Z+V1 Z2',
        fontSize: 'A',
        round: 'Z',
        fontWeight: '400',
        color: 'title',
        Text: null,
        Icon: {
          color: 'currentColor',
          opacity: '1',
          margin: '- Y1 - -',
          fontWeight: '100',
        },
        ':hover': {
          style: {
            svg: {
              opacity: 1,
            },
          },
        },
      },
      childrenAs: 'props',
      children: el => [{
        extends: 'DocsLink',
        href: '/developers',
        text: 'Whats New?',
        ':hover': {
          textDecoration: 'none'
        },
        Icon: {
          name: 'news'
        },
      }, {
        extends: 'DocsLink',
        href: '/developers',
        text: 'About Symbols',
        ':hover': {
          textDecoration: 'none'
        },
        Icon: {
          name: 'sf info'
        },
      }, {
        extends: 'DocsLink',
        href: '/docs/resources',
        text: 'Support',
        ':hover': {
          textDecoration: 'none'
        },
        Icon: {
          name: 'support'
        },
      }],
    },
  },
};

export { Dropdownlogo as 'Dropdown.Logo' }