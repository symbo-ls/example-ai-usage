export const navigateDocs = function navigateDocs(ev) {
  ev.preventDefault()
  const href = this.call('resolveHref', this.props.href)
  this.call('goToDocsPage', href)
}