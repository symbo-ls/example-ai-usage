export const LoginWindow = {
  extends: 'ModalWindow',
  tag: 'form',
  overflow: 'visible',
  position: 'relative',
  transform: 'none',
  top: 'auto',
  left: 'auto',
  flow: 'column',
  align: 'flex-start space-between',
  boxSize: 'auto',
  margin: 'auto',
  padding: 'B B2 C1',
  round: 'A',
  theme: null,
  background: (el) => el.getRootState('globalTheme') === 'dark' ? 'black' : 'white',
  border: 'blue 0.1, solid, 1px',
  boxShadow: 'black, 0, 0, 50px, | blue .5, 0, 15px, 100px, -35px',
  IconButton: {
    if: () => ['/signin', '/signin', '/reset-password'].includes(
      window.location.pathname
    ),
    extends: [
      'Link',
      'IconButton',
    ],
    href: '/',
  },
  LoadingGifSection: {
    background: 'black .65',
    position: 'absolute',
    inset: '0',
    fullSize: true,
    transition: 'B defaultBezier',
    transitionProperty: 'opacity, visibility',
    '.loading': {
      opacity: 1,
      visibility: 'visible',
    },
    '!loading': {
      opacity: 0,
      visibility: 'hidden',
    },
  },
  ModalHeader: {
    margin: '0',
    title: 'Sign in to Symbols',
  },
  Flex: {
    RequestAccessButtons: {
      Flex: {
        GoogleSignInButton: {
          extends: [
            'Link',
            'Button',
          ],
          margin: '0 0 0 -X',
          theme: 'quaternary',
          fontWeight: '500',
          gap: 'Z',
          cursor: 'pointer',
          icon: 'googleLogoNormal',
          text: 'Sign in with Google',
          '@tabletS': {
            padding: '- - - C',
          },
          '@mobileL': {
            padding: 'Z1 -',
            align: 'center center',
            maxWidth: '100%',
            textAlign: 'center',
            border: 'none',
          },
          onRender: async (el, state) => {
            // Make sure Google client is loaded
            if (
              !window.google ||
              !window.google.accounts ||
              !window.google.accounts.id
            ) {
              console.error('Google Identity Services not loaded')
              return
            }

            const {
              environment
            } = el.sdk
            // Initialize Google Identity Services with explicit client ID
            window.google.accounts.id.initialize({
              client_id: environment.googleClientId,
              callback: async (response) => {
                if (!response.credential) {
                  console.error('No credential received')
                  return
                }

                try {
                  // Get invite token from localStorage instead of URL
                  const inviteToken = localStorage.getItem(
                    'google_auth_invite_token'
                  )

                  const loginResult = await el.sdk.googleAuth(
                    response.credential,
                    inviteToken
                  )

                  // Clean up the stored token
                  localStorage.removeItem('google_auth_invite_token')

                  el.call('applyLoader', {
                    value: true,
                    force: true,
                    timeout: 1
                  })

                  await el.call(
                    'initializeUserSession', {
                      loginData: loginResult,
                    },
                    el.getRootState(),
                    el.sdk
                  )
                  state.update({
                    loading: false
                  })

                  el.router('/dashboard', el.getRoot())
                } catch (error) {
                  console.error('Failed to sign in:', error)
                  // Clean up stored token on error
                  localStorage.removeItem('google_auth_invite_token')
                  el.call('openNotification', {
                    title: 'Failed to sign in',
                    message: error.message,
                    type: 'error'
                  })
                  state.update({
                    loading: false
                  })
                }
              },
              auto_select: false,
              cancel_on_tap_outside: true
            })

            // Pre-render the Google Sign-In button
            window.google.accounts.id.renderButton(el.dom, {
              type: 'standard',
              theme: 'outline',
              size: 'large',
              text: 'signin_with',
              shape: 'rectangular'
            })
          },
          onClick: (ev, el, state) => {
            state.update({
              loading: true
            })

            // Store invite token in localStorage before initiating Google auth
            try {
              const currentUrl = new URL(window.location.href)
              const inviteToken = currentUrl.searchParams.get('token')
              if (inviteToken) {
                localStorage.setItem('google_auth_invite_token', inviteToken)
              }
            } catch (error) {
              console.error('Failed to store invite token:', error)
            }

            // First try Google One Tap
            try {
              window.google?.accounts.id.prompt((notification) => {
                if (
                  notification.isNotDisplayed() ||
                  notification.isSkippedMoment()
                ) {
                  state.update({
                    loading: false
                  })
                  el.call('handleGoogleRedirectFlow')
                }
              })
            } catch (error) {
              console.error('One Tap failed, trying redirect flow:', error)

              // Direct fallback to redirect-based flow
              state.update({
                loading: false
              })
              el.call('handleGoogleRedirectFlow')
            }
          },
        },
        GithubSignInButton: {
          if: (el) => {
            const {
              environment
            } = el.sdk
            return !environment.isPreview
          },
          extends: [
            'Link',
            'Button',
          ],
          margin: '0 0 0 -X',
          theme: 'quaternary',
          fontWeight: '500',
          gap: 'Z',
          cursor: 'pointer',
          icon: 'github',
          text: 'Sign in with Github',
          '@tabletS': {
            padding: '- - - C',
          },
          '@mobileL': {
            padding: 'Z1 -',
            align: 'center center',
            maxWidth: '100%',
            textAlign: 'center',
            border: 'none',
          },
          onClick: (ev, el, state) => {
            state.update({
              loading: true
            })

            const {
              environment
            } = this.sdk

            try {
              const clientId = environment.githubClientId
              const currentUrl = new URL(window.location.href)
              const inviteToken = currentUrl.searchParams.get('token')

              // Store invite token in localStorage instead of appending to redirect URI
              if (inviteToken) {
                localStorage.setItem('github_auth_invite_token', inviteToken)
              }

              // Use clean redirect URI (no dynamic parameters)
              const redirectUri = `${window.location.origin}/github-auth-callback`

              const encodedRedirectUri = encodeURIComponent(redirectUri)
              const scope = 'user:email'

              window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodedRedirectUri}&scope=${scope}`
            } catch (error) {
              console.error('Failed to initiate GitHub login:', error)
              // Clean up stored token on error
              localStorage.removeItem('github_auth_invite_token')
              state.update({
                loading: false
              })
              el.call('openNotification', {
                title: 'Failed to sign in',
                message: 'Failed to initialize GitHub Sign-In. Please try again.',
                type: 'error'
              })
            }
          },
        },
        Link: {
          order: 3,
        },
      },
      height: '100%',
      padding: '- - - C2',
      gap: 'A2',
      Hgroup: {
        margin: '- - A',
      },
    },
    align: 'start start',
    justifyContent: 'space-between',
    width: '100%',
    padding: 'B C1',
    gap: 'C2',
    childProps: {
      flex: 1,
    },
    '@mobileL': {
      flexWrap: 'wrap',
      padding: 'C1 B C1 B',
      gap: 'A1',
      width: '100%',
      maxWidth: '100%',
    },
  },
  props: {},
};