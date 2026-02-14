export const LayerSimple = {
  extends: 'Group',
  padding: 'Z A A A',
  margin: 'C -',
  round: 'Z',
  gap: 'A',
  width: 'F1',
  background: 'gray4',
  Title: {
    text: 'Button',
  },
  Flex: {
    flow: 'column',
    gap: 'A',
    childProps: {
      gap: 'X',
      flexAlign: 'center',
    },
    childExtends: {
      Icon: {
        color: 'inactive',
        gap: 'Y1',
      },
      Span: {
        color: 'white',
        padding: '- - - X2',
      },
    },
    children: () => [{
        Icon: {
          icon: 'typography',
          color: 'purple',
        },
        Span: {
          text: 'Go Dark',
        },
      },
      {
        Icon: {
          icon: 'shapeOutline',
          color: 'indigo',
        },
        Span: {
          text: 'moon',
        },
      },
    ],
  },
};