export const AIMessage = {
  extend: [
    'LabelTag',
    'Focusable',
  ],
  props: {
    theme: 'field',
    tag: 'div',
    padding: 'Z1 B1 Z1 A2',
    contentEditable: true,
    color: 'caption',
    lineHeight: '1.55em',
    fontWeight: '400',
    text: null,
    html: (el, s) => s.prompt,
    whiteSpace: 'wrap',
    wordBreaking: 'break-all',
    ':empty:before': {
      opacity: 0.35,
      color: 'disabled',
      content: '"Ask me . . ."',
    },
  },
};