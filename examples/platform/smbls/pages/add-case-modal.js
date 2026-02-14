export const addCaseModal = {
  extends: 'ModalWindow',
  width: '100%',
  maxWidth: 'I3',
  maxHeight: '90dvh',
  onInit: (el, s) => {
    const key = el.call('getLastLocationPath').slice(1)
    const value = el.getDesignSystem('CASES')?.[key]
    if (!value || !key) {
      return
    }
    s.update({
      value,
      key
    }, {
      overwrite: true,
      preventUpdate: true
    })
  },
  onSubmit: async (e, el, s, ctx) => {
    e.preventDefault()

    const key = s.key || {}
    const {
      value
    } = s

    const t = setTimeout(async () => {
      await el.updateDesignSystem(`CASES.${key}`, value)
      clearTimeout(t)
    }, 75)
    await el.call('closeModal')
  },
  Flex: {
    'Group.code': {
      CodePreviewWidget: {
        props: (el, s) => ({
          minWidth: '100%',
          widthRange: null,
          theme: 'field-static',
          round: 'X2',
          padding: 'X2 X2 X2 -',
          minHeight: 'G1',
          Monaco: {
            foldLevel: false,
            opacity: 1,
            debounceDuration: 0,
            fileTab: {
              code: el.call('isString', s.value) ?
                s.value : el.stringifyCode(s.value) || 'export default {}',
              type: 'javascript',
              filename: 'case.js',
              fileTabKey: 'function'
            },
            onCodeEditCallback: editor => {
              const value = el.call('evalStringCodeUnsafe', editor.getValue())
              s.value = value
            }
          }
        }),
      },
    },
  },
};