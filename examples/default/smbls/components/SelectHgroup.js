export const SelectHgroup = {
  Hgroup: {
    gap: 'V2',
    H: {
      tag: 'h6',
    },
    P: {},
  },
  SelectPicker: {
    props: {
      margin: '- - - auto',
    },
    Select: {
      children: () => [{
          value: 'Goat',
        },
        {
          value: 'Icon',
        },
      ],
    },
  },
  extend: 'Flex',
  props: {
    gap: 'C',
  },
};