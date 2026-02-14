export const DashboardNavbar = {
  extends: [
    'CanvasButton',
  ],
  round: 'C1',
  align: 'center',
  alignSelf: 'center',
  margin: '- -X2 - -',
  '!isActive': {
    ':hover': {
      '@dark': {
        backgroundColor: 'gray4 .5',
      },
      '@light': {
        backgroundColor: 'gray13 .5',
      },
    },
    ':active': {
      '@dark': {
        backgroundColor: 'gray4 .5',
      },
      '@light': {
        backgroundColor: 'gray13 .5',
      },
    },
  },
  Button: {
    extends: [
      'CanvasButton',
      'Button',
    ],
    padding: 'Y Y2 Y Z',
    round: 'C1 0 0 C1',
    lineHeight: 0.9,
    align: 'center',
    gap: 'Y',
    icon: 'play oval',
    text: 'Preview',
    aspectRatio: 'none',
  },
  IconButton: {
    extends: [
      'CanvasButton',
      'IconButton',
    ],
    round: '0 C1 C1 0',
    theme: null,
    lineHeight: 1,
    padding: 'Y2 Y2 Y2 Y',
    margin: '- - - -X',
    icon: null,
    DropdownArrow: {},
  },
};