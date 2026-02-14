export const MetaSection = {
  state: {
    data: [
    ],
    metrics: [
      {
        title: 'Status',
        items: [
          {
            caption: 'Live',
            value: '14',
          },
          {
            caption: 'Onboarding',
            value: '4',
          },
          {
            caption: 'Degraded',
            value: '0',
          },
        ],
      },
      {
        title: 'Fleet cloud distribution',
        items: [
          {
            caption: 'GCP',
            value: '4',
          },
          {
            caption: 'AWS',
            value: '4',
          },
          {
            caption: 'Rame',
            value: '0',
          },
          {
            caption: 'OVH',
            value: '14',
          },
        ],
      },
    ],
  },
  props: {
    flexFlow: 'y',
    borderWidth: '0 0 0 2px',
    borderStyle: 'solid',
    borderColor: '--theme-document-dark-background',
    minWidth: 'G3',
    padding: 'A A2',
    gap: 'B2',
    '@tabletM': {
      hide: true,
    },
  },
  H6: {
    fontSize: 'Z2',
    text: 'Fleet Summary',
    fontWeight: 'bold',
  },
  Flex: {
    flow: 'y',
    gap: 'C1',
    children: (el, s) => s.metrics,
    childrenAs: 'state',
    childProps: {
      flexFlow: 'y',
      gap: 'A2',
      H6: {
        fontWeight: '700',
        fontSize: 'Y1',
        textTransform: 'uppercase',
        text: '{{ title }}',
      },
      Grid: {
        templateColumns: 'repeat(3, 1fr)',
        gap: 'B',
        childExtends: 'Hgroup',
        childProps: {
          gap: 'X',
          H: {
            tag: 'h5',
            text: '{{ value }}',
          },
          P: {
            order: -1,
            text: '{{ caption }}',
          },
        },
        childrenAs: 'state',
        children: (el, s) => s.items,
      },
    },
  },
};