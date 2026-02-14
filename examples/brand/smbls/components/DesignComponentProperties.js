export const DesignComponentProperties = {
  padding: 'Z2 A',
  flow: 'column',
  gap: 'Z2',
  theme: 'common-box',
  children: (el, s) => s.properties,
  childrenAs: 'state',
  childExtends: 'Flex',
  childProps: {
    gap: 'B',
    PropertyKey: {
      text: '{{ property }}',
      flex: 1,
      color: 'gray7',
    },
    Value: {
      text: '{{ value }}',
      flex: 1,
      fontWeight: '500',
    },
  },
};