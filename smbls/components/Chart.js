export const Chart = {
  props: {
    onRender: async (el, s) => {
      const ChartModule = await import('chart.js')
      const { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale } = ChartModule
      Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale)

      const ctx = el.node.getContext('2d')
      const metricKey = el.props.metricKey || 'cpu'

      const maxPoints = 50
      const dataPoints = Array(maxPoints).fill(0)

      // Initialize with metrics data if available
      const metricsData = s.metrics?.[metricKey] || []
      if (metricsData.length > 0) {
        const startIdx = Math.max(0, metricsData.length - maxPoints)
        for (let i = 0; i < maxPoints; i++) {
          const dataIdx = startIdx + i
          dataPoints[i] = dataIdx < metricsData.length ? metricsData[dataIdx] : 0
        }
      }

      const data = {
        labels: Array.from({ length: maxPoints }, (_, i) => i.toString()),
        datasets: [{
          label: metricKey.toUpperCase(),
          data: dataPoints.map((value, index) => ({ x: index, y: value })),
          borderColor: 'rgb(86, 154, 67)',
          fill: false,
          tension: 0.4,
          pointRadius: 0,
          borderWidth: 2,
          cubicInterpolationMode: 'monotone'
        }]
      }

      const options = {
        responsive: true,
        animation: false,
        interaction: { intersect: false, mode: 'index' },
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true }
        },
        scales: {
          x: { display: false, type: 'linear', min: 0, max: maxPoints - 1 },
          y: { display: false, min: 0, max: 100 }
        },
        elements: { line: { borderJoinStyle: 'round' } },
        maintainAspectRatio: false
      }

      const chart = new Chart(ctx, { type: 'line', data, options })

      function getColor(value) {
        if (value < 60) return 'rgb(86, 154, 67)'
        if (value < 80) return 'rgb(245, 158, 11)'
        return 'rgb(220, 38, 38)'
      }

      function updateChart(newValue) {
        const dataset = chart.data.datasets[0]
        const newData = dataset.data.slice(1).map((point, i) => ({ x: i, y: point.y }))
        newData.push({ x: maxPoints - 1, y: newValue })
        dataset.data = newData
        dataset.borderColor = getColor(newValue)
        chart.update('none')
      }

      // Watch for metrics updates from parent state
      const checkMetrics = () => {
        const latestMetrics = s.metrics?.[metricKey]
        if (latestMetrics && latestMetrics.length > 0) {
          const latestValue = latestMetrics[latestMetrics.length - 1]
          updateChart(latestValue)
        }
      }

      // Poll for metric updates
      const interval = setInterval(checkMetrics, 5000)

      return () => {
        clearInterval(interval)
        chart.destroy()
      }
    },
    tag: 'canvas',
    minWidth: 'G',
    minHeight: 'D',
  },
  data: {},
  Block: {
    data: {},
    Number: {
      text: (el, s) => {
        const blockHeight = s.metrics?.block_height
        return blockHeight ? blockHeight.toLocaleString() : 'n/a'
      },
      fontSize: 'D',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
      fontWeight: '500',
    },
    Box: {
      tag: 'canvas',
      minWidth: 'G',
      minHeight: 'D',
      onRender: async (el, s) => {
        const ChartModule = await import('chart.js')
        const { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale } = ChartModule
        Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale)

        const ctx = el.node.getContext('2d')
        const canvas = el.node

        const maxPoints = 100
        let currentHeight = s.metrics?.block_height || 0

        // Create initial data
        const data = {
          labels: Array(maxPoints).fill(''),
          datasets: [{
            label: 'Block height',
            data: Array.from({ length: maxPoints }, (_, i) =>
              currentHeight > 0 ? currentHeight - (maxPoints - i) * 10 : 0
            ),
            borderColor: 'rgb(86, 154, 67)',
            backgroundColor: 'transparent',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            pointRadius: 0,
          }]
        }

        const config = {
          type: 'line',
          data: data,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            scales: {
              x: { display: false, grid: { display: false } },
              y: { display: false, grid: { display: false } }
            },
            plugins: {
              legend: { display: false },
              tooltip: { enabled: true }
            },
            elements: {
              line: { borderCapStyle: 'round', borderJoinStyle: 'round' }
            }
          }
        }

        const chart = new Chart(ctx, config)

        // Watch for metrics updates
        const checkMetrics = () => {
          const newHeight = s.metrics?.block_height
          if (newHeight && newHeight !== currentHeight) {
            currentHeight = newHeight
            const newData = [...chart.data.datasets[0].data]
            newData.shift()
            newData.push(currentHeight)
            chart.data.datasets[0].data = newData
            chart.update('none')

            // Update the number display
            const Number = el.parent.Number
            if (Number) {
              Number.setProps({ text: currentHeight.toLocaleString() })
            }
          }
        }

        const interval = setInterval(checkMetrics, 5000)

        const cleanup = () => {
          clearInterval(interval)
          chart.destroy()
        }

        canvas.addEventListener('unmount', cleanup)

        const observer = new MutationObserver(() => {
          if (!document.contains(canvas)) {
            cleanup()
            observer.disconnect()
          }
        })

        observer.observe(document.body, { childList: true, subtree: true })

        return cleanup
      },
    },
    props: {
      position: 'relative',
    },
  },
};