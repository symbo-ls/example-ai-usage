export const ActiveContentSwitcher = {
  extends: [
    'Grid',
    'Navbar',
  ],
  childExtends: {
    extend: [
      'NavbarButton',
      'NavbarTooltipParent',
    ],
    state: null,
    props: (el, s) => ({
      width: '100%',
      aspectRatio: 'unset',
      padding: 'Z -',
      ...(el.props.section === s.activeContent ? {
        '@dark': {
          color: 'gray15',
          background: 'gray3'
        },
        '@light': {
          color: 'gray15',
          background: 'gray4'
        }
      } : {
        theme: 'transparent',
        ':hover': {
          '@dark': {
            color: 'gray15',
            background: 'gray2'
          },
          '@light': {
            color: 'gray15',
            background: 'gray4'
          }
        }
      })
    }),
  },
  round: 'C1',
  fontSize: 'Z1',
  templateColumns: 'repeat(7, 1fr)',
  align: 'center center',
  children: [
    {
      icon: 'magicstar',
      title: 'AI Assistant',
      section: 'AI',
    },
    {
      icon: 'content',
      title: 'Artboards',
      section: 'ARTBOARD_TYPES',
    },
    {
      icon: 'fnOutline',
      title: 'Functions',
      section: 'FUNCTION_TYPES',
    },
    {
      icon: 'tree',
      title: 'Design System',
      section: 'DESIGN_SYSTEM_TYPES',
    },
    {
      icon: 'copywritingOutline',
      title: 'State',
      section: 'STATE_TYPES',
    },
    {
      icon: 'folderOutline',
      title: 'Assets',
      section: 'ASSETS_TYPES',
    },
    {
      icon: 'fuse',
      title: 'Integrations',
      section: 'INTEGRATIONS_TYPES',
    },
  ],
  childProps: {
    textAlign: 'center',
    onClick: (ev, el, s) => {
      const activeContent = el.props.section
      el.call('setSidebarContent', activeContent)
    },
  },
};