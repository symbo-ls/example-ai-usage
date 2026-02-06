export const ValidatorInfo = {
  extend: 'Flex',
  props: (el, s) => ({
      flexFlow: 'y',
      gap: 'C1',
      padding: 'A A2',
      round: 'A2 A2 B+X B+X',
      transition: 'B1 defaultBezier opacity',
    }),
  Header: {
    extends: 'Flex',
    align: 'center',
    gap: 'Z',
    AvatarUpload: {
      position: 'relative',
      cursor: 'pointer',
      boxSize: 'B1',
      round: '100%',
      background: '#333',
      flexAlign: 'center center',
      overflow: 'hidden',
      border: '2px dashed #555',
      ':hover': {
        borderColor: '#888',
      },
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
    H5: {
      lineHeight: 1,
      text: '{{ protocol }}',
    },
  },
  Flex: {
    if: () => false,
    Add: {
      extends: 'Button',
      theme: 'transparent',
      padding: 'Z A',
      ':hover': {
        theme: 'dialog',
      },
      icon: 'plus',
      text: 'Add Node',
      gap: 'Y1',
      onClick: (ev, el, s) => {
          ev.stopPropagation()
          s.root.update({
            editMode: true
          })
        },
    },
    align: 'center space-between',
    gap: 'B2',
    Repo: {
      extends: [
        'IconText',
        'Link',
      ],
      fontWeight: '300',
      order: 10,
      icon: (el, s) => s.repo_url?.includes('gitlab') ? 'gitlab' : 'github',
      gap: 'X2',
      href: '{{repo_url}}',
      text: (el, s) => s.repo_url?.split('.com/')[1] || '...',
      ':hover': {
        textDecoration: 'underline',
      },
      margin: '- - - auto',
      target: '_blank',
    },
    padding: '- A - -',
  },
  Grid: {
    childExtends: 'Hgroup',
    templateColumns: 'repeat(4, 1fr)',
    gap: 'C',
    childProps: {
      H: {
        tag: 'h6',
        order: 2,
      },
      P: {
        color: '#94a3b8',
        fontSize: 'Z1',
      },
    },
    children: [
      {
        H: {
          text: '{{ network_type }}',
        },
        P: {
          text: 'Network Type',
        },
      },
      {
        H: {
          text: '{{ network_layer }}',
        },
        P: {
          text: 'Network Layer',
        },
      },
      {
        H: {
          text: '{{ participation }}',
        },
        P: {
          text: 'Network access',
        },
      },
      {
        gridColumn: 'span 3',
        H: {
          text: null,
          Link: {
            href: '{{repo_url}}',
            text: (el, s) => s.repo_url?.split('.com/')[1] || '...',
            target: '_blank',
            ':hover': {
              textDecoration: 'underline',
            },
          },
        },
        P: {
          text: 'Repo URL',
        },
      },
    ],
  },
  Communication: {
    flexFlow: 'y',
    gap: 'Z',
    margin: 'A - B -',
    Title: {
      fontSize: 'Z2',
      text: 'Communication Channels',
    },
    ChannelsGrid: {
      margin: 'Z - - -',
      hide: (el, s) => !s.communication_channels,
      flexFlow: 'row',
      flexWrap: 'wrap',
      gap: 'Z',
      childProps: (el, s) => {
        const key = s.key?.toLowerCase() || ''
        let color = '#94a3b8'
        let iconName = 'link'

        if (key.includes('slack')) {
          color = '#E01E5A'
          iconName = 'slack'
        } else if (key.includes('telegram')) {
          color = '#26A5E4'
          iconName = 'telegram'
        } else if (key.includes('discord')) {
          color = '#5865F2'
          iconName = 'discord'
        }

        return {
          tag: 'a',
          href: s.value,
          target: '_blank',
          rel: 'noopener noreferrer',
          display: 'flex',
          flexFlow: 'row',
          align: 'center',
          gap: 'Y',
          padding: 'Y Z',
          round: 'Z',
          background: color + '20',
          border: '1px solid ' + color + '40',
          cursor: 'pointer',
          textDecoration: 'none',
          transition: 'all 0.2s ease',
          ':hover': {
            background: color + '35',
            borderColor: color + '60',
          },
          Icon: {
            name: iconName,
            fontSize: 'Z1',
            color: color,
          },
          Span: {
            text: s.key,
            fontSize: 'Z1',
            color: 'white',
          },
        }
      },
      childrenAs: 'state',
      children: (el, s) => {
          if (s.communication_channels) {
            const channels = JSON.parse(s.communication_channels)[0]
            const keyVal = Object.entries(channels).filter(v => v[1])
            return keyVal.map(v => ({
              key: v[0],
              value: v[1]
            }))
          }
        },
    },
    NoContent: {
      hide: (el, s) => s.communication_channels,
      text: 'No channels configured',
      tag: 'span',
      margin: 'Z - - -',
      fontWeight: '300',
      fontSize: 'Z1',
      color: 'caption',
    },
  },
  NoContent: {
    show: (el, s) => !s.validators?.length && !s.rpc_nodes?.length,
    padding: 'A A2',
    textAlign: 'center',
    text: 'Network is offline',
  },
  ActiveNodes: {
    margin: 'B -Z2 A',
    flexFlow: 'y',
    gap: 'Z',
    show: (el, s) => {
      const activeValidators = s.validators?.filter(n => n.status !== 'Off') || []
      const activeRpc = s.rpc_nodes?.filter(n => n.status !== 'Off') || []
      return activeValidators.length > 0 || activeRpc.length > 0
    },
    Title: {
      fontSize: 'Z2',
      margin: '- - - Z2',
      text: 'Nodes ',
      Span: {
        fontWeight: '100',
        text: (el, s) => {
          const activeValidators = s.validators?.filter(n => n.status !== 'Off') || []
          const activeRpc = s.rpc_nodes?.filter(n => n.status !== 'Off') || []
          return `(${activeValidators.length + activeRpc.length})`
        },
      },
    },
    Validators: {
      show: (el, s) => s.validators?.filter(n => n.status !== 'Off')?.length,
      children: (el, s) => s.validators?.filter(n => n.status !== 'Off'),
      extends: 'ValidatorsList',
    },
    RPC: {
      show: (el, s) => s.rpc_nodes?.filter(n => n.status !== 'Off')?.length,
      children: (el, s) => s.rpc_nodes?.filter(n => n.status !== 'Off'),
      extends: 'ValidatorsList',
    },
  },
  OffNodes: {
    margin: 'B -Z2 A',
    flexFlow: 'y',
    gap: 'Z',
    opacity: '0.6',
    show: (el, s) => {
      const offValidators = s.validators?.filter(n => n.status === 'Off') || []
      const offRpc = s.rpc_nodes?.filter(n => n.status === 'Off') || []
      return offValidators.length > 0 || offRpc.length > 0
    },
    Title: {
      fontSize: 'Z2',
      margin: '- - - Z2',
      color: '#ef4444',
      text: 'Off ',
      Span: {
        fontWeight: '100',
        text: (el, s) => {
          const offValidators = s.validators?.filter(n => n.status === 'Off') || []
          const offRpc = s.rpc_nodes?.filter(n => n.status === 'Off') || []
          return `(${offValidators.length + offRpc.length})`
        },
      },
    },
    Validators: {
      show: (el, s) => s.validators?.filter(n => n.status === 'Off')?.length,
      children: (el, s) => s.validators?.filter(n => n.status === 'Off'),
      extends: 'ValidatorsList',
    },
    RPC: {
      show: (el, s) => s.rpc_nodes?.filter(n => n.status === 'Off')?.length,
      children: (el, s) => s.rpc_nodes?.filter(n => n.status === 'Off'),
      extends: 'ValidatorsList',
    },
  },
};