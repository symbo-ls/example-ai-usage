export const GridChooser = {
  extends: 'Group',
  width: '100%',
  Grid: {
    childProps: {
      isActive: (el, s) => {
        const key = parseInt(el.key)
        const {
          gridOptions
        } = s.settings
        const h = Math.floor(key / 12) + 1
        const w = key % 12 + 1
        return gridOptions?.w >= w && gridOptions?.h >= h
      },
      onClick: (ev, el, s) => {
        const key = parseInt(el.key)
        const h = Math.floor(key / 12) + 1
        const w = key % 12 + 1
        s.update({
          settings: {
            gridOptions: {
              w,
              h
            }
          }
        })
      },
      opacity: '0.35',
      theme: 'space',
      minHeight: 'B1',
      round: 'X1',
      '.isActive': {
        opacity: '.85',
      },
      '!isActive': {
        ':hover': {
          opacity: '.45',
        },
      },
    },
    margin: '- -X2',
    templateColumns: 'repeat(12, 1fr)',
    templateRows: 'repeat(3, 1fr)',
    gap: 'X2',
    round: 'Z2',
    overflow: 'hidden',
    children: () => new Array(60).fill({}),
  },
};