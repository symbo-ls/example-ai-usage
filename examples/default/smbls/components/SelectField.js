export const SelectField = {
  Select: {
    children: [
      {
        value: '',
        text: 'Select one...',
      },
      {
        value: 'mazda',
        text: 'Mazda',
      },
      {
        value: 'bmw',
        text: 'BMW',
      },
    ],
  },
  Icon: {
    margin: '- Z2 - -',
  },
  extend: 'SelectPicker',
  props: {
    theme: 'field',
    minWidth: 'G',
    padding: 'A A1',
    round: 'D',
  },
};