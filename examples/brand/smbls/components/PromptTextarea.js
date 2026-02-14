export const PromptTextarea = {
  boxSize: 'E2 I1+C',
  maxWidth: '100%',
  minHeight: 'E2',
  overflow: 'hidden',
  position: 'relative',
  theme: 'field',
  round: 'B',
  '@tabletM': {
    boxSize: 'E2 I',
  },
  '@tabletS': {
    boxSize: 'E2 100%',
  },
  transition: 'B background defaultBezier',
  '@mobileL': {
    boxSize: 'F1 100%',
  },
  Textarea: {
    minWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    theme: 'transparent',
    placeholder: '"How can I create single sign on?"',
    fontSize: 'A1',
    padding: 'A2 A2 - B',
    border: 'none',
    style: {
      border: 'none',
      borderStyle: 'none',
    },
    '@mobileL': {
      padding: 'B B - B',
    },
    '@mobileM': {
      padding: 'D B - B',
      textAlign: 'center',
      lineHeight: '1.3em',
    },
  },
  Flex: {
    position: 'absolute',
    top: 'A1',
    right: 'B1',
    gap: 'B',
    '@mobileL': {
      right: 'B',
      gap: 'A2',
    },
    '@mobileM': {
      right: 'A1',
      top: 'A',
    },
    childExtends: 'IconButton',
    childProps: {
      padding: 'X',
      theme: 'transparent',
    },
    children: [
      {
        Icon: {
          name: 'upload',
        },
      },
      {
        Icon: {
          name: 'chevronUp',
        },
      },
    ],
  },
  Button: {
    text: 'Create a feature',
    position: 'absolute',
    padding: 'Z2 C+X1',
    right: 'A1',
    bottom: 'A1',
    flow: 'row-reverse',
    gap: 'Y2',
    theme: 'blackWhite',
    fontWeight: '600',
    '@mobileM': {
      minWidth: '90%',
      maxWidth: '90%',
      right: '50%',
      transform: 'translate(50%, 0)',
    },
    Icon: {
      name: 'chevronUp',
      fontSize: 'B',
      transform: 'rotate(45deg)',
      margin: '-W - - -',
    },
  },
};