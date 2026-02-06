export const add = async function addNew(item = 'network') {
    const ROUTE = {
      network: '',
      node: '/' + this.state.protocol + '/node'
    }

    const formData = new FormData(this.node)
    let data = Object.fromEntries(formData)

    // Handle communication channels for network
    if (item === 'network') {
      const channels = {
        'Slack-Tech': data.slack_tech || '',
        'Slack-Biz': data.slack_biz || '',
        'Telegram-Tech': data.telegram_tech || '',
        'Telegram-Biz': data.telegram_biz || '',
        'Discord': data.discord || '',
      }
      data.communication_channels = JSON.stringify([channels])
      // Remove individual channel fields
      delete data.slack_tech
      delete data.slack_biz
      delete data.telegram_tech
      delete data.telegram_biz
      delete data.discord
    }

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