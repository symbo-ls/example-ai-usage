export const TutorialsRow = {
  extends: 'Group',
  background: 'highlight-reversed',
  padding: 'A1 B1',
  margin: '- -B1',
  round: 'A2',
  gap: 'A2',
  hide: (el, s) => s.hideTutorials,
  ':hover .hide': {
    opacity: 1,
  },
  Title: {
    IconText: {
      class: 'hide',
      opacity: '0',
      text: 'Hide',
      icon: 'eyeClosed',
      gap: 'Y1',
      transition: 'A defaultBezier opacity',
      cursor: 'pointer',
      ':hover': {
        textDecoration: 'underline',
      },
      onClick: (ev, el, s) => {
        el.call('setCookie', 'hideTutorialsDashboard', 'true', 365)
        s.toggle('hideTutorials', {
          preventUpdate: ['ChooseProject']
        })
      },
    },
    flexFlow: 'x',
    flexAlign: 'center space-between',
    text: 'Getting Started',
  },
  Scrollable: {
    paddingInline: '0',
    margin: '- -B',
    padding: '- - - B',
    maxWidth: 'auto',
    width: 'auto',
    gap: 'C',
    ':before, &:after': {
      content: '""',
      widthRange: '1px',
    },
    childExtends: 'TutorialsRowItem',
    childrenAs: 'state',
    children: [
      {
        text: 'Getting started with basic landing page',
        youtubeId: 'jYU0soXY-To',
        duration: '14:31',
      },
      {
        text: 'Build using Symbols library',
        youtubeId: '1Vut-DOrfvg',
        duration: '1:50',
      },
      {
        text: 'What is Symbols',
        youtubeId: 'P_jjCTzS0-w',
        duration: '1:15',
      },
      {
        text: 'Navigating around Symbols',
        youtubeId: 'rugrjZ6WrDM',
        duration: '4:25',
      },
      {
        text: 'Building components',
        youtubeId: 'ScXOBnJ6ZIU',
        duration: '2:31',
      },
      {
        text: 'Building pages',
        youtubeId: '-qWxYRR15DM',
        duration: '0:56',
      },
      {
        text: 'Semi Advanced Tutorial Calculator',
        youtubeId: 'dPZCwGEysdI',
        duration: '5:23',
      },
      {
        text: 'Changing components and seeing code editor',
        youtubeId: 'W2sEhoLA0Dc',
        duration: '0:23',
      },
      {
        text: 'How to use files',
        youtubeId: 'P9D8A0258Ro',
        duration: '1:58',
      },
      {
        text: 'How to use color',
        youtubeId: 'i4JuUp39n50',
        duration: '2:02',
      },
      {
        text: 'How to use spacing',
        youtubeId: 'xFgl6jG2yrw',
        duration: '2:35',
      },
      {
        text: 'How to use icon',
        youtubeId: 'rPfSew0RGZc',
        duration: '2:19',
      },
    ],
  },
  Scrollbar: {
    extends: 'Scrollbar.scrollable',
  },
};