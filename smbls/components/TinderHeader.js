export const TinderHeader = {
  extends: 'Flex',
  flow: 'x',
  flexAlign: 'center space-between',
  padding: 'Z2 A2',
  width: '100%',
  maxWidth: 'G',
  margin: '0 auto',

  ProfileBtn: {
    extends: 'Flex',
    flexAlign: 'center center',
    boxSize: 'B2',
    round: '100px',
    cursor: 'pointer',
    color: 'caption',
    ':hover': { color: 'title' },
    Icon: { name: 'accessibility', boxSize: 'A2' }
  },

  Logo: {
    extends: 'Flex',
    flexAlign: 'center center',
    gap: 'Z',
    Icon: { name: 'heart', boxSize: 'A2', color: 'tinderPink' },
    Title: {
      tag: 'h1',
      fontSize: 'B',
      fontWeight: '700',
      style: {
        background: 'linear-gradient(135deg, #FF4B6E, #FF8E6E)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      },
      text: 'tinder'
    }
  },

  ChatBtn: {
    extends: 'Flex',
    flexAlign: 'center center',
    boxSize: 'B2',
    round: '100px',
    cursor: 'pointer',
    color: 'caption',
    ':hover': { color: 'title' },
    Icon: { name: 'menu', boxSize: 'A2' }
  }
}
