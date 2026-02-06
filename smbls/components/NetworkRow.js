export const NetworkRow = {
  extend: 'Grid',
  props: {
    templateColumns: '3fr 2fr 2fr 2fr 1fr',
    gap: 'Z2',
    href: (el, s) => '/network/' + s.protocol,
    align: 'center',
    padding: 'A1 A2',
    width: '100%',
    poisition: 'relative',
    childProps: {
      gap: 'Z2',
      flexAlign: 'center',
    },
    borderWidth: '0 0 1px 0',
    borderStyle: 'solid',
    borderColor: '--theme-document-dark-background',
    userSelect: 'none',
    cursor: 'pointer',
    transition: 'background, defaultBezier, A',
    ':hover': {
      background: 'deepFir',
    },
    ':active': {
      background: 'deepFir 1 +5',
    },
    onInit: (el, s) => {
    const parsed = el.call('parseNetworkRow', s)
    s.parsed = parsed
  },
  },
  Name: {
    AvatarBox: {
      boxSize: 'B1',
      position: 'relative',
      round: 'Y',
      overflow: 'hidden',
      border: '1px dashed #444',
      flexAlign: 'center center',
      cursor: 'pointer',
      onClick: (ev, el, s) => {
        ev.stopPropagation()
        ev.preventDefault()
        const protocol = s.protocol

        const modal = document.createElement('div')
        modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;z-index:9999'

        const box = document.createElement('div')
        box.style.cssText = 'background:#1a1a1a;padding:24px;border-radius:12px;min-width:320px'
        box.innerHTML = `
          <h3 style="margin:0 0 16px;color:white">Set icon for ${protocol}</h3>
          <div style="margin-bottom:16px">
            <label style="display:block;margin-bottom:8px;color:#888">Paste image URL:</label>
            <input type="text" id="iconUrl" placeholder="https://..." style="width:100%;padding:8px;border-radius:4px;border:1px solid #444;background:#222;color:white;box-sizing:border-box">
          </div>
          <div style="margin-bottom:16px">
            <label style="display:block;margin-bottom:8px;color:#888">Or upload file:</label>
            <input type="file" id="iconFile" accept="image/*" style="color:white">
          </div>
          <div style="display:flex;gap:8px;justify-content:flex-end">
            <button id="cancelBtn" style="padding:8px 16px;border-radius:4px;border:none;background:#333;color:white;cursor:pointer">Cancel</button>
            <button id="saveBtn" style="padding:8px 16px;border-radius:4px;border:none;background:#4f46e5;color:white;cursor:pointer">Save</button>
          </div>
        `
        modal.appendChild(box)
        document.body.appendChild(modal)

        modal.addEventListener('click', (e) => {
          if (e.target === modal) modal.remove()
        })

        box.querySelector('#cancelBtn').addEventListener('click', () => modal.remove())

        box.querySelector('#saveBtn').addEventListener('click', () => {
          const url = box.querySelector('#iconUrl').value
          const file = box.querySelector('#iconFile').files[0]

          if (url) {
            localStorage.setItem(`icon_${protocol}`, url)
            window.location.reload()
          } else if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
              localStorage.setItem(`icon_${protocol}`, e.target.result)
              window.location.reload()
            }
            reader.readAsDataURL(file)
          }
        })
      },
      Avatar: {
        src: (el, s) => {
          const cached = localStorage.getItem(`icon_${s.protocol}`)
          if (cached) return cached
          return `${s.protocol}.png`
        },
        boxSize: '100%',
        position: 'absolute',
        inset: '0',
        onError: (ev) => {
          ev.target.style.display = 'none'
        },
        onLoad: (ev) => {
          ev.target.style.display = 'block'
          ev.target.parentElement.style.border = 'none'
        },
      },
      Placeholder: {
        Icon: {
          name: 'upload',
          fontSize: 'Z',
          color: '#666',
        },
      },
    },
    Title: {
      tag: 'strong',
      flexFlow: 'x',
      gap: 'X2',
      text: (el, s) => s.protocol,
    },
  },
  Env: {
    childExtends: 'NetworkRowLabel',
    children: (el, s) => s.parsed?.env?.map(text => ({ text })),
    childrenAs: 'state',
    childProps: (el, s) => {
      const color = el.call('getEnvColor', s.text)
      return {
        text: s.text,
        color: color,
        background: color + '20',
        theme: null,
        fontSize: 'Z2',
      }
    },
  },
  NodeTypes: {
    childExtends: 'NetworkRowLabel',
    children: (el, s) => s.parsed?.node_types?.map(text => ({ text })),
    childrenAs: 'state',
    childProps: (el, s) => {
      const color = el.call('getNodeTypeColor', s.text)
      return {
        text: s.text,
        color: color,
        background: color + '20',
        theme: null,
        fontSize: 'Z2',
      }
    },
  },
  CloudProvider: {
    childExtends: 'NetworkRowLabel',
    children: (el, s) => s.parsed?.cloud_provider?.map(text => ({ text })),
    childrenAs: 'state',
    childProps: (el, s) => {
      const color = el.call('getCloudColor', s.text)
      return {
        text: s.text,
        color: color,
        background: color + '20',
        theme: null,
        fontSize: 'Z2',
      }
    },
  },
  Status: {
    childExtends: 'NetworkRowLabel',
    children: (el, s) => {
      let statuses = s.parsed?.status || []
      // Filter statuses based on context
      if (s.statusFilter === 'active') {
        statuses = statuses.filter(status => status !== 'Off')
      } else if (s.statusFilter === 'inactive') {
        statuses = statuses.filter(status => status === 'Off')
      }
      return statuses.map(text => ({ text }))
    },
    childrenAs: 'state',
    childProps: (el, s) => {
      const color = el.call('getStatusColor', s.text)
      return {
        text: s.text,
        color: color,
        background: color + '20',
        theme: null,
        fontSize: 'Z2',
      }
    },
  },
  on: {
    init: (el, s) => {
        const parsed = el.call('parseNetworkRow', s)
        s.parsed = parsed
      },
  },
};