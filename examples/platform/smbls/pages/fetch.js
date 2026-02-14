export const fetch = {
  flow: 'y',
  gap: 'C1',
  padding: 'D1',
  align: 'start',
  onStateUpdate: (_, el, s) => {},
  Flex: {
    Auth: {
      Flex: {
        Flex: {
          childProps: {
            onStateUpdate: (_, el, s) => {
              const {
                key,
                value
              } = s
              s.parent.authArr[el.key] = s.parse()
              if (!key || !value) {
                return
              }
              s.parent.quietUpdate({
                auth: {
                  [key]: value
                }
              })
            },
          },
        },
      },
    },
    Headers: {
      Flex: {
        Flex: {
          childProps: {
            onStateUpdate: (_, el, s) => {
              const {
                key,
                value
              } = s
              s.parent.headersArr[el.key] = s.parse()
              if (!key || !value) {
                return
              }
              s.parent.quietUpdate({
                headers: {
                  [key]: value
                }
              })
            },
          },
        },
      },
    },
    Params: {
      Flex: {
        Flex: {
          childProps: {
            onStateUpdate: (_, el, s) => {
              const {
                key,
                value
              } = s
              s.parent.paramsArr[el.key] = s.parse()
              if (!key || !value) {
                return
              }
              s.parent.quietUpdate({
                params: {
                  [key]: value
                }
              })
            },
          },
        },
      },
    },
  },
  ContinueButton: {
    onClick: async (ev, el, s) => {
      try {
        const response = await el.call('sendRequest', s.parse())
        console.log(response)
        s.update({
          value: response
        })
      } catch (ex) {
        if (ex?.message) {
          return el.call('openNotification', {
            title: 'Error with fetching',
            message: ex.message,
            type: 'error'
          })
        }
      }
    },
  },
  Code: {
    onUpdate: async (el, s) => {
      const code = el.call('stringifyCode', s.value)
      const value = await el.call('prettifyCode', code)
      return el.setProps({
        value
      }, {
        preventUpdateListener: true
      })
    },
  },
  Saving: {
    SaveButton: {
      onClick: async (ev, el, s) => {
        // if (runtime) {
        //   element.getRootState()[title] = resolve(data)
        // } else {
        // }
        console.log(s)
        if (!s.key)
          return el.call('openNotification', {
            title: 'Key is required',
            message: `${ex}`,
            type: 'error'
          })

        if (!s.value)
          return el.call('openNotification', {
            title: 'Value is not assigned',
            message: `${ex}`,
            type: 'error'
          })

        const {
          runtime
        } = s
        if (runtime) {
          s.value = el.call('codifyFetch')
          console.log(s.value)
        }

        const data = el.sdk.addItem(s.type, s.parse(), {
          message: `Added state section ${key}`
        })

        console.log(data)
      },
    },
  },
};