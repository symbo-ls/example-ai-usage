export const isDocsContextLocal = function isDocsContextLocal() {
  return this.getRootState('docsContext') === 'Local'
}