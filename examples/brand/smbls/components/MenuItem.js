export const MenuItem = {
  extends: [
    'Link',
    'IconButton',
  ],
  round: 'Z',
  fontSize: 'A',
  isActive: (el, s) => {
    const {
      props: {
        href
      }
    } = el
    if (href) {
      const activePage = el.getRootState().activePage
      const hrefKey = el.call('isString', href) && href.slice(1)
      return activePage === hrefKey
    }
  },
};