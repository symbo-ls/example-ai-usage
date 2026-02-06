export const edit = async function edit(item = 'network', protocol, opts = {}) {
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

    // For nodes, send flat object directly (not nested)
    if (item === 'node') {
      // Remove nodeType from data since it's in the URL
      delete data.nodeType
      data.projected_cost = parseInt(data.projected_cost)
      // Send the form data directly as flat object
      // data is already correct: { moniker: "...", env: "...", etc. }
    }

    const ROUTE = {
      network: `/${protocol}`,
      node: `/node/${this.state.nodeType}/${this.state.uid}`
    }

    console.log('Route:', ROUTE[item])
    console.log('Data being sent:', data)

    const res = await this.call('fetch', 'PUT', ROUTE[item], data, opts)
    console.log('Response:', res)

    this.state.root.quietUpdate({
      modal: null
    })

    const redirectUrl = {
      network: '/network/' + this.state.protocol,
      node: '/node/' + this.state.protocol + '/' + this.state.nodeType + '/' + this.state.uid
    }

    this.call('router', redirectUrl[item] || '/', this.__ref.root)
    this.node.reset()
  }