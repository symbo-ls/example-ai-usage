export const CanvasEmbed = {
  extends: 'Iframe',
  minWidth: 'none',
  minHeight: 'none',
  border: 'none',
  width: '100%',
  height: 'H2',
  project: '/nikoloza/default',
  src: el => 'https://symbols.app/embed' + el.props.project,
  round: 'Z2',
};