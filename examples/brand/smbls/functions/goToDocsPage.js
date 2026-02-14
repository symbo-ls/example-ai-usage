export const goToDocsPage = function goToDocsPage(href) {
  if (!this.call('isString', href)) {
    return this.warn('Href to docs link is not defined')
  }

  const isInternal = href.startsWith('/')
  if ((this.isCanvas() || this.isEmbed()) && isInternal) return this.setWindow('docs', href.replace('/docs', ''))
  this.router(href, this.getRoot())
}