export const ProjectCodeSidebar = {
  extends: 'DocsSidebar',
  childExtends: {
    state: {
      show: true,
    },
  },
  position: 'relative',
  top: '0',
  gap: 'B2',
  childProps: {
    NumbCaption: {
      position: 'sticky',
      top: '0',
      theme: 'common-box',
      padding: 'W -',
      href: null,
      Numb: null,
      CaptionTitle: {
        ':hover': {
          textDecoration: 'underline',
        },
        Text: {
          text: '{{ title }}',
        },
        onClick: (ev, el, s) => {
          ev.preventDefault()
          ev.stopPropagation()
          el.lookup('Overflow').state.update({
            type: s.key,
            key: null
          }, {
            forceMonacoUpdate: true
          })
        },
      },
      Text: null,
      SquareButton: {
        extends: [
          'CanvasButton',
          'SquareButton',
        ],
        margin: '-Y1 -',
        padding: 'X',
        round: 'X',
        icon: (el, s) => s.show ? 'arrow angle up' : 'arrow angle down',
        hide: (el, s) => !s.sub_links?.length,
        onClick: (ev, el, s) => {
          ev.preventDefault()
          ev.stopPropagation()
          s.toggle('show')
        },
      },
    },
    NavLinks: {
      margin: 'Z - -',
      padding: '- - - Z2',
      borderWidth: '0 0 0 1px',
      borderStyle: 'solid',
      borderColor: 'line',
      hide: (el, s) => !s.show || !s.sub_links?.length,
      childProps: {
        NumbCaption: {
          Numb: null,
          href: null,
          isActive: (el, s) => s.key === el.lookup((el, s) => s.selectedKey)?.state.selectedKey,
          onClick: (ev, el, s) => {
            ev.preventDefault()
            ev.stopPropagation()
            el.lookup('Overflow').state.update({
              type: s.parent.key,
              key: s.key
            }, {
              forceMonacoUpdate: true
            })
          },
        },
      },
    },
  },
  children: el => {
    const arrayize = (obj = {}) => Object.keys(obj).map(key => ({
      title: key,
      key
    }))
    const rootData = [{
      title: '~',
      sub_links: [{
        title: 'index.html',
        key: 'index.html',
      }, {
        title: 'app.js',
        key: 'app.js',
      }, {
        title: 'package.json',
        key: 'package.json',
      }, {
        title: 'sitemap.xml',
        key: 'sitemap.xml',
      }]
    }, {
      title: 'Components',
      key: 'components',
      sub_links: arrayize(el.getData('components')).slice(0, 10)
    }, {
      title: 'Pages',
      key: 'pages',
      sub_links: arrayize(el.getData('pages')).slice(0, 10)
    }, {
      title: 'State',
      key: 'state',
      sub_links: arrayize(el.getData('state')).slice(0, 10)
    }, {
      title: 'Functions',
      key: 'functions',
      sub_links: arrayize(el.getData('functions')).slice(0, 10)
    }, {
      title: 'Methods',
      key: 'methods',
      sub_links: arrayize(el.getData('methods'))
    }, {
      title: 'Snippets',
      key: 'snippets',
      sub_links: arrayize(el.getData('snippers'))
    }, {
      title: 'Files',
      key: 'files',
      sub_links: arrayize(el.getData('files'))
    }, {
      title: 'Design System',
      key: 'designSystem',
      sub_links: arrayize(el.getData('designSystem'))
    }, {
      title: 'Dependencies',
      key: 'dependencies',
    }, {
      title: 'Integrations',
      key: 'integrations',
    }, {
      title: 'Canvas',
      key: 'canvas'
    }, {
      title: 'Settings',
      key: 'settings'
    }, {
      title: 'Secrets',
      key: 'secrets'
    }]
    return rootData
  },
};