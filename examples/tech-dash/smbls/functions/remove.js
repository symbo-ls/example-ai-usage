export const remove = async function remove(item = 'network', protocol, opts = {}) {
  let [, _, urlProtocol, nodeType, uid] = window.location.pathname.split('/')

  const ROUTE = {
    network: '/' + protocol,
    node: '/node/' + nodeType + '/' + uid
  }

  console.log('/node/' + nodeType + '/' + uid)

  const res = await this.call('fetch', 'DELETE', ROUTE[item])
  if (!res) return

  this.state.root.quietUpdate({
    modal: null
  })

  const REDIRECT = {
    network: '/dashboard',
    node: '/network/' + protocol
  }
  this.call('router', REDIRECT[item], this.__ref.root)
}