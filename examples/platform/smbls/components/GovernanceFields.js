export const GovernanceFields = {
  if: (el) => el.getRootState('email').endsWith('@symbols.app'),
  margin: '- B2 - auto',
  flow: 'x',
  gap: 'C',
  childExtends: [
    'IconText',
    'DropdownParentFocus',
  ],
  childProps: {
    gap: 'Y',
    Icon: {
      color: 'placeholder',
    },
  },
  Env: {
    Dropdown: {
      ListInDropdown: {
        children: () => [{
            href: `https://dev.symbols.app${window.location.pathname}`,
            target: '_blank',
            text: 'Development'
          },
          {
            href: `https://staging.symbols.app${window.location.pathname}`,
            target: '_blank',
            text: 'Staging'
          },
          {
            href: `https://symbols.app${window.location.pathname}`,
            target: '_blank',
            text: 'Production'
          }
        ],
      },
    },
  },
  PlatformVersion: {
    onRender: async el => {
      el.setProps({
        text: `v${await el.getPlatformVersion()}`
      })
    },
    Dropdown: {
      ListInDropdown: {
        children: () => [{
            href: (el) =>
              'https://github.com/symbo-ls/platform/commits/' +
              `v${el.getPlatformVersion()}`,
            target: '_blank',
            text: 'Commit'
          },
          {
            href: (el) =>
              ({
                production: `https://github.com/symbo-ls/platform/actions?query=branch%3Av${el.getPlatformVersion()}+event%3Aworkflow_dispatch`,
                staging: `https://github.com/symbo-ls/platform/actions?query=branch%3Av${el.getPlatformVersion()}+event%3Arelease`,
                development: `https://github.com/symbo-ls/platform/actions`
              })[el.getRootState('env')],
            target: '_blank',
            text: 'Github workflow'
          },
          {
            href: (el) =>
              'https://github.com/symbo-ls/platform/tree/refs/tags/' +
              `v${el.getPlatformVersion()}`,
            target: '_blank',
            text: 'Code'
          },
          {
            target: '_blank',
            text: 'Release notes',
            href: (el) =>
              'https://github.com/symbo-ls/platform/releases' +
              `?after=v${el.getPlatformVersion()}`
          }
        ],
      },
    },
  },
};