export const MetaSectionBars = {
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
      gap: 'A',
      H6: {
        fontWeight: '700',
        fontSize: 'Y1',
        textTransform: 'uppercase',
        text: '{{ title }}',
      },
      Flex: {
        gap: 'X',
        style: {
          mixBlendMode: 'luminosity',
        },
        childExtends: {
          extend: 'TooltipParent',
          TooltipHidden: {
            fontSize: 'Z',
            whiteSpace: 'nowrap',
            top: '150%',
            padding: '0 A X2',
            shapeDirection: 'top',
            text: '{{ caption }} ({{ value }})',
          },
        },
        childProps: (el, s) => ({
          height: 'X2',
          position: 'relative',
          flex: s.value,
          background: el.call('stringToHexColor', s.caption),
          ':after': {
            content: '""',
            position: 'absolute',
            zIndex: '2',
            inset: '-Y2 0',
          }
        }),
        childrenAs: 'state',
        children: (el, s) => s.items,
      },
    },
  },
};