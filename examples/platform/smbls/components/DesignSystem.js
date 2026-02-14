export const DesignSystem = {
  Grid: {
    childExtends: {
      props: (el, s) => ({
        theme: 'common-card-interactive',
        padding: 'Z2 Y2 Z2 Z2',
        justifyContent: 'space-between',
        flex: '1',
        round: 'A',
        gap: 'B2',
        width: '100%',
        href: '{{ href }}',
        "@tabletL": {
          maxWidth: 'none'
        },
        ":nth-child(2)": {
          "> div > p": {
            maxWidth: 'E3'
          }
        },
        WiderButton: {
          icon: s.icon,
          padding: 'Y2',
          background: s.background,
          theme: s.theme
        },
        Hgroup: {
          gap: 'X2',
          H: {
            text: s.title,
            fontSize: 'A',
            fontWeight: '500'
          },
          P: {
            text: '{{ p }}',
            fontSize: 'Z',
            maxWidth: s.maxWidth,
            "@tabletL": {
              maxWidth: 'E3+A1'
            }
          }
        }
      }),
    },
    children: () => [{
      title: 'Colors',
      href: '/docs/color',
      p: 'Colorize styles manually',
      icon: 'color',
      theme: 'theme',
      maxWidth: 'E'
    }, {
      title: 'Typography',
      href: '/docs/typography',
      p: 'Style a typed material',
      icon: 'typography',
      theme: 'typography',
      maxWidth: 'E'
    }, {
      title: 'Spacing',
      href: '/docs/space',
      p: "Manage properties of a size",
      maxWidth: 'E2',
      icon: 'space',
      theme: 'space'
    }, {
      title: 'Shapes',
      href: '/docs/shapes',
      p: "Design an outline\n      to a chosen component",
      icon: 'shape',
      theme: 'shape'
    }, {
      title: 'Icons',
      href: '/docs/icons',
      p: "Label a role of subject\n      with glyphs",
      icon: 'icons',
      theme: 'icons'
    }, {
      title: 'Breakpoints',
      href: '/docs/media',
      p: "The devices and the breakpoints",
      icon: 'deviceMobileOutline'
    }, {
      title: 'Sequence',
      href: '/docs/sequence',
      p: "The mapping system of\n      generative sizing units",
      icon: 'stateColored'
    }, {
      title: 'Timing',
      href: '/docs/timing',
      p: "Tokens for transitions and animations",
      icon: 'clock'
    }],
  },
};