export const add = async function addNew(item = 'network') {
  const ROUTE = {
    network: '',
    node: '/' + this.state.protocol + '/node'
  }

  const formData = new FormData(this.node)
  let data = Object.fromEntries(formData)
  if (item === 'node') {
    data.projected_cost = parseInt(data.projected_cost)
    console.log(data.projected_cost)
    data = {
      nodeType: data.nodeType,
      nodeData: data
    }
  }
  console.log(data)

  const res = await this.call('fetch', 'POST', ROUTE[item], data)
  if (!res) return

  this.state.root.quietUpdate({
    modal: null
  })

  // console.log('here')
  // console.log(this.state)
  // console.log(res)
  const ROUTES = {
    network: '/network/' + data.protocol,
    node: '/node/' + this.state.protocol + '/' + data.nodeType + '/' + res.uid
  }
  this.call('router', ROUTES[item] || '/', this.__ref.root)
  this.node.reset()
}