export const Command = {
  padding: '0 C2 0 0',
  fontSize: '0.765em',
  fontFamily: 'Code',
  '@dark': {
    style: {
      '& .token': {
        '&.function': {
          color: '#DBDDAA',
        },
      },
    },
  },
  '@light': {
    style: {
      '& .token': {
        '&.function': {
          color: '#a59300',
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

    if (!Prism.languages.bash) {
      try {
        await import('prismjs/components/prism-bash.min.js')
      } catch (e) {
        await window.require('prismjs@1.30.0/components/prism-bash.min.js')
      }
    }

    const code = el.call('getCodePreviewValue')

    if (!code || !Prism) return

    el.update({
      html: Prism.highlight(
        code,
        Prism.languages.bash,
        'bash'
      )
    }, {
      preventListeners: true
    })
  },
};