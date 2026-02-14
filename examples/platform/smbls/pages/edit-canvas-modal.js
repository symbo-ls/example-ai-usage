export const editCanvasModal = {
  extends: '/add-canvas-modal',
  onInit: async (el, s) => {
    const key = s.key || el.call('getLastLocationPath').slice(1)

    const canvasPageData = el.call('getCanvasPage', key)
    if (!canvasPageData) {
      return
    }

    await s.quietReplace(canvasPageData)
  },
  onSubmit: async (e, el, s, ctx) => {
    e.preventDefault()
    await el.call('addCanvasPage', s, {
      preventNameCheck: true
    })
    await el.call('closeModal')
  },
};