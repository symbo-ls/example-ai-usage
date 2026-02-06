export const FiltersSection = {
  props: {
    key: 'Environment',
    options: [
    ],
  },
  CaptionTitle: {
    margin: '- - B',
    Text: {
      text: el => el.parent.parent.props.key,
    },
  },
  Flex: {
    flow: 'y',
    gap: 'Z',
    align: 'start',
    childExtends: 'NetworkRowLabel',
    childProps: {
      color: 'white',
      background: 'white .1',
      theme: null,
      fontSize: 'Z2',
      order: 12,
      onClick: (ev, el, s) => {
        if (!s.filters) s.filters = []
        s.apply(() => {
          s.filters.push(el.props.text)
        })
      },
      isDisabled: (el, s) => s.filters?.includes(el.props.text),
      '.isDisabled': {
        pointerEvents: 'none',
        opacity: 0.35,
      },
    },
    children: el => el.parent.props.options,
  },
  key: 'Environment',
};