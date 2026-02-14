export const ResponsiveSwitching = {
  extends: 'NavbarButtonSet',
  gap: 'A',
  childrenAs: 'state',
  children: () => [{
      key: 'screenL',
      icon: 'deviceBigScreen'
    },
    {
      key: 'screenM',
      icon: 'deviceSmallScreen'
    },
    {
      key: 'tabletL',
      icon: 'deviceTabletLandscape'
    },
    {
      key: 'tabletS',
      icon: 'deviceTabletPortrait'
    },
    {
      key: 'mobileXS',
      icon: 'deviceMobile'
    }, {
      key: 'canvas',
      icon: 'columns'
    },
    {
      key: 'custom',
      icon: 'layout'
    },
    {
      key: 'resizable',
      icon: 'dimensionsAlt'
    },
  ],
  childProps: (el, s) => {
    const isActive = el.getCanvasScope('previewSize') === s.key
    const isThreeDots = s.icon === 'threeDotsVertical' && 'threeDotsVertical'
    const isResize =
      s.icon === 'dimensionsAlt' &&
      (isActive ? s.icon + ' colored outline' : s.icon)

    return {
      isActive,
      isThreeDots,
      icon: isResize || isThreeDots || isActive ? s.icon : s.icon + ' outline',
      title: s.key,

      '.isThreeDots': {
        order: -15
      },

      onClick: (ev, el, s, ctx) => {
        const previewSize =
          s.key !== el.getCanvasScope('previewSize') ? s.key : 'unset'
        el.getCanvasScope().previewSize = previewSize
        el.parent.update()
        el.syncCanvas({
          previewSize
        })
      }
    }
  },
};