export const SuggestionAction = {
  extends: 'Link',
  position: 'relative',
  padding: 'D E3 D3',
  textAlign: 'center',
  fontWeight: 'regular',
  round: 'B1',
  scrollToTop: false,
  maxWidth: 'I',
  border: 'gray2 1 +10, 1px, solid',
  cursor: 'pointer',
  ':hover': {
    borderColor: 'gray2 1 +4',
    background: 'gray2 .1',
  },
  text: 'Add a page',
  href: () => `${window.location.pathname}/add-page`,
  onClick: async (ev, el) => {
    ev.preventDefault()
    const href = el.call('resolveHref', el.props.href)
    await el.call('openModal', href?.replace(window.location.pathname, ''))
  },
};