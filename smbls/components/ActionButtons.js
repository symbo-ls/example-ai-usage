export const ActionButtons = {
  extends: 'Flex',
  flow: 'x',
  flexAlign: 'center center',
  gap: 'A2',
  padding: 'A2 0',

  RewindBtn: {
    extends: 'ActionButton',
    boxSize: 'C2',
    background: 'gray3 0.85',
    ':hover': { background: 'gray3' },
    Icon: { name: 'rewind', boxSize: 'A', color: 'tinderGold' },
    onClick: (ev, el, s) => {
      s.update({ action: 'rewind' })
    }
  },

  NopeBtn: {
    extends: 'ActionButton',
    boxSize: 'D',
    background: 'gray3 0.85',
    border: 'tinderRed 2px solid',
    ':hover': { background: 'tinderRed 0.15' },
    Icon: { name: 'tinderClose', boxSize: 'A2', color: 'tinderRed' },
    onClick: (ev, el, s) => {
      s.update({ action: 'nope' })
    }
  },

  SuperLikeBtn: {
    extends: 'ActionButton',
    boxSize: 'C2',
    background: 'gray3 0.85',
    border: 'tinderBlue 2px solid',
    ':hover': { background: 'tinderBlue 0.15' },
    Icon: { name: 'star', boxSize: 'A', color: 'tinderBlue' },
    onClick: (ev, el, s) => {
      s.update({ action: 'superlike' })
    }
  },

  LikeBtn: {
    extends: 'ActionButton',
    boxSize: 'D',
    background: 'gray3 0.85',
    border: 'tinderGreen 2px solid',
    ':hover': { background: 'tinderGreen 0.15' },
    Icon: { name: 'heart', boxSize: 'A2', color: 'tinderGreen' },
    onClick: (ev, el, s) => {
      s.update({ action: 'like' })
    }
  },

  BoostBtn: {
    extends: 'ActionButton',
    boxSize: 'C2',
    background: 'gray3 0.85',
    ':hover': { background: 'tinderPurple 0.15' },
    Icon: { name: 'bolt', boxSize: 'A', color: 'tinderPurple' },
    onClick: (ev, el, s) => {
      s.update({ action: 'boost' })
    }
  }
}
