export const TemplatesRow = {
  flow: 'y',
  gap: 'Z2',
  align: 'flex-start flex-start',
  minWidth: '100%',
  maxWidth: '100%',
  overflow: 'hidden',
  minHeight: 'fit-content',
  Caption: {
    text: 'Templates',
  },
  Scrollable: {
    childExtends: 'TemplatesRowItem',
    childrenAs: 'state',
    childProps: {
      onInit: (el, s) => {
        if (s.length === 0) {
          el.props.opacity = '0.35'
          el.props.pointerEvents = 'none'
        }
      },
      '@mobileL': {
        minWidth: '100%',
        maxWidth: '100%',
        style: {
          scrollSnapAlign: 'start',
        },
      },
      Img: {
        '@mobileL': {
          boxSize: 'auto 100%',
        },
      },
      Span: {},
    },
    children: [
      {
        poster: 'https://api.symbols.app/core/files/public/68b43aac424350c909e4f047/download',
        projectPath: 'nikoloza/tech-dash',
        previewUrl: 'https://tech-dash.symbo.ls',
        title: 'TechDashboard',
      },
      {
        poster: 'https://api.symbols.app/core/files/public/68b43e2b424350c909e4fa6f/download',
        projectPath: 'nikoloza/mankanet',
        previewUrl: 'https://mankanet.symbo.ls',
        title: 'Mankanet',
      },
      {
        poster: 'https://api.symbols.app/core/files/public/68b446dd424350c909e50d4e/download',
        projectPath: 'nikoloza/nocost',
        previewUrl: 'https://nocost.symbo.ls',
        title: 'NoCost',
      },
      {
        poster: 'https://api.symbols.app/core/files/public/68b65ee1424350c909ebc8a1/download',
        projectPath: 'nikoloza/fresh',
        previewUrl: 'https://fresh.symbo.ls',
        title: 'FreshCo',
      },
      {
        poster: 'https://api.symbols.app/core/files/public/68b66083424350c909ebd66a/download',
        projectPath: 'nikoloza/bessi',
        previewUrl: 'https://bessi.symbo.ls',
        title: 'Christmas Shop',
      },
      {
        poster: 'https://api.symbols.app/core/files/public/68b6749b424350c909ec6fcf/download',
        projectPath: 'nikoloza/qartool',
        previewUrl: 'https://qartool.symbo.ls',
        title: 'Qartool',
      },
      {
        poster: 'https://api.symbols.app/core/files/public/68b67552424350c909ec7534/download',
        projectPath: 'nikoloza/moll',
        previewUrl: 'https://moll.symbo.ls',
        title: 'Mollie',
      },
    ],
  },
  Scrollbar: {
    extends: 'Scrollbar.scrollable',
  },
};