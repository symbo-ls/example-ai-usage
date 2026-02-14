export const editPageModal = {
  extends: [
    '/edit-component-modal',
    '/add-page-modal',
  ],
  onInit: (el, s) => {
    let pageKey = s.key
    if (!pageKey) {
      const route = el.call('getLastLocationPath')
      const isIndex = route === '/main' || route === '/index'
      pageKey = `/${(isIndex ? '/' : route).slice(1).replaceAll('..', '/')}`
    }
    const item = el.getItem(pageKey, 'pages')
    return item && s.quietReplace(item)
  },
};