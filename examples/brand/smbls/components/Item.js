export const Item = {
  extends: [
    'Link',
  ],
  width: '100%',
  padding: 'B B1 A2 B1',
  gap: 'D',
  round: 'Z2',
  flow: 'y',
  align: 'flex-start space-between',
  fontWeight: '400',
  href: '{{ href }}',
  '@tabletL': {
    padding: 'B',
    width: '100%',
    maxWidth: 'none',
  },
};