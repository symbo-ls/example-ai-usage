export const ArticleLink = {
  extends: [
    'Link',
    'ClickableButton',
  ],
  padding: 'Z1',
  round: 'Z2',
  flexFlow: 'column',
  flexAlign: 'flex-start flex-start',
  borderWidth: '1px',
  '@dark': {
    theme: null,
    color: 'gray11',
    border: 'gray2, solid',
  },
  '@light': {
    theme: null,
    color: 'gray11',
    border: 'gray11, solid',
  },
};