export const DocsLink = {
  extends: 'Link',
  fontWeight: 500,
  color: 'title',
  ':hover': {
    textDecoration: 'underline',
  },
  onClick: 'navigateDocs',
};