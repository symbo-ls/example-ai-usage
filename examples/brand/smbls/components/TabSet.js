export const TabSet = {
  padding: 'V2+V2',
  flow: 'x',
  round: 'D',
  background: 'gray .1',
  width: 'fit-content',
  childExtends: 'Button',
  children: [
    {
      text: 'build',
      isActive: true,
      theme: 'dialog-elevated',
    },
    {
      text: 'test',
    },
  ],
  childProps: {
    Icon: null,
    round: 'D',
    fontWeight: '400',
    padding: 'Z B1',
    textTransform: 'capitalize',
    '.isActive': {
      theme: 'document',
    },
    theme: 'transparent',
  },
};