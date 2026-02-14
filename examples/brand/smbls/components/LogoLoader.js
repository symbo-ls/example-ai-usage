export const LogoLoader = {
  '& svg': {
    opacity: '.35',
    boxSize: '2.2em',
    transitionDuration: '1.5s, 1.5s, 1s, 1s',
    transitionDelay: '0s, 0s, 1.5s, 1.5s',
    transitionProperty: 'stroke-dashoffset, stroke-dasharray, fill, opacity',
    style: {
      fill: 'transparent',
      stroke: 'currentColor',
      strokeWidth: '.5px',
      strokeDasharray: 116,
      strokeDashoffset: 116,
    },
  },
  '& path': {},
  onBeforeUpdate: (ch, el, s, ctx, opts) => {
    // el.log(opts.updateByState, opts)
    if (opts.updateByState) {
      return false
    }
  },
  onRender: el => {
    window.setTimeout(() => {
      el.setProps({
        '& svg': {
          opacity: '1',
          style: {
            strokeDasharray: '116',
            strokeDashoffset: '0',
            fill: 'currentColor'
          }
        }
      })
    }, 500)
  },
};