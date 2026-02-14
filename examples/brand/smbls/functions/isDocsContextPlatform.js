export const isDocsContextPlatform = function isDocsContextPlatform() {
  return this.getRootState('docsContext') === 'Platform'
}