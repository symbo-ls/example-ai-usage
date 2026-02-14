export const ResponsiveOverlay = {
  extends: 'Flex',
  hide: el => {
    const isAuthorised = el.isAuthorised
    const isTesting = location.host.includes('localhost')
    const isCanvas = location.pathname.includes('srcdoc')
    const isEmbed = el.isEmbed()

    return isEmbed || isCanvas || isTesting || !isAuthorised
  },
  display: 'none',
  align: 'center space-between',
  flow: 'column',
  position: 'fixed',
  inset: '0 0 0 0',
  boxSize: '100%',
  padding: 'C',
  backdropFilter: 'blur(3px)',
  zIndex: '999999',
  gap: 'A',
  '@tabletL': {
    display: 'flex',
  },
  '@dark': {
    background: 'black .9',
  },
  '@light': {
    background: 'gray15 .95',
  },
};