export const ProjectSection = {
  extends: 'Grid',
  childExtends: 'ProjectInfo',
  props: (el) => ({
    templateColumns: el.getRootState().package > 1 ? '5fr 2fr' : '1fr',
    gap: 'A',
    align: 'stretch flex-start'
  }),
  Stats: {
    ItemPreview: {
      gap: 'B',
      align: 'flex-start space-between',
      Strong: {
        margin: 'W - -',
        text: '{{ title }}',
      },
      Grid: {
        templateColumns: '2fr 1fr 1fr 1fr',
        width: '100%',
        childExtends: {
          extend: 'Hgroup',
          props: {
            margin: '0',
          },
          H: {
            tag: 'strong',
            text: '{{ title }}',
          },
          P: {
            text: '{{ p }}',
          },
        },
        children: (el) => [{
            title: el.getRootState().package > 1 ? 'Premium' : 'Starter',
            p: 'Package'
          },
          {
            title: `1.${el.getRootState().version}`,
            p: 'Version'
          },
          {
            title: el.getRootState().versionscount,
            p: 'Publishes'
          },
          {
            title: el.call('formatDate', el.getRootState().createdAt),
            p: 'User since'
          }
        ],
        childrenAs: 'state',
      },
    },
    Title: {
      text: 'Company',
    },
  },
  Team: {
    ItemPreview: {
      AvatarBundle: {
        extend: 'AvatarBundle',
        props: (el, s) => {
          const projectUsers = el.getRootProjectsUsers()
          const options = el.call('isArray', projectUsers) ?
            projectUsers.filter((v) => (v.role || 0) > -1) :
            projectUsers

          return {
            fontSize: 'Y2',
            options: options
              ?.filter((v) => !v.email?.endsWith('@symbo'))
              .map((v) => ({
                key: v.name,
                title: v.name
              })),
            childProps: {
              ':not(:last-child)': {
                margin: '0 -Z 0 0'
              }
            }
          }
        },
      },
      SectionHeader_last_connected: {
        props: (el) => {
          const projectUsers = el.getRootProjectsUsers()
          const usersCount = projectUsers?.filter(
            (v) => (v.role || 0) > -1
          ).length
          const left = 5 - usersCount < 0 ? 0 : usersCount
          return {
            margin: '0',
            title: `${usersCount} members`,
            p: `You can invite ${left} more users`
          }
        },
      },
    },
    Title: {
      text: 'Team',
    },
  },
};