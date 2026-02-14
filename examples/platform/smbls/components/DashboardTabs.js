export const DashboardTabs = {
  extends: 'Grid',
  templateColumns: '3fr 7fr',
  gap: 'A',
  color: 'white',
  align: 'space-between',
  round: 'A',
  minHeight: 'G1',
  '@screenM': {
    templateColumns: '2.7fr 7fr',
  },
  '@screenS': {
    templateColumns: '1fr',
  },
  Info: {
    flex: 1,
    flow: 'column',
    align: 'flex-start space-between',
    padding: '0',
    gap: 'E',
    '@screenS': {
      flow: 'row',
      padding: '- - Y -',
    },
    Hgroup: {
      width: '100%',
      padding: 'Z X2',
      H: {
        tag: 'h4',
        lineHeight: 1.2,
        margin: '0 0 X',
        fontWeight: '700',
        text: 'Dashboard',
      },
      P: {
        maxWidth: 'G1',
        text: 'Welcome to your development dashboard where you can customize your branding, build components, pages and add functions and files.',
      },
    },
    ContinueButton: {
      minWidth: 'auto',
      opacity: '1',
      padding: 'Z1 B',
      margin: '0',
      gap: 'X2',
      text: 'Getting Started',
      href: '/init/personalize',
      transitionProperty: 'background, transform, color, background',
      theme: 'secondary',
      '@screenS': {
        alignSelf: 'flex-end',
      },
    },
  },
  Flex: {
    margin: '- - - -Z2',
    gap: 'A',
    flex: 3,
    '@screenS': {
      gap: 'A1',
    },
    '@tabletS': {
      display: 'grid',
      style: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
    },
    childExtends: 'ItemHighlightAlt',
    childrenAs: 'state',
    children: (el, state) => [{
      available: state.package > 1,
      icon: state.package > 1 ? 'copywriting' : 'arrowUpRight',
      title: 'Content',
      href: state.package > 1 ? '/state' : '/pricing',
      p: 'State and content database'
    }, {
      available: state.package > 1,
      icon: state.package > 1 ? 'pages' : 'arrowUpRight',
      title: 'Pages',
      href: state.package > 1 ? '/pages' : '/pricing',
      p: 'Pages, routes and flow of the app'
    }, {
      icon: 'menu outline',
      title: 'Components',
      href: '/components',
      p: 'Symbols User Interface library'
    }, {
      icon: 'tree outline',
      title: 'Design System',
      href: '/design-system',
      p: 'Design System of your brand'
    }, {
      available: state.package > 1,
      icon: 'fn outline',
      title: 'Functions',
      href: state.package > 1 ? 'fn outline' : 'arrowUpRight',
      p: 'Browser and data functions'
    }],
  },
};