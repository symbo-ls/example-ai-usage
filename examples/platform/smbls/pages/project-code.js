export const projectCode = {
  flow: 'x',
  width: '100%',
  height: '100%',
  padding: 'Z2 A1 X',
  align: 'stretch',
  gap: 'A',
  theme: 'modal',
  '& .monaco-editor': {
    style: {
      width: '100%',
    },
  },
  onInit: (el, s) => {
    const baseUrl = `https://${el.getAppKey()}`;
    s.placeholders['sitemap.xml'] = el.call('generateSitemap', baseUrl, el.getData('pages'))
  },
};