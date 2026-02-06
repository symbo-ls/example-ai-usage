export const UpChart = {
  if: (_, s) => s.metricsData?.charts?.up,
  extend: 'Flex',
  props: {
    flow: 'y',
    gap: 'Z',
  },

  Title: {
    fontSize: 'Z',
    textTransform: 'uppercase',
    color: 'caption',
    text: 'Uptime',
    order: '-1',
  },

  Grid: {
    extend: 'Flex',
    maxWidth: '100%',
    gap: 'X',
    flow: 'row wrap',
    height: '2.8em',
    overflow: 'hidden',
    ':hover > div': {
      opacity: 0.5,
    },
    children: (el, s) => {
      const data = s.metricsData?.charts?.up?.datasets?.[0]?.data || []
      const labels = s.metricsData?.charts?.up?.labels || []
      // Pad to at least 300 items for consistent display
      const padded = [...data]
      while (padded.length < 300) {
        padded.push(null)
      }
      return padded.map((val, i) => ({
        value: val,
        label: labels[i] || '',
      }))
    },
    childrenAs: 'state',
    childProps: (el, s) => ({
      minWidth: 'Z1',
      boxSize: 'Z1',
      background: s.value === null ? 'gray .2' : s.value ? 'green .3' : 'red .3',
      border: s.value === null ? '1px, solid, gray .3' : s.value ? '1px, solid, green' : '1px, solid, red',
      round: 'W',
      cursor: 'pointer',
      transition: 'A defaultBezier opacity',
      title: s.label ? `${s.label}: ${s.value ? 'Up' : 'Down'}` : '',
      style: {
        '&:hover': {
          opacity: '1 !important',
        },
      },
    }),
  },

  LatestValue: {
    fontSize: 'Z',
    color: 'white',
    text: (_, s) => {
      const data = s.metricsData?.charts?.up?.datasets?.[0]?.data
      if (!data?.length) return 'No data'
      const upCount = data.filter(v => v === 1 || v === true).length
      const percentage = ((upCount / data.length) * 100).toFixed(1)
      return `${percentage}% uptime (${upCount}/${data.length})`
    },
  },
}
