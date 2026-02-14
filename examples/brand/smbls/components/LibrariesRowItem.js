export const LibrariesRowItem = {
  extends: [
    'TemplatesRowItem',
  ],
  poster: 'https://api.symbols.app/core/files/public/68b667ce424350c909ec03f9/download',
  projectPath: 'nikoloza/default',
  amount: 206,
  title: 'Default',
  previewUrl: null,
  Box: {},
  Span: {
    Span: {
      if: (el, s) => !!s.amount,
      margin: '- - - A',
      fontWeight: '100',
      fontSize: 'Z2',
      text: ' ({{ amount }} resources)',
      color: 'paragraph',
    },
  },
};