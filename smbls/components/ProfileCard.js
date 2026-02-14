export const ProfileCard = {
  extends: 'Flex',
  flow: 'y',
  width: '100%',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  round: 'B',

  Photo: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    tag: 'img',
    style: { objectFit: 'cover' },
    src: (el, s) => s.image || '',
    draggable: 'false'
  },

  Gradient: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '55%',
    style: {
      background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
      pointerEvents: 'none'
    }
  },

  Info: {
    extends: 'Flex',
    flow: 'y',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    padding: 'A2',
    gap: 'Z',
    color: 'white',

    NameRow: {
      extends: 'Flex',
      flow: 'x',
      align: 'center flex-start',
      gap: 'Z',
      Name: {
        tag: 'h2',
        fontSize: 'C',
        fontWeight: '700',
        text: (el, s) => s.name || ''
      },
      Age: {
        tag: 'span',
        fontSize: 'B2',
        fontWeight: '300',
        text: (el, s) => s.age || ''
      }
    },

    JobRow: {
      extends: 'Flex',
      flow: 'x',
      align: 'center flex-start',
      gap: 'Z',
      if: (el, s) => s.job,
      Icon: { name: 'briefcase', boxSize: 'Z2', color: 'white 0.85' },
      Text: {
        tag: 'span',
        fontSize: 'A',
        color: 'white 0.9',
        text: (el, s) => s.job || ''
      }
    },

    SchoolRow: {
      extends: 'Flex',
      flow: 'x',
      align: 'center flex-start',
      gap: 'Z',
      if: (el, s) => s.school,
      Icon: { name: 'graduationCap', boxSize: 'Z2', color: 'white 0.85' },
      Text: {
        tag: 'span',
        fontSize: 'A',
        color: 'white 0.9',
        text: (el, s) => s.school || ''
      }
    },

    LocationRow: {
      extends: 'Flex',
      flow: 'x',
      align: 'center flex-start',
      gap: 'Z',
      if: (el, s) => s.distance,
      Icon: { name: 'mapPin', boxSize: 'Z2', color: 'white 0.85' },
      Text: {
        tag: 'span',
        fontSize: 'Z2',
        color: 'white 0.75',
        text: (el, s) => s.distance || ''
      }
    }
  },

  LikeStamp: {
    extends: 'Flex',
    flexAlign: 'center center',
    position: 'absolute',
    top: 'B',
    left: 'A2',
    padding: 'Z A',
    border: 'tinderGreen 4px solid',
    round: 'Z2',
    color: 'tinderGreen',
    fontSize: 'C',
    fontWeight: '800',
    letterSpacing: '2px',
    text: 'LIKE',
    opacity: '0',
    style: {
      transform: 'rotate(-25deg)',
      pointerEvents: 'none',
      textTransform: 'uppercase'
    }
  },

  NopeStamp: {
    extends: 'Flex',
    flexAlign: 'center center',
    position: 'absolute',
    top: 'B',
    right: 'A2',
    padding: 'Z A',
    border: 'tinderRed 4px solid',
    round: 'Z2',
    color: 'tinderRed',
    fontSize: 'C',
    fontWeight: '800',
    letterSpacing: '2px',
    text: 'NOPE',
    opacity: '0',
    style: {
      transform: 'rotate(25deg)',
      pointerEvents: 'none',
      textTransform: 'uppercase'
    }
  },

  SuperLikeStamp: {
    extends: 'Flex',
    flexAlign: 'center center',
    position: 'absolute',
    bottom: 'E',
    left: '50%',
    padding: 'Z A',
    border: 'tinderBlue 4px solid',
    round: 'Z2',
    color: 'tinderBlue',
    fontSize: 'C',
    fontWeight: '800',
    letterSpacing: '2px',
    text: 'SUPER LIKE',
    opacity: '0',
    style: {
      transform: 'translateX(-50%)',
      pointerEvents: 'none',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  }
}
