export const signin = {
  flow: 'y',
  align: 'center',
  height: '100%',
  margin: 'auto',
  onRender: () => {},
  LoginWindow: {
    onSubmit: async (ev, el, s) => {
      ev.preventDefault()

      s.update({
        loading: true
      })

      const {
        identifier,
        password
      } = s

      try {
        const pluginSession = el.call('getPluginSessionFromUrl')
        const loginResult = pluginSession ?
          await el.sdk.login(identifier, password, {
            session: pluginSession
          }) :
          await el.sdk.login(identifier, password)

        s.update({
          loading: true
        })
        el.call('applyLoader', {
          value: true,
          force: true,
          timeout: 1
        })

        await el.call('initializeUserSession', {
          loginData: loginResult,
        })

        el.router('/dashboard', el.getRoot())
      } catch (error) {
        console.error('Failed to sign in:', error)
        el.call('openNotification', {
          title: 'Failed to sign in',
          message: error.message,
          type: 'error'
        })
        s.update({
          loading: false
        })
      }
      el.call('applyLoader', {
        value: false,
        force: true,
        timeout: 1
      })
    },
  },
};