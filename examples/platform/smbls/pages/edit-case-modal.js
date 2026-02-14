export const editCaseModal = {
  extends: '/add-case-modal',
  onInit: (el, s) => {
    const key = s.key || el.call('getLastLocationPath').slice(1)
    const value = el.getDesignSystem('CASES')?.[key]
    if (!value || !key) {
      return
    }
    s.update({
      value,
      key,
      oldName: key
    })
  },
  onSubmit: async (e, el, s, ctx) => {
    e.preventDefault()

    await el.bulkUpdateDesignSystem(
      [{
          type: 'delete',
          path: ['CASES', s.oldName]
        },
        {
          type: 'update',
          path: ['CASES', s.key],
          value: s.value
        }
      ],
      'Updated Case'
    )
    const t = setTimeout(async () => {
      await el.updateDesignSystem(`CASES.${s.key}`, s.value)
      clearTimeout(t)
    }, 75)

    await el.call('closeModal')
  },
};