export const Asdasd = {
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
  },
  Label: {
    position: 'relative',
    zIndex: '1',
    attr: {
      for: 'prompt',
    },
    Textarea: {
      id: 'prompt',
      display: 'flex',
      padding: 'Z2 A',
      position: 'relative',
      maxWidth: 'none',
      maxHeight: 'E3',
      overflow: 'hidden auto',
      outline: 'none',
      width: '100%',
      contentEditable: true,
      borderWidth: '0 0 1px',
      whiteSpace: 'pre-wrap',
      borderStyle: 'solid',
      borderColor: 'line',
      color: 'title',
      transition: 'Z defaultBezier padding',
      background: '0',
      round: '0',
      placeholder: '"Ask, Search, Prompt…"',
      onInput: (ev, el, s) => {
          let prompt = el.node.innerText.trim()
          if (prompt === '\n') prompt = ''
          // s.replace({ keyword: prompt, thread: [] }) // Todo: maybe keep the thread
          s.replace({
            keyword: prompt
          }) // Todo: maybe keep the thread
        },
      onKeydown: (ev, el, s) => {
          if (ev.key === 'Enter' && !ev.shiftKey) {
            ev.preventDefault()
          }
          // TODO: I think this does not work
          if (ev.key === 'Escape') {
            ev.stopPropagation()
            el.node.blur()
          }
        },
    },
    SearchOverlay: {
      class: 'overlay',
      pointerEvents: 'none',
      position: 'absolute',
      top: '100%',
      left: '0',
      zIndex: '10',
      right: '0',
      opacity: '0',
      backdropFilter: 'blur(10px)',
      transition: 'A, defaultBezier',
      transitionProperty: 'opacity, visibility',
      theme: 'dialog-elevated',
      round: '0 0 --canvas-round --canvas-round',
      boxShadow: '0, 10px, 26px, -4px, document',
      visibility: 'hidden',
      childProps: {
        transition: 'Z2 defaultBezier',
        transitionProp: 'opacity, transform',
        '.isVisible': {
          pointerEvents: 'auto',
          opacity: '1',
          transform: 'translateY(0)',
        },
        '!isVisible': {
          transform: 'translateY(6px)',
          pointerEvents: 'none',
          opacity: '0',
        },
      },
      AIThread: {
        pointerEvents: 'auto',
        hide: (el, s) => !s.thread.length,
        isVisible: true,
      },
      Flex: {
        flow: 'y',
        padding: 'X X A',
        gap: 'X',
        theme: 'transparent',
        hide: (el, s) => s.images.length || s.thread.length,
        isVisible: (el, s) =>
            !s.images.length &&
            s.keyword &&
            s.keyword.length < 10 &&
            !s.thread.length,
        childExtends: {
          extends: 'Button',
          props: {
            theme: 'tertiary',
          },
        },
        childProps: {
          flow: 'x',
          padding: 'Z2',
          margin: '0',
          gap: 'A',
          color: 'placeholder',
          fontWeight: '200',
          width: '100%',
          align: 'center start',
          isActive: (el, s) => {
              if (s.selectedOption === Number(el.key)) {
                s.update({
                  selectedElement: el.node
                }, {
                  preventUpdate: true
                })
                return true
              }
              return false
            },
          '.isActive': {
            theme: 'secondary-highlight',
            '@dark': {
              background: '--color-line-highlight-dark',
            },
            '@light': {
              background: '--color-line-highlight-light',
            },
            '& .return': {
              opacity: '1',
            },
          },
          style: {
            border: 'none',
          },
          Icon: {
            widthRange: '1em',
            fontSize: 'Z2',
          },
          Icon_enter: {
            class: 'return',
            opacity: '0',
            order: 10,
            fontSize: 'Z',
            margin: '- X - auto',
            name: 'return',
          },
        },
        children: [
          {
            icon: 'magicstar outline',
            text: 'Prompt',
            type: 'submit',
          },
          {
            icon: 'search',
            text: null,
            children: [
              'Search for “',
              {
                extends: 'Strong',
                margin: '- -Z2',
                fontWeight: '500',
                color: 'title',
                text: '{{ keyword }}',
              },
              '”',
            ],
            onClick: (ev, el, s) => {
                el.node.blur()

                el.call('openNotification', {
                  title: 'Sorry',
                  message: 'Search is not working yet:)',
                  type: 'transparentPattern',
                  duration: 500
                })

                // el.lookup('Overflow')?.state.update({ search: s.keyword })
              },
          },
          {
            icon: 'arrow angle right',
            text: el => 'Command “...”',
            onClick: (ev, el, s) => {
                el.node.blur()

                el.call('openNotification', {
                  title: 'Uh, oh',
                  message: 'Command runner too...',
                  type: 'transparentPattern',
                  duration: 500
                })
              },
          },
        ],
      },
      P: {
        isVisible: (el, s) =>
            !s.images.length && !s.keyword && !s.thread.length,
        position: 'absolute',
        inset: '0',
        flexAlign: 'center',
        textAlign: 'center',
        margin: 'B2 auto',
        color: 'placeholder',
        maxWidth: 'F1',
        opacity: '1',
        text: 'Try asking questions and requests...',
        onRender: el => window.requestAnimationFrame(() => el.update()),
      },
      Suggestions: {
        position: 'absolute',
        inset: '0',
        flexAlign: 'center',
        isVisible: (el, s) =>
            s.images.length ||
            (s.keyword && s.keyword?.length >= 10 && !s.thread.length),
        P: {
          textAlign: 'center',
          color: 'placeholder',
          margin: 'B2 auto',
          maxWidth: 'F1',
          text: 'Ask me anything...',
        },
      },
    },
  },
  on: {
    submit: (ev, el, s) => {
        // javascript prevent default to prevent default behaviour
        ev.preventDefault()

        // get value from state (that we kept in keyup)
        const value = s.keyword

        // if value is empty, do nothing (break the function)
        if (!value) return

        // how state.apply works https://symbols.app/docs/api/state#methods
        // - instead of object, you can use function and make custom logic
        const images = s.images

        const makeUserChatData = s => {
          s.thread.push({
            role: 'user', // differenciate if message is by user or agent
            message: value,
            images: [...images]
          })
          s.images = []
          s.keyword = ''
        }

        // when 'makeUserChatData' is done, run s.update
        s.apply(makeUserChatData)

        // make textarea empty again
        // e.g. reset form
        el.Label.Span.node.innerText = ''

        // fake functionity that chat is answering
        // reuse
        const answer = setTimeout(async () => {
          const res = await el.call('giveMeAnswer', value, images)
          console.log(res)

          s.apply(s => {
            s.thread.push({
              role: 'agent',
              message: res
            })
          })

          clearTimeout(answer)
        }, 1000)
      },
  },
};