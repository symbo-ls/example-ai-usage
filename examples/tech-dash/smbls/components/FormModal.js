export const FormModal = {
  extend: 'ModalWindow',
  props: {
    maxHeight: '95dvh',
    overflow: 'hidden auto',
    widthRange: 'H1',
    '@mobileS': {
      fontSize: 'Z2',
    },
    '@mobileXS': {
      fontSize: 'Z1',
    },
  },
  Hgroup: {
    margin: '- W B+V2 W',
    H: {},
    P: {},
  },
  XBtn: {},
  Form: {
    extends: 'ModalForm',
  },
};