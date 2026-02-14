export const IconGridTypes = {
  extends: 'Group',
  Flex: {
    children: () => [{
      icon: 'icons',
      text: 'Filled'
    }, {
      icon: 'iconsOutline',
      text: 'Outline'
    }, {
      icon: 'iconsColored',
      text: 'Multicolor'
    }],
  },
};