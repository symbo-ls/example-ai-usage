export const SearchItem = {
  extends: [
    'Flex',
  ],
  props: {
    gap: 'Z1',
    align: 'start',
    padding: 'Z A X',
    theme: 'transparent',
    ':hover': {
      style: {
        svg: {
          opacity: 1,
        },
      },
      theme: 'tertiary',
    },
    onClick: (ev, el, s) => {
      ev.stopPropagation()

      if (!s.parent.recents) s.parent.recents = []
      s.parent.recents.unshift(s.parse())

      if (s.type === 'network')
        el.call('router', `/network/${s.title}`, el.__ref.root)
    },
  },
  Avatar: {
    if: (el, s) => s.type === 'network',
    margin: '-W2 - -',
    src: '{{ title }}.png',
    boxSize: 'B1',
  },
  Hgroup: {
    gap: 'W',
    H: {
      text: '{{ title }}',
      margin: '- C - -',
      tag: 'h6',
    },
    P: {
      text: '{{ type }}',
      textAlign: 'start',
    },
  },
  Flex: {
    flow: 'y',
    gap: 'W',
    Strong: {
      tag: '',
      text: '{{ title }}',
      margin: '- C - -',
    },
    P: {
      extends: 'Flex',
      gap: 'X1',
      align: 'center',
      margin: '0',
      textAlign: 'start',
      color: 'caption',
      Span_network: {
        if: (el, s) => s.type !== 'network',
        extends: 'Flex',
        align: 'center',
        gap: 'Y',
        Avatar: {
          margin: '-W2 - -',
          src: '{{ network }}.png',
          boxSize: 'Z2',
        },
        Strong: {
          text: '{{ network }}',
        },
        Span_sep: {
          text: '・',
        },
      },
      Span_type: {
        text: '{{ type }}',
      },
      lineHeight: 1.3,
    },
  },
};