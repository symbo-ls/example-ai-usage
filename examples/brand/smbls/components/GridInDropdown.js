export const GridInDropdown = {
  extends: 'Grid',
  gridTemplateRows: 'repeat(1fr, 6)',
  autoColumns: 'auto',
  padding: 'X2',
  gap: 'Z2',
  children: el => el.call('exec', el.parent.props.options, el.parent),
  childrenAs: 'state',
  childExtends: [
    'GridItem',
  ],
};