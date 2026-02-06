// Helper to extract values from Prometheus-style metric response
const extractMetricValues = (metric) => {
  if (!metric?.data?.result?.[0]?.values) return []
  return metric.data.result[0].values.map(([timestamp, value]) => ({
    timestamp,
    value: parseFloat(value)
  }))
}

export const MetricChart = {
  props: {
    tag: 'canvas',
    minWidth: 'F',
    minHeight: 'D',
  },

  // Line chart variant for metrics like latest_block
  LineChart: {
    props: {
      tag: 'canvas',
      minWidth: 'F',
      minHeight: 'D',
      onRender: async (el, s) => {
        const ChartModule = await import('chart.js')
        const { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip } = ChartModule
        Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip)

        const ctx = el.node.getContext('2d')
        const metricKey = el.props.metricKey || 'latest_block'

        const getChartData = () => {
          const metric = s.metricsData?.metrics?.[metricKey]
          const values = extractMetricValues(metric)
          return values.map(v => v.value)
        }

        const initialData = getChartData()
        const labels = initialData.map((_, i) => i.toString())

        const chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels,
            datasets: [{
              data: initialData,
              borderColor: '#569a43',
              backgroundColor: 'rgba(86, 154, 67, 0.1)',
              fill: true,
              tension: 0.4,
              pointRadius: 0,
              borderWidth: 2,
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            interaction: { intersect: false, mode: 'index' },
            plugins: {
              legend: { display: false },
              tooltip: {
                enabled: true,
                callbacks: {
                  label: (context) => {
                    const value = context.parsed.y
                    return value.toLocaleString()
                  }
                }
              }
            },
            scales: {
              x: { display: false },
              y: { display: false }
            },
          }
        })

        // Watch for metric updates
        let lastDataLength = initialData.length
        const checkMetrics = () => {
          const newData = getChartData()
          if (newData.length !== lastDataLength || JSON.stringify(newData) !== JSON.stringify(chart.data.datasets[0].data)) {
            chart.data.labels = newData.map((_, i) => i.toString())
            chart.data.datasets[0].data = newData
            chart.update('none')
            lastDataLength = newData.length
          }
        }

        const interval = setInterval(checkMetrics, 1000)

        return () => {
          clearInterval(interval)
          chart.destroy()
        }
      },
    },
  },

  // Stepped line chart for metrics like blocks_to_sync
  SteppedChart: {
    props: {
      tag: 'canvas',
      minWidth: 'F',
      minHeight: 'D',
      onRender: async (el, s) => {
        const ChartModule = await import('chart.js')
        const { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip } = ChartModule
        Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip)

        const ctx = el.node.getContext('2d')
        const metricKey = el.props.metricKey || 'blocks_to_sync'

        const getChartData = () => {
          const metric = s.metricsData?.metrics?.[metricKey]
          const values = extractMetricValues(metric)
          return values.map(v => v.value)
        }

        const initialData = getChartData()
        const labels = initialData.map((_, i) => i.toString())

        const chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels,
            datasets: [{
              data: initialData,
              borderColor: '#f59e0b',
              backgroundColor: 'rgba(245, 158, 11, 0.1)',
              fill: true,
              stepped: 'before', // Stepped line
              pointRadius: 0,
              borderWidth: 2,
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            interaction: { intersect: false, mode: 'index' },
            plugins: {
              legend: { display: false },
              tooltip: {
                enabled: true,
                callbacks: {
                  label: (context) => {
                    const value = context.parsed.y
                    return `${value.toLocaleString()} blocks`
                  }
                }
              }
            },
            scales: {
              x: { display: false },
              y: { display: false }
            },
          }
        })

        // Watch for metric updates
        let lastDataLength = initialData.length
        const checkMetrics = () => {
          const newData = getChartData()
          if (newData.length !== lastDataLength || JSON.stringify(newData) !== JSON.stringify(chart.data.datasets[0].data)) {
            chart.data.labels = newData.map((_, i) => i.toString())
            chart.data.datasets[0].data = newData
            chart.update('none')
            lastDataLength = newData.length
          }
        }

        const interval = setInterval(checkMetrics, 1000)

        return () => {
          clearInterval(interval)
          chart.destroy()
        }
      },
    },
  },

  // Gauge chart for peer_count
  Gauge: {
    props: {
      tag: 'canvas',
      width: '80px',
      height: '80px',
      onRender: async (el, s) => {
        const ChartModule = await import('chart.js')
        const { Chart, ArcElement, DoughnutController } = ChartModule
        Chart.register(ArcElement, DoughnutController)

        const ctx = el.node.getContext('2d')
        const metricKey = el.props.metricKey || 'peer_count'
        const maxValue = el.props.maxValue || 50

        const getValue = () => {
          const metric = s.metricsData?.metrics?.[metricKey]
          const values = extractMetricValues(metric)
          if (values.length === 0) return 0
          return values[values.length - 1].value
        }

        const currentValue = getValue()
        const percentage = Math.min((currentValue / maxValue) * 100, 100)

        const chart = new Chart(ctx, {
          type: 'doughnut',
          data: {
            datasets: [{
              data: [percentage, 100 - percentage],
              backgroundColor: ['#569a43', 'rgba(255,255,255,0.1)'],
              borderWidth: 0,
            }]
          },
          options: {
            responsive: false,
            maintainAspectRatio: true,
            cutout: '70%',
            rotation: -90,
            circumference: 180,
            animation: false,
            plugins: {
              legend: { display: false },
              tooltip: { enabled: false }
            },
          }
        })

        const checkMetrics = () => {
          const newValue = getValue()
          const newPercentage = Math.min((newValue / maxValue) * 100, 100)
          chart.data.datasets[0].data = [newPercentage, 100 - newPercentage]
          chart.update('none')
        }

        const interval = setInterval(checkMetrics, 1000)

        return () => {
          clearInterval(interval)
          chart.destroy()
        }
      },
    },
  },
}
