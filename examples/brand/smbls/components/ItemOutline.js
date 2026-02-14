export const ItemOutline = {
  extends: [
    'Item',
    'ClickableItem',
  ],
  hasHref: null,
  padding: 'A B',
  theme: 'common-card-outline-interactive',
  borderWidth: '1px',
  borderStyle: 'solid',
  '!hasHref': {
    pointerEvents: 'none',
    opacity: 0.35,
  },
};