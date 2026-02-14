export const ProjectCodeSchema = {
  borderWidth: '0 0 0 1px',
  borderStyle: 'solid',
  borderColor: 'line',
  CodePreviewWidget: {
    Monaco: {
      fileTab: {
        code: (el, s) => {
          const {
            type,
            key
          } = s
          if (!type) return `// select category or file`
          const typeFactory = el.getSchema(type)
          const code = el.stringifyCode(key ? typeFactory[key] : typeFactory)
          return code
        },
      },
      onCodeEditCallback: (editor, _, el, s) => {
        const code = editor.getValue()
        const value = el.call('evalStringCodeUnsafe', code, {
          onError: (err) => {
            s.update({
              err
            })
          }
        })
      },
    },
  },
};