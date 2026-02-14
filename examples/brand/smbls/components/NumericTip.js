export const NumericTip = {
  extends: 'QuickTip',
  gap: 'Z',
  tag: 'nav',
  IconText: {
    icon: 'magicstar',
  },
  Flex: {
    flow: 'y',
    gap: 'X',
    Title: null,
    P: null,
    childrenExtends: 'NumericBulletin',
  },
};