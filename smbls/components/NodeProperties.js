export const NodeProperties = {
  extends: 'Flex',
  props: {
    flexFlow: 'y',
    borderWidth: '0 0 0 2px',
    borderStyle: 'solid',
    borderColor: '--theme-document-dark-background',
    minWidth: 'G3',
    padding: 'A A2',
    gap: 'A',
    onRender: (el, s) => {
      window.requestAnimationFrame(async () => {
        let [, , , , uid] = window.location.pathname.split('/')
        if (window.location.pathname === 'srcdoc') {
          uid = '02841d62-e018-45e7-92f4-7928f832cd30'
        }

        // Fetch logs (don't block on failure)
        try {
          const logs = await el.call('read', `/node/${uid}/logs`)
          el.call('setInitialData', { logs })
        } catch (err) {
          console.error('Failed to fetch logs:', err)
        }

        // Fetch node properties using uid
        try {
          console.log('Fetching node properties for uid:', uid)
          const props = await el.call('fetch', 'GET', '', null, {
            route: `/api/metrics/node/properties?uid=${uid}`
          })
          console.log('Node properties response:', props)
          if (props) {
            s.update({
              node_hostname: props.hostname,
              node_ip: props.mainIp,
              node_platform: props.platform,
              node_os: props.os,
              node_location: props.location,
              node_tags: props.tags,
              node_cpu: props.hardware?.cpu,
              node_ram: props.hardware?.ram,
              node_disk: props.hardware?.disk,
              node_nics: props.hardware?.nics,
              node_gpu: props.hardware?.gpu
            })
          }
        } catch (err) {
          console.error('Failed to fetch node properties:', err)
        }
      })
    },
    '@tabletM': {
      hide: true,
    },
  },

  // Properties Header with collapse toggle
  PropertiesHeader: {
    extends: 'Flex',
    flexAlign: 'center space-between',
    cursor: 'pointer',
    onClick: (ev, el, s) => {
      s.update({ propertiesCollapsed: !s.propertiesCollapsed })
    },
    Title: {
      fontSize: 'Z2',
      fontWeight: 'bold',
      text: 'Properties',
    },
    Arrow: {
      color: 'caption',
      fontSize: 'Z',
      text: (_, s) => s.propertiesCollapsed ? '▸' : '▾',
    },
  },

  // Properties content
  PropertiesContent: {
    hide: (_, s) => s.propertiesCollapsed,
    flow: 'y',
    gap: 'Z',

    // Hostname
    HostnameRow: {
      extends: 'Flex',
      flexAlign: 'center start',
      gap: 'Y',
      Icon: {
        tag: 'span',
        html: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M0 1.5A.5.5 0 01.5 1h2a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-11zM1 12V2h1v10H1zm5-10.5A.5.5 0 016.5 1h2a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-11zM7 12V2h1v10H7zm5-10.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-11zM13 12V2h1v10h-1z" clip-rule="evenodd"></path></svg>',
        color: 'caption',
        display: 'flex',
        alignItems: 'center',
        minWidth: 'A',
      },
      Label: { text: 'Hostname', color: 'caption', minWidth: 'D' },
      Value: {
        text: (_, s) => s.node_hostname || 'n/a',
        isNan: (_, s) => !s.node_hostname,
        '.isNan': { fontWeight: '300', color: 'caption' },
      },
    },

    // Main IP
    IPRow: {
      extends: 'Flex',
      flexAlign: 'center start',
      gap: 'Y',
      Icon: {
        tag: 'span',
        html: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3h-.2c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C3 5.28 3 6.12 3 7.8V8m5 13h-.2c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C3 18.72 3 17.88 3 16.2V16m18-8v-.2c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C18.72 3 17.88 3 16.2 3H16m5 13v.2c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311C18.72 21 17.88 21 16.2 21H16M3 12h.01m4.49 0h.01m8.99 0h.01M12 12h.01M21 12h.01"></path></svg>',
        color: 'caption',
        display: 'flex',
        alignItems: 'center',
        minWidth: 'A',
      },
      Label: { text: 'Main IP', color: 'caption', minWidth: 'D' },
      Value: {
        extends: 'Flex',
        flexAlign: 'center start',
        gap: 'Y',
        Text: {
          text: (_, s) => s.node_ip || 'n/a',
          isNan: (_, s) => !s.node_ip,
          '.isNan': { fontWeight: '300', color: 'caption' },
        },
        CopyButton: {
          hide: (_, s) => !s.node_ip,
          value: (_, s) => s.node_ip,
        },
      },
    },

    // Status (operational)
    StatusRow: {
      extends: 'Flex',
      flexAlign: 'center start',
      gap: 'Y',
      Icon: {
        tag: 'span',
        html: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>',
        color: 'caption',
        display: 'flex',
        alignItems: 'center',
        minWidth: 'A',
      },
      Label: { text: 'Status', color: 'caption', minWidth: 'D' },
      Value: {
        extends: 'Flex',
        flexAlign: 'center start',
        gap: 'X2',
        StatusDot: {
          props: (el, s) => ({
            hide: !s.status,
            background: el.call('getStatusColor', s.status),
            round: 'C',
            boxSize: 'Y2'
          }),
        },
        Text: {
          text: (_, s) => s.status || 'n/a',
          isNan: (_, s) => !s.status,
          '.isNan': { fontWeight: '300', color: 'caption' },
        },
      },
    },

    // Platform
    PlatformRow: {
      extends: 'Flex',
      flexAlign: 'center start',
      gap: 'Y',
      Icon: {
        tag: 'span',
        html: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"></path></svg>',
        color: 'caption',
        display: 'flex',
        alignItems: 'center',
        minWidth: 'A',
      },
      Label: { text: 'Platform', color: 'caption', minWidth: 'D' },
      Value: {
        text: (_, s) => s.node_platform || 'n/a',
        isNan: (_, s) => !s.node_platform,
        '.isNan': { fontWeight: '300', color: 'caption' },
      },
    },

    // OS
    OSRow: {
      extends: 'Flex',
      flexAlign: 'center start',
      gap: 'Y',
      Icon: {
        tag: 'span',
        html: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>',
        color: 'caption',
        display: 'flex',
        alignItems: 'center',
        minWidth: 'A',
      },
      Label: { text: 'OS', color: 'caption', minWidth: 'D' },
      Value: {
        text: (_, s) => s.node_os || 'n/a',
        isNan: (_, s) => !s.node_os,
        '.isNan': { fontWeight: '300', color: 'caption' },
      },
    },

    // Location
    LocationRow: {
      extends: 'Flex',
      flexAlign: 'center start',
      gap: 'Y',
      Icon: {
        tag: 'span',
        html: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M7.5 0a5.5 5.5 0 00-5.5 5.5c0 1.43.536 2.792 1.408 4.044.879 1.262 2.063 2.418 3.24 3.444a1.5 1.5 0 001.704 0c1.177-1.026 2.361-2.182 3.24-3.444C12.464 8.292 13 6.93 13 5.5A5.5 5.5 0 007.5 0zM3 5.5A4.5 4.5 0 0112 5.5c0 1.18-.464 2.342-1.242 3.458-.786 1.128-1.87 2.187-2.996 3.169a.5.5 0 01-.524 0c-1.126-.982-2.21-2.04-2.996-3.169C3.464 7.842 3 6.68 3 5.5zm4.5 1a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>',
        color: 'caption',
        display: 'flex',
        alignItems: 'center',
        minWidth: 'A',
      },
      Label: { text: 'Location', color: 'caption', minWidth: 'D' },
      Value: {
        text: (_, s) => s.node_location || 'n/a',
        isNan: (_, s) => !s.node_location,
        '.isNan': { fontWeight: '300', color: 'caption' },
      },
    },

    // Tags
    TagsRow: {
      extends: 'Flex',
      flexAlign: 'center start',
      gap: 'Y',
      Icon: {
        tag: 'span',
        html: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M.5 7.5a7 7 0 1114 0 7 7 0 01-14 0zm7-6a6 6 0 100 12 6 6 0 000-12zm0 9.5a.75.75 0 100-1.5.75.75 0 000 1.5zm.5-6.25a.5.5 0 00-1 0v3.5a.5.5 0 001 0v-3.5z" clip-rule="evenodd"></path></svg>',
        color: 'caption',
        display: 'flex',
        alignItems: 'center',
        minWidth: 'A',
      },
      Label: { text: 'Tags', color: 'caption', minWidth: 'D' },
      Value: {
        extends: 'Flex',
        flexAlign: 'center start',
        gap: 'Y',
        flexWrap: 'wrap',
        children: (_, s) => {
          const tags = s.node_tags || []
          if (!tags.length) return [{ text: 'n/a' }]
          return tags.map(tag => ({ tag }))
        },
        childProps: (el, s) => ({
          padding: 'X Y',
          round: 'Y',
          border: '1px, solid, gray .5',
          fontSize: 'Y1',
          text: s.tag || s.text,
          isNan: !s.tag,
          '.isNan': { fontWeight: '300', color: 'caption', border: 'none', padding: '0' },
        }),
      },
    },

    // Hardware section
    HardwareHeader: {
      extends: 'Flex',
      flexAlign: 'center start',
      gap: 'Y',
      margin: 'Y 0 0 0',
      cursor: 'pointer',
      onClick: (ev, el, s) => {
        s.update({ hardwareCollapsed: !s.hardwareCollapsed })
      },
      Text: {
        fontSize: 'Z1',
        fontWeight: '600',
        text: 'Hardware',
      },
      Arrow: {
        color: 'caption',
        fontSize: 'Y',
        text: (_, s) => s.hardwareCollapsed ? '▸' : '▾',
      },
    },

    HardwareContent: {
      hide: (_, s) => s.hardwareCollapsed,
      flow: 'y',
      gap: 'Z',
      padding: '0 0 0 0',

      // CPU
      CPURow: {
        extends: 'Flex',
        flexAlign: 'center start',
        gap: 'Y',
        Icon: {
          tag: 'span',
          html: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M1.5 2a.5.5 0 100-1 .5.5 0 000 1zm3 0a.5.5 0 100-1 .5.5 0 000 1zM8 1.5a.5.5 0 11-1 0 .5.5 0 011 0zm2.5.5a.5.5 0 100-1 .5.5 0 000 1zm3.5-.5a.5.5 0 11-1 0 .5.5 0 011 0zM1.5 14a.5.5 0 100-1 .5.5 0 000 1zm.5-3.5a.5.5 0 11-1 0 .5.5 0 011 0zM1.5 8a.5.5 0 100-1 .5.5 0 000 1zM2 4.5a.5.5 0 11-1 0 .5.5 0 011 0zM13.5 11a.5.5 0 100-1 .5.5 0 000 1zm.5-3.5a.5.5 0 11-1 0 .5.5 0 011 0zM13.5 5a.5.5 0 100-1 .5.5 0 000 1zM5 13.5a.5.5 0 11-1 0 .5.5 0 011 0zm2.5.5a.5.5 0 100-1 .5.5 0 000 1zm3.5-.5a.5.5 0 11-1 0 .5.5 0 011 0zm2.5.5a.5.5 0 100-1 .5.5 0 000 1zM4 5a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm1 0h5v5H5V5z" clip-rule="evenodd"></path></svg>',
          color: 'caption',
          display: 'flex',
          alignItems: 'center',
          minWidth: 'A',
        },
        Label: { text: 'CPU', color: 'caption', minWidth: 'D' },
        Value: {
          text: (_, s) => s.node_cpu || 'n/a',
          isNan: (_, s) => !s.node_cpu,
          '.isNan': { fontWeight: '300', color: 'caption' },
        },
      },

      // RAM
      RAMRow: {
        extends: 'Flex',
        flexAlign: 'center start',
        gap: 'Y',
        Icon: {
          tag: 'span',
          html: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M0 3.5A1.5 1.5 0 011.5 2h12A1.5 1.5 0 0115 3.5v6a1.5 1.5 0 01-1.5 1.5H14v1.5a.5.5 0 01-1 0V11H2v1.5a.5.5 0 01-1 0V11h-.5A1.5 1.5 0 010 9.5v-6zM1.5 3a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h12a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-12zM3 5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-2zm4-.5a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5H7zm2.5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-2z" clip-rule="evenodd"></path></svg>',
          color: 'caption',
          display: 'flex',
          alignItems: 'center',
          minWidth: 'A',
        },
        Label: { text: 'RAM', color: 'caption', minWidth: 'D' },
        Value: {
          text: (_, s) => s.node_ram || 'n/a',
          isNan: (_, s) => !s.node_ram,
          '.isNan': { fontWeight: '300', color: 'caption' },
        },
      },

      // Disk
      DiskRow: {
        extends: 'Flex',
        flexAlign: 'center start',
        gap: 'Y',
        Icon: {
          tag: 'span',
          html: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M3.5 2A1.5 1.5 0 002 3.5v8A1.5 1.5 0 003.5 13h8a1.5 1.5 0 001.5-1.5v-8A1.5 1.5 0 0011.5 2h-8zM3 3.5a.5.5 0 01.5-.5h8a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-8a.5.5 0 01-.5-.5v-8zM7.5 6a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM5 7.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z" clip-rule="evenodd"></path></svg>',
          color: 'caption',
          display: 'flex',
          alignItems: 'center',
          minWidth: 'A',
        },
        Label: { text: 'Disk', color: 'caption', minWidth: 'D' },
        Value: {
          text: (_, s) => s.node_disk || 'n/a',
          isNan: (_, s) => !s.node_disk,
          '.isNan': { fontWeight: '300', color: 'caption' },
        },
      },

      // NICs
      NICsRow: {
        extends: 'Flex',
        flexAlign: 'center start',
        gap: 'Y',
        Icon: {
          tag: 'span',
          html: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M2 5h11a1 1 0 011 1v3a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1zM0 6a2 2 0 012-2h11a2 2 0 012 2v3a2 2 0 01-2 2H2a2 2 0 01-2-2V6zm4.5.75a.75.75 0 100 1.5.75.75 0 000-1.5zm2.25.75a.75.75 0 111.5 0 .75.75 0 01-1.5 0zm3.75-.75a.75.75 0 100 1.5.75.75 0 000-1.5z" clip-rule="evenodd"></path></svg>',
          color: 'caption',
          display: 'flex',
          alignItems: 'center',
          minWidth: 'A',
        },
        Label: { text: 'NICs', color: 'caption', minWidth: 'D' },
        Value: {
          text: (_, s) => s.node_nics || 'n/a',
          isNan: (_, s) => !s.node_nics,
          '.isNan': { fontWeight: '300', color: 'caption' },
        },
      },

      // GPU
      GPURow: {
        extends: 'Flex',
        flexAlign: 'center start',
        gap: 'Y',
        Icon: {
          tag: 'span',
          html: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.55598 1.2593C9.656 1.35932 9.79166 1.41551 9.93311 1.41551C10.0746 1.41551 10.2102 1.35932 10.3102 1.2593C10.4102 1.15928 10.4664 1.02363 10.4664 0.882177C10.4664 0.740728 10.4102 0.605073 10.3102 0.505053C10.2102 0.405034 10.0746 0.348844 9.93311 0.348844C9.79166 0.348844 9.656 0.405034 9.55598 0.505053C9.45596 0.605073 9.39977 0.740728 9.39977 0.882177C9.39977 1.02363 9.45596 1.15928 9.55598 1.2593ZM11.8187 3.52204C11.9187 3.62206 12.0544 3.67825 12.1958 3.67825C12.3373 3.67825 12.473 3.62206 12.573 3.52204C12.673 3.42202 12.7292 3.28637 12.7292 3.14492C12.7292 3.00347 12.673 2.86781 12.573 2.7678C12.473 2.66778 12.3373 2.61159 12.1958 2.61159C12.0544 2.61159 11.9187 2.66778 11.8187 2.7678C11.7187 2.86781 11.6625 3.00347 11.6625 3.14492C11.6625 3.28637 11.7187 3.42202 11.8187 3.52204ZM14.8357 5.78478C14.7357 5.8848 14.6 5.94099 14.4586 5.94099C14.3171 5.94099 14.1815 5.8848 14.0815 5.78478C13.9814 5.68476 13.9253 5.54911 13.9253 5.40766C13.9253 5.26621 13.9814 5.13056 14.0815 5.03054C14.1815 4.93052 14.3171 4.87433 14.4586 4.87433C14.6 4.87433 14.7357 4.93052 14.8357 5.03054C14.9357 5.13056 14.9919 5.26621 14.9919 5.40766C14.9919 5.54911 14.9357 5.68476 14.8357 5.78478ZM16.3442 8.04753C16.4442 8.14755 16.5799 8.20374 16.7213 8.20374C16.8628 8.20374 16.9984 8.14755 17.0985 8.04753C17.1985 7.94751 17.2547 7.81185 17.2547 7.6704C17.2547 7.52895 17.1985 7.3933 17.0985 7.29328C16.9984 7.19326 16.8628 7.13707 16.7213 7.13707C16.5799 7.13707 16.4442 7.19326 16.3442 7.29328C16.2442 7.3933 16.188 7.52895 16.188 7.6704C16.188 7.81185 16.2442 7.94751 16.3442 8.04753ZM19.3612 10.3103C19.2612 10.4103 19.1255 10.4665 18.9841 10.4665C18.8426 10.4665 18.707 10.4103 18.6069 10.3103C18.5069 10.2102 18.4507 10.0746 18.4507 9.93314C18.4507 9.79169 18.5069 9.65604 18.6069 9.55602C18.707 9.456 18.8426 9.39981 18.9841 9.39981C19.1255 9.39981 19.2612 9.456 19.3612 9.55602C19.4612 9.65604 19.5174 9.7917 19.5174 9.93314C19.5174 10.0746 19.4612 10.2102 19.3612 10.3103ZM0.505015 10.3103C0.605034 10.4103 0.740689 10.4665 0.882138 10.4665C1.02359 10.4665 1.15924 10.4103 1.25926 10.3103C1.35928 10.2102 1.41547 10.0746 1.41547 9.93314C1.41547 9.79169 1.35928 9.65604 1.25926 9.55602C1.15924 9.456 1.02359 9.39981 0.882139 9.39981C0.74069 9.39981 0.605034 9.456 0.505015 9.55602C0.404995 9.65604 0.348805 9.7917 0.348805 9.93314C0.348805 10.0746 0.404995 10.2102 0.505015 10.3103ZM3.522 8.04753C3.42198 8.14755 3.28633 8.20374 3.14488 8.20374C3.00343 8.20374 2.86778 8.14755 2.76776 8.04753C2.66774 7.94751 2.61155 7.81185 2.61155 7.6704C2.61155 7.52895 2.66774 7.3933 2.76776 7.29328C2.86778 7.19326 3.00343 7.13707 3.14488 7.13707C3.28633 7.13707 3.42198 7.19326 3.522 7.29328C3.62202 7.3933 3.67821 7.52895 3.67821 7.6704C3.67821 7.81185 3.62202 7.94751 3.522 8.04753ZM5.0305 5.78478C5.13052 5.8848 5.26617 5.94099 5.40762 5.94099C5.54907 5.94099 5.68473 5.8848 5.78475 5.78478C5.88476 5.68476 5.94096 5.54911 5.94096 5.40766C5.94096 5.26621 5.88476 5.13056 5.78475 5.03054C5.68473 4.93052 5.54907 4.87433 5.40762 4.87433C5.26617 4.87433 5.13052 4.93052 5.0305 5.03054C4.93048 5.13056 4.87429 5.26621 4.87429 5.40766C4.87429 5.54911 4.93048 5.68476 5.0305 5.78478ZM8.04749 3.52204C7.94747 3.62206 7.81181 3.67825 7.67036 3.67825C7.52891 3.67825 7.39326 3.62206 7.29324 3.52204C7.19322 3.42202 7.13703 3.28637 7.13703 3.14492C7.13703 3.00347 7.19322 2.86781 7.29324 2.7678C7.39326 2.66778 7.52891 2.61159 7.67036 2.61159C7.81181 2.61159 7.94747 2.66778 8.04749 2.7678C8.14751 2.86781 8.2037 3.00347 8.2037 3.14492C8.2037 3.28637 8.14751 3.42202 8.04749 3.52204ZM11.8187 17.0985C11.9187 17.1985 12.0544 17.2547 12.1958 17.2547C12.3373 17.2547 12.473 17.1985 12.573 17.0985C12.673 16.9985 12.7292 16.8628 12.7292 16.7214C12.7292 16.5799 12.673 16.4443 12.573 16.3442C12.473 16.2442 12.3373 16.188 12.1958 16.188C12.0544 16.188 11.9187 16.2442 11.8187 16.3442C11.7187 16.4443 11.6625 16.5799 11.6625 16.7214C11.6625 16.8628 11.7187 16.9985 11.8187 17.0985ZM14.8357 14.8358C14.7357 14.9358 14.6 14.992 14.4586 14.992C14.3171 14.992 14.1815 14.9358 14.0815 14.8358C13.9814 14.7357 13.9253 14.6001 13.9253 14.4586C13.9253 14.3172 13.9814 14.1815 14.0815 14.0815C14.1815 13.9815 14.3171 13.9253 14.4586 13.9253C14.6 13.9253 14.7357 13.9815 14.8357 14.0815C14.9357 14.1815 14.9919 14.3172 14.9919 14.4586C14.9919 14.6001 14.9357 14.7357 14.8357 14.8358ZM16.3442 12.573C16.4442 12.673 16.5799 12.7292 16.7213 12.7292C16.8628 12.7292 16.9984 12.673 17.0985 12.573C17.1985 12.473 17.2547 12.3373 17.2547 12.1959C17.2547 12.0544 17.1985 11.9188 17.0985 11.8188C16.9984 11.7187 16.8628 11.6626 16.7213 11.6626C16.5799 11.6626 16.4442 11.7187 16.3442 11.8188C16.2442 11.9188 16.188 12.0544 16.188 12.1959C16.188 12.3373 16.2442 12.473 16.3442 12.573ZM3.522 12.573C3.42198 12.673 3.28633 12.7292 3.14488 12.7292C3.00343 12.7292 2.86778 12.673 2.76776 12.573C2.66774 12.473 2.61155 12.3373 2.61155 12.1959C2.61155 12.0544 2.66774 11.9188 2.76776 11.8188C2.86778 11.7187 3.00343 11.6626 3.14488 11.6626C3.28633 11.6626 3.42198 11.7187 3.522 11.8188C3.62202 11.9188 3.67821 12.0544 3.67821 12.1959C3.67821 12.3373 3.62202 12.473 3.522 12.573ZM5.0305 14.8358C5.13052 14.9358 5.26617 14.992 5.40762 14.992C5.54907 14.992 5.68473 14.9358 5.78475 14.8358C5.88476 14.7357 5.94096 14.6001 5.94096 14.4586C5.94096 14.3172 5.88476 14.1815 5.78475 14.0815C5.68473 13.9815 5.54907 13.9253 5.40762 13.9253C5.26617 13.9253 5.13052 13.9815 5.0305 14.0815C4.93048 14.1815 4.87429 14.3172 4.87429 14.4586C4.87429 14.6001 4.93048 14.7357 5.0305 14.8358ZM8.04749 17.0985C7.94747 17.1985 7.81181 17.2547 7.67036 17.2547C7.52891 17.2547 7.39326 17.1985 7.29324 17.0985C7.19322 16.9985 7.13703 16.8628 7.13703 16.7214C7.13703 16.5799 7.19322 16.4443 7.29324 16.3442C7.39326 16.2442 7.52891 16.188 7.67036 16.188C7.81181 16.188 7.94747 16.2442 8.04749 16.3442C8.14751 16.4443 8.2037 16.5799 8.2037 16.7214C8.2037 16.8628 8.14751 16.9985 8.04749 17.0985ZM9.55598 19.3612C9.656 19.4613 9.79166 19.5174 9.93311 19.5174C10.0746 19.5174 10.2102 19.4613 10.3102 19.3612C10.4102 19.2612 10.4664 19.1256 10.4664 18.9841C10.4664 18.8427 10.4102 18.707 10.3102 18.607C10.2102 18.507 10.0746 18.4508 9.93311 18.4508C9.79166 18.4508 9.656 18.507 9.55598 18.607C9.45596 18.707 9.39977 18.8427 9.39977 18.9841C9.39977 19.1256 9.45596 19.2612 9.55598 19.3612ZM9.17886 5.40766C9.3789 5.20762 9.65021 5.09524 9.93311 5.09524C10.216 5.09524 10.4873 5.20762 10.6874 5.40766L14.4586 9.1789C14.6586 9.37894 14.771 9.65025 14.771 9.93314C14.771 10.216 14.6586 10.4874 14.4586 10.6874L10.6874 14.4586C10.4873 14.6587 10.216 14.771 9.93311 14.771C9.65021 14.771 9.3789 14.6587 9.17886 14.4586L5.40762 10.6874C5.20758 10.4874 5.0952 10.216 5.0952 9.93314C5.0952 9.65025 5.20758 9.37894 5.40762 9.1789L9.17886 5.40766ZM9.93311 6.16191L13.7043 9.93314L9.93311 13.7044L6.16187 9.93314L9.93311 6.16191Z" fill="currentColor"></path></svg>',
          color: 'caption',
          display: 'flex',
          alignItems: 'center',
          minWidth: 'A',
        },
        Label: { text: 'GPU', color: 'caption', minWidth: 'D' },
        Value: {
          text: (_, s) => s.node_gpu || '—',
          isNan: (_, s) => !s.node_gpu,
          '.isNan': { fontWeight: '300', color: 'caption' },
        },
      },
    },
  },

  // Logs Header with collapse toggle
  LogsHeader: {
    extends: 'Flex',
    flexAlign: 'center space-between',
    cursor: 'pointer',
    margin: 'A 0 0 0',
    onClick: (ev, el, s) => {
      s.update({ logsCollapsed: !s.logsCollapsed })
    },
    Title: {
      fontSize: 'Z2',
      fontWeight: 'bold',
      text: 'Logs',
    },
    Arrow: {
      color: 'caption',
      fontSize: 'Z',
      text: (_, s) => s.logsCollapsed ? '▸' : '▾',
    },
  },

  // Logs content
  LogsContent: {
    hide: (_, s) => s.logsCollapsed,
    flow: 'y',
    children: (el, s) => s.logs,
    childrenAs: 'state',
    padding: 'Z2',
    gap: 'B2',
    childProps: {
      flexFlow: 'y',
      gap: 'Y',
      width: '100%',
      position: 'relative',
      ':hover .buttons': {
        opacity: 1,
      },
      ':not(:last-child)': {
        border: '0 0 1px 0, dashed, gray',
      },
      Date: {
        fontWeight: '300',
        fontSize: 'Z1',
        color: 'caption',
        text: '{{ created_at }}',
        position: 'relative',
        Status: {
          round: 'C1',
          boxSize: 'Z',
          border: '1px, solid, caption',
          position: 'absolute',
          top: 'Y1',
          left: '-A2',
        },
      },
      Notes: {
        text: '{{ status_notes }}',
      },
      Title: {
        text: '{{ action_items }}',
      },
    },
  },
}
