export const IconsGroup = {
  extends: 'Grid',
  lazyLoad: true,
  columns: 'repeat(12, 1fr)',
  gap: 'X',
  margin: '- -X2',
  limit: 60,
  data: async (el, s, ctx) => {
    const res = await fetch('https://assets.symbo.ls/icons/def_icons.json')
    const defIcons = await res.json()
    const data = el.call('arraizeIconsCategory', defIcons)
    return el.call('deepClone', data)
  },
  childExtends: 'IconTemplate',
  childrenAs: 'state',
  children: async (el, s) => {
    const limit = el.props.limit
    const data = s.data || el.props.data ? await el.call('exec', el.props.data) : []
    if (limit) return data.slice(0, limit)
    return data
  },
};