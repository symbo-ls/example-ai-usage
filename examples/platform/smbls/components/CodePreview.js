export const CodePreview = {
  flex: 1,
  minWidth: 'G',
  maxHeight: '100%',
  overflow: 'auto',
  display: 'block',
  lineHeight: 1.8,
  fontSize: '0.765em',
  fontFamily: 'Code',
  round: 'A1',
  height: 'max-content',
  transition: 'B padding',
  padding: 'A_default A1_default',
  theme: 'common-card',
  value: '// demo code',
  '@dark': {
    style: {
      '& .token': {
        '&.keyword': {
          color: '#4f82ae',
        },
        '&.string': {
          color: '#c8749c',
        },
        '&.punctuation': {
          color: '#A3A3A8',
        },
        '&.function': {
          color: '#c7c981',
        },
        '&.property': {
          color: '#87b6cb',
        },
        '&.string-property': {
          color: '#C584C0',
        },
        '&.operator': {
          color: '#74b6d4',
        },
        '&.boolean': {
          color: '#589BD6',
        },
        '&.number': {
          color: '#B5CFA8',
        },
        '&.comment': {
          color: '#6A9A55',
        },
        '&.constant': {
          color: '#fff',
        },
      },
    },
  },
  '@light': {
    style: {
      '& .token': {
        '&.keyword': {
          color: '#1373c6',
        },
        '&.string': {
          color: '#e34c94',
        },
        '&.punctuation': {
          color: '#8c8ca6',
        },
        '&.function': {
          color: '#a59300',
        },
        '&.property': {
          color: '#348cb3',
        },
        '&.string-property': {
          color: '#cd4cc3',
        },
        '&.operator': {
          color: '#74b6d4',
        },
        '&.boolean': {
          color: '#589BD6',
        },
        '&.number': {
          color: '#B5CFA8',
        },
        '&.comment': {
          color: '#6A9A55',
        },
        '&.constant': {
          color: 'black',
        },
      },
    },
  },
  onUpdate: (el, s) => {
    el.props.onRender(el, s)
  },
  onRender: async (el, s) => {
    const prismjs = await import('prismjs')
    const Prism = prismjs?.default || prismjs
    const globalState = el.getRootState()
    const code = await el.call('getCodePreviewValue')
    if (!code || !Prism) return
    await el.update({
      html: Prism.highlight(
        code,
        Prism.languages.javascript,
        globalState.language
      )
    }, {
      preventListeners: true
    })
  },
};