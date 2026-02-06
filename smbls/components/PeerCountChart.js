export const PeerCountChart = {
  if: (_, s) => s.metricsData?.charts?.peer_count,
  extends: 'Flex',
  props: {
    flow: 'y',
    gap: 'Y',
    padding: 'Z',
    round: 'Y',
    background: 'black .2',
  },

  Title: {
    fontSize: 'Z',
    textTransform: 'uppercase',
    color: 'caption',
    text: 'Peer Count'
  },

  Canvas: {
    tag: 'canvas',
    width: '100%',
    height: '280px',
    attr: {
      width: 800,
      height: 280,
    },
    onBeforeUpdate: () => false,
    onRender: async (el, s) => {
      const chartData = s.metricsData?.charts?.peer_count
      if (!chartData) return

      const ChartModule = await import('chart.js')
      const { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler, Legend, Tooltip } = ChartModule

      Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler, Legend, Tooltip)

      const ctx = el.node.getContext('2d')

      if (el.node.__chart) {
        el.node.__chart.destroy()
      }

      const chart = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: {
          responsive: false,
          maintainAspectRatio: false,
          animation: false,
          plugins: {
            legend: {
              display: true,
              position: 'top',
              align: 'end',
              labels: {
                color: 'rgba(255,255,255,0.7)',
                font: { size: 10 },
                boxWidth: 12,
                padding: 8,
              }
            },
            tooltip: {
              enabled: true,
              backgroundColor: 'rgba(0,0,0,0.8)',
              padding: 8,
            }
          },
          scales: {
            x: {
              display: true,
              grid: { color: 'rgba(255,255,255,0.05)' },
              ticks: {
                color: 'rgba(255,255,255,0.5)',
                font: { size: 9 },
                maxRotation: 0,
                maxTicksLimit: 5,
              }
            },
            y: {
              display: true,
              grid: { color: 'rgba(255,255,255,0.1)' },
              ticks: { color: 'rgba(255,255,255,0.5)', font: { size: 10 } }
            }
          },
          elements: {
            point: { radius: 0 },
            line: { borderWidth: 2 }
          }
        }
      })

      el.node.__chart = chart

      return () => chart.destroy()
    },
  },

  LatestValue: {
    fontSize: 'Z',
    color: 'white',
    text: (_, s) => {
      const data = s.metricsData?.charts?.peer_count?.datasets?.[0]?.data
      if (!data?.length) return 'No data'
      return `Latest: ${data[data.length - 1].toLocaleString()}`
    },
  },
}
