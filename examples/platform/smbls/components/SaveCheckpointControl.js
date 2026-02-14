export const SaveCheckpointControl = {
  position: 'relative',
  width: '100px',
  height: '30px',
  fontSize: 'X',
  flow: 'row',
  align: 'center',
  pointerEvents: 'auto',
  onInit: (el, s) => {
    const handler = ({
      origin
    }) => {
      if (origin === 'auto') {
        s.status = 'autoSaved'
        setTimeout(() => s.update({
          status: null
        }), 1500)
      }
    }
    el.sdk.rootBus.on('checkpoint:done', handler)
  },
  CommitBtn: {
    onClick: async (ev, el, st) => {
      try {
        st.update({
          status: 'saving'
        })
        await el.sdk.checkpoint()
        st.update({
          status: 'manualSaved'
        })
        setTimeout(() => st.update({
          status: null
        }), 2500)
      } catch (err) {
        console.error(err)
        st.update({
          status: null
        })
      }
    },
  },
};