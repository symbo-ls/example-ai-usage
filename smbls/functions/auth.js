import { isLocalhost } from './fetch.js'

export const auth = async function auth() {
    // Skip auth on localhost - go directly to dashboard
    if (isLocalhost()) {
      if (window.location.pathname === '/') {
        this.call('router', '/dashboard', this.__ref.root)
      }
      return { success: true }
    }

    if (this.state.root.success) {
      if (window.location.pathname === '/') {
        this.call('router', '/dashboard', this.__ref.root)
      }
    } else {
      if (window.location.pathname === '/') {
        const res = await this.call('fetch', 'GET', '', null, {
          route: '/auth/me',
        })

        if (res.success) {
          this.state.root.update(res)
          this.call('router', '/dashboard', this.__ref.root)
        }
        return res
      } else {
        this.call('router', '/', this.__ref.root)
      }
    }
  }