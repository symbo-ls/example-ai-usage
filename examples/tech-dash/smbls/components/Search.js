export const Search = {
  tag: 'search',
  extend: 'Flex',
  props: {
    minWidth: 'G2',
    gap: 'Z',
    icon: 'search',
    align: 'center flex-start',
    position: 'relative',
    theme: 'field',
    round: 'D2',
    '@mobileS': {
      minWidth: 'G1',
    },
  },
  Icon: {
    position: 'absolute',
    icon: 'search',
    right: 'A+V2',
  },
  Input: {
    type: 'search',
    placeholder: 'Type a command or search',
    width: '100%',
    padding: 'Z2 C Z2 A2+W',
    theme: 'transparent',
    ':focus ~ button': {
      opacity: '1',
    },
  },
};