export const FilterSidebar = {
  props: {
    gap: 'A',
    flexFlow: 'x',
    flexAlign: 'center start',
  },
  extend: 'DropdownParent',
  Button: {
    text: (el, s) => s.isUpdate ? 'Updates' : 'All validators',
    theme: 'transparent',
    gap: 'Z2',
    Icon: {
      name: 'chevronDown',
      order: 2,
      minWidth: 'Z2',
    },
    fontWeight: '300',
    paddingInline: '0',
    width: 'E3',
    flexAlign: 'center start',
  },
  Dropdown: {
    left: '-X',
    backdropFilter: 'blur(3px)',
    background: 'softBlack .9 +65',
    childExtends: 'Button',
    childProps: {
      theme: 'transparent',
      align: 'start',
      padding: 'Z2 A',
    },
    flexFlow: 'y',
  },
};