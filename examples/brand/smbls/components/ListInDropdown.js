export const ListInDropdown = {
  flow: 'y',
  gap: 'W',
  align: 'stretch flex-start',
  children: el => el.call('exec', el.parent.props.options, el.parent),
  childrenAs: 'state',
  childExtends: [
    'KeyValueColumnFields',
  ],
};