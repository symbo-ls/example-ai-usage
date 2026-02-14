export const AccessibilityCheck = {
  extends: 'Group',
  flexFlow: 'column',
  flexAlign: 'flex-start flex-start',
  gap: 'A',
  Title: {
    text: 'WCAG accessibility checks',
  },
  Flex: {
    flow: 'row wrap',
    align: 'center flex-start',
    gap: 'A2 B',
    childExtends: {
      extend: 'IconText',
      props: {
        gap: 'Y',
        icon: 'checkmark',
        Icon: {
          color: 'grassgreen',
        },
      },
    },
    children: [
      {
        text: 'Normal AAA',
      },
      {
        text: 'Large AAA',
      },
      {
        text: 'Large AA',
      },
      {
        text: 'UI Components',
      },
    ],
  },
};