export const TemplatesRowItem = {
  extends: [
    'Link',
  ],
  padding: '0',
  gap: 'Y1',
  flow: 'y',
  widthRange: 'G1',
  round: '0',
  overflow: 'visible',
  ':after': null,
  cursor: 'pointer',
  href: 'https://symbols.app/{{ projectPath }}',
  target: '_blank',
  opacity: '0.75',
  transition: 'A defaultBezier all',
  ':hover': {
    opacity: '1',
    '& .arrow': {
      transform: 'none',
      opacity: '1',
    },
  },
  state: {
    poster: 'https://api.symbols.app/core/files/public/68b43aac424350c909e4f047/download',
    projectPath: 'nikoloza/tech-dash',
    previewUrl: 'https://tech-dash.symbo.ls',
    title: 'TechBrother',
  },
  Box: {
    position: 'relative',
    Flex: {
      extends: [
        'Link',
        'Flex',
      ],
      if: (el, s) => !!s.previewUrl,
      transition: 'A defaultBezier all',
      transform: 'translate3d(20px, -20px, 0)',
      opacity: '0',
      class: 'arrow',
      position: 'absolute',
      top: 'X2',
      right: 'X2',
      zIndex: '2',
      padding: 'Y1',
      background: 'black',
      round: 'Z2',
      href: '{{ previewUrl }}',
      onClick: (ev, el, s) => {
        ev.stopPropagation()
        ev.preventDefault()
        window.open(s.previewUrl, '_blank')
      },
      Icon: {
        fontSize: 'B',
        icon: 'eye',
      },
    },
    Img: {
      round: 'A',
      position: 'relative',
      width: '100%',
      src: '{{ poster }}',
    },
  },
  Span: {
    text: '{{ title }}',
    fontWeight: '400',
    padding: '- - - X2',
  },
};