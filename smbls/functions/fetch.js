export const isLocalhost = () => location.hostname === 'localhost' || location.hostname === '127.0.0.1'

export const fetch = async function fetch(method = 'GET', path = '', data, opts = {}) {
    // const ENDPOINT = 'https://small-sound-18b4.nika-980.workers.dev/api/fleet'
    // const ENDPOINT = 'https://bigbrother.symbo.ls' + (opts.route || '/api/fleet') + path

    const { headers: customHeaders, ...restOpts } = opts
    const options = {
      method: method || 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...customHeaders
      },
      ...restOpts
    }

    const isCanvas = location.href === 'srcdoc'
    const isSymbols = location.host.includes('symbo.ls')
    const isProd = location.host.includes('nodeops.ninja') && !location.host.includes('dev')
    // const isProd = false // location.host.includes('nodeops.ninja') && !location.host.includes('dev')

    let URL
    if (isLocalhost()) {
      URL = 'http://localhost:3000'
    } else {
      URL = `https://${isProd ? '' : 'dev.'}api.nodeops.ninja`
    }
    const ENDPOINT = URL + (opts.route || '/api/fleet') + path

    if (isLocalhost()) {
      // Skip auth on localhost
    } else if (isCanvas || isSymbols || !isProd) {
      const API_TOKEN = 'bb_ff64921b7b6dae704a352681c26ae5ed35c8143e18e13f2682cc2be1ab4ebb74'
      options.headers.Authorization = 'Bearer ' + API_TOKEN
    } else {
      // const SESSION_ID = 's%3AwAm91jUNz7Bv3ihqvY9o4AJ_xQDTA6x3.VcEZyPFSdClTokzsu9n3gXULU1qp7pxSNCSEQBUhoIQ'
      // options.headers.credentials = true
      // options.headers.Authorization = 'Bearer ' + SESSION_ID
      options.credentials = 'include'
      options.mode = 'cors'
    }

    if (data && (options.method === 'POST' || options.method === 'PUT')) {
      options.body = JSON.stringify(data)
    }

    console.log('Fetch request:', options.method, ENDPOINT, options)
    const res = await window.fetch(ENDPOINT, options)

    if (!res.ok) {
      const errorText = await res.text()
      console.error('Failed to submit:', res.status, errorText)
      throw new Error(`HTTP ${res.status}: ${errorText}`)
    }

    // Check if response has content before parsing JSON
    const contentType = res.headers.get('content-type')
    if (contentType && contentType.includes('application/json')) {
      return res.json()
    }

    return res.text()
  }