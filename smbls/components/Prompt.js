export const Prompt = {
  state: {
    keyword: '',
    thread: [
    ],
    images: [
    ],
    selectedOption: 0,
  },
  tag: 'form',
  props: {
    position: 'relative',
    margin: 'Z 0 -',
    zIndex: '10',
    transition: 'Z defaultBezier margin',
    fontSize: 'Z2',
    round: 0,
    theme: 'transparent',
    onSubmit: (ev, el, s) => {
        // javascript prevent default to prevent default behaviour
        ev.preventDefault()
        console.log(1)

        // get value from state (that we kept in keyup)
        const value = s.keyword

        // if value is empty, do nothing (break the function)
        if (!value) return

        // how state.apply works https://symbols.app/docs/api/state#methods
        // - instead of object, you can use function and make custom logic
        const makeUserChatData = s => {
          s.thread.push({
            role: 'user', // differenciate if message is by user or agent
            message: value,
          })
          s.keyword = ''
        }

        // when 'makeUserChatData' is done, run s.update
        s.apply(makeUserChatData)

        // make textarea empty again
        // e.g. reset form
        el.Relative.Textarea.value = ''

        // fake functionity that chat is answering
        // reuse
        const answer = setTimeout(async () => {
          const res = await el.call('giveMeAnswer', value)
          console.log(res)

          s.apply(s => {
            s.thread.push({
              role: 'agent',
              message: res.summary
            })
          })

          const promptedData = res.data[0].data
          s.root.replace({
            promptedData: el.call('isArray', promptedData) ? promptedData : [promptedData]
          })

          clearTimeout(answer)
        }, 1000)
      },
  },
  Relative: {
    position: 'relative',
    Textarea: {
      id: 'prompt',
      display: 'flex',
      padding: 'Z2 A',
      maxWidth: 'none',
      maxHeight: 'E3',
      minHeight: 'C3',
      overflow: 'hidden auto',
      outline: 'none',
      width: '100%',
      borderWidth: '0 0 1px',
      whiteSpace: 'pre-wrap',
      borderStyle: 'solid',
      borderColor: 'line',
      color: 'title',
      transition: 'Z defaultBezier padding',
      placeholder: '"Ask, Search, Prompt…"',
      theme: null,
      background: 'transparent',
      round: '0',
      onInput: (ev, el, s) => {
          let prompt = el.node.value.trim()
          if (prompt === '\n') prompt = ''
          // s.replace({ keyword: prompt, thread: [] }) // Todo: maybe keep the thread
          s.replace({
            keyword: prompt
          })
        },
      onKeydown: (ev, el, s) => {
          if (ev.key === 'Enter' && !ev.shiftKey) {
            ev.preventDefault()
            // console.log(el.parent.parent.node)
            // console.log(s)
            // el.parent.node.submit(ev, el, s)
          }
          // TODO: I think this does not work
          if (ev.key === 'Escape') {
            ev.stopPropagation()
            el.node.blur()
          }
        },
    },
    Submit: {
      extends: 'SquareButton',
      theme: 'transparent',
      icon: 'check',
      type: 'submit',
      position: 'absolute',
      bottom: 'Z2',
      right: 'Z2',
      zIndex: 2,
    },
  },
  AIThread: {
    hide: (el, s) => !s.thread.length,
  },
};