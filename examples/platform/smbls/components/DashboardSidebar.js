export const DashboardSidebar = {
  flow: 'y',
  gap: 'C1',
  IconText: {
    order: '-1',
    fontWeight: '600',
    text: 'Getting Started',
    icon: 'arrow angle down',
    gap: 'Y1',
    align: 'start',
    hide: (el, s) => !s.hideTutorials,
    cursor: 'pointer',
    ':hover': {
      textDecoration: 'underline',
    },
    Icon: {
      order: 2,
    },
    onClick: (ev, el, s) => {
      el.call('setCookie', 'hideTutorialsDashboard', 'false', 365)
      s.toggle('hideTutorials', {
        preventUpdate: ['ChooseProject']
      })
    },
  },
  Title: null,
  Filter: {
    extends: 'Flex',
    align: 'start',
    flow: 'y',
    gap: 'A',
    position: 'sticky',
    top: 'D1',
    childExtends: {
      extend: [
        'Button',
      ],
      props: (el, s) => ({
        theme: s.projectsFilter === el.key ? 'secondary' : 'tertiary',
        padding: 'Z1 A2',
        // eslint-disable-next-line no-shadow
        onClick: async (ev, el, s) => {
          s.update({
            projectsFilter: el.key
          })
          el.call('setCookie', 'projectsFilter', el.key)
          el.sdk.rootBus.emit('projects:filter', el.key)
        }
      }),
    },
    All: {
      text: 'All',
    },
    Favorites: {
      text: 'Favorites',
    },
    Recents: {
      text: 'Recents',
    },
    New: {
      extends: [
        'Button',
      ],
      ignoreChildExtend: true,
      theme: null,
      fontWeight: '600',
      text: 'New Project',
      isActive: false,
      margin: 'C1 - -',
      background: 'title',
      color: 'title-reversed',
      ':hover': null,
      onClick: async (ev, el, s) => {
        await el.call('openModal', '/settings', {
          key: '/onboarding'
        })
      },
    },
  },
};