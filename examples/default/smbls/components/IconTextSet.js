export const IconTextSet = {
  childExtend: [
    'IconText',
    'Flex',
  ],
  props: {
    gap: 'A',
    childProps: {
      align: 'center flex-start',
      gap: 'Y1',
      Icon: {},
    },
    flexFlow: 'y',
    children: [
      {
        Icon: {
          name: 'smile',
        },
        text: '+1 (555) 123-4567',
      },
      {
        Icon: {
          name: 'logo',
        },
        text: 'example@mail.com',
      },
    ],
  },
};