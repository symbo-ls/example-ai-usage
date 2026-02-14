export const Feedback = {
  gap: 'A2',
  align: 'start',
  flow: 'x',
  IconText: {
    color: 'paragraph',
    text: '{{ title }}',
    flow: 'column',
    gap: 'Z',
    padding: '0',
    tag: 'button',
    background: 'transparent',
    border: '0',
    fontSize: 'A',
    cursor: 'pointer',
    margin: '-W - -',
    Icon: {
      name: 'arrowAngleUp',
      color: 'dim',
      '.isActive': {
        color: 'orange',
      },
    },
    '!isActive': {
      ':hover svg': {
        color: 'placeholder',
      },
    },
    onClick: (ev, el, s) => {
      const {
        isActive
      } = s
      s.update({
        isActive: !isActive,
        upvotes: isActive ? s.upvotes - 1 : s.upvotes + 1
      })
    },
  },
  Hgroup: {
    H: {
      extends: 'DocsLink',
      text: 'Flexbox in Editor',
      fontWeight: '700',
      tag: 'h6',
    },
    P: {
      text: null,
      childProps: {
        display: 'inline',
      },
      children: [
        'by ',
        {
          DocsLink: {
            text: 'kiaynwang',
          },
        },
        ' ',
        {
          DocsLink: {
            text: '3 hours ago',
          },
        },
        ' ・ ',
        {
          DocsLink: {
            text: '49 commnts',
          },
        },
      ],
    },
  },
};