export const ItemPreview = {
  extends: [
    'Link',
  ],
  flow: 'y',
  align: 'space-between flex-start',
  gap: 'C2',
  round: 'Z2',
  padding: 'A1 A1',
  whiteSpace: 'nowrap',
  href: (el) => '/account/' + el.getAppKey().split('.')[0],
  transition: 'A defaultBezier',
  transitionProperty: 'background, color, border-color',
  borderWidth: '2px',
  borderStyle: 'solid',
  theme: 'common-card-outline-interactive',
  fontWeight: '400',
};