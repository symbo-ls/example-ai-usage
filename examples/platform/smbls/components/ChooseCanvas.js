export const ChooseCanvas = {
  Flex: {
    childProps: (el, s) => ({
      flexAlign: 'center',
      gap: 'Y',
      round: 'C1',
      padding: 'Z A',
      isActive: s.value === el.call('getActiveCanvasPage'),
      theme: s.value === el.call('getActiveCanvasPage') ? 'field' : 'transparent',
      ':hover': {
        theme: 'field'
      },
      '!isActive': {
        color: 'inactive',
        fontWeight: '400'
      },
      '.isActive': {
        theme: 'field',
        fontWeight: '500',
        color: 'title'
      },
      Icon: {
        hide: (el, s) => !s._id,
        order: -1,
        name: 'url',
        color: 'blue .35'
      },
      Text: {
        text: '{{ value }}'
      },
      SharedLibSuffix: {
        hide: (el, s) => !s._id,
        margin: '- - - -X2',
        opacity: '.35',
        text: '.symbo.ls'
      },
      Icon_arrow: {
        hide: (el, s) => !s._id,
        margin: '- - - auto',
        name: 'arrowUpRight',
        color: 'disabled'
      },
      onClick: async (ev, el, s) => {
        if (s._id) {
          return window.open(`${location.origin}/nikoloza/${s.value}`)
        }
        if (el.getWindow('explorerMinimized')) {
          el.expandWindow('explorer')
        } else if (s.value === 'Add new') {
          await el.call('openModal', '/add-canvas')
        } else {
          await el.call('openCanvasPage', s.value)
        }
      }
    }),
    childExtends: {
      on: {
        contextmenu: (ev, el) => {
          const data = el.getCanvasScope()
          if (!data) {
            return
          }
          window.requestAnimationFrame(() => {
            el.activateContext(ev, el)
          })
        },
      },
    },
    children: async (el, s) => {
      const {
        canvas
      } = el.getRootState()
      return el
        .call(
          'joinArrays',
          [{
              title: 'Default'
            },
            ...Object.values(canvas.pages || {})
          ],
          s.sharedLibs || []
        )
        .map(v => ({
          value: v.title,
          ...v
        }))
    },
    onRender: (el, s) => {
      if (el.isEmbed()) {
        return
      }
      window.requestAnimationFrame(async () => {
        // const mySharedLibs = await el.call('getMySharedLibraries')
        // const sharedLibs = mySharedLibs.map(lib => ({
        //   title: lib.key.split('.symbo.ls')[0],
        //   _id: lib.id,
        //   key: lib.key,
        //   name: lib.name,
        //   ...lib
        // }))

        // s.replace({
        //   sharedLibs
        // })
      })
    },
  },
};