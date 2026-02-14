export const ModalWindow = {
  extend: 'Flex',
  tag: 'field',
  props: {
    boxSize: 'fit-content',
    align: 'stretch flex-start',
    minWidth: 'G3',
    position: 'relative',
    round: 'B1',
    theme: 'dialog',
    flow: 'y',
    padding: 'A2 A2 A1 A2',
    borderStyle: 'none',
    '@mobileS': {
      fontSize: 'Z2',
      minWidth: 'G2',
    },
  },
  Hgroup: {
    gap: 'Y',
    H: {
      tag: 'h5',
      margin: '0',
      fontWeight: '700',
    },
    P: {
      margin: '0',
    },
  },
  XBtn: {
    position: 'absolute',
    right: 'Z1+W',
    top: 'Z+W',
    round: '100%',
    fontSize: 'A1',
    $isSafari: {
      top: 'Z2',
      right: 'Z2',
    },
    Icon: {
      name: 'x',
    },
    onClick: (ev, el, s) => {
      s.root.update({
        editMode: false
      })
      el.lookup('Modal').removeContent()
    },
  },
};