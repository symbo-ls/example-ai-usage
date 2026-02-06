export const FieldCaption = {
  extends: 'Flex',
  props: {
    flow: 'column',
    boxSize: 'fit-content fit-content',
  },
  Caption: {
    tag: 'caption',
    text: 'Caption',
    lineHeight: '1em',
    fontSize: 'A',
    fontWeight: '400',
    padding: '- Y2 Z X',
    alignSelf: 'flex-start',
    whiteSpace: 'nowrap',
    textAlign: 'left',
  },
  Field: {
    width: '100%',
    Input: {
      width: '100%',
    },
    Icon: {},
  },
};