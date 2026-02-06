const CHART_CONFIG = [
  { key: 'node_status', title: 'Node Status', type: 'doughnut' },
  { key: 'cloud_distribution', title: 'Cloud Distribution', type: 'doughnut' },
  { key: 'network_type', title: 'Network Type', type: 'bar' },
  { key: 'node_count_by_network_type', title: 'Node count by network type', type: 'bar', showCount: true },
  { key: 'node_roles', title: 'Node Roles', type: 'doughnut' },
]

export const MetaSectionCharts = {
  props: {
    flexFlow: 'y',
    borderWidth: '0 0 0 2px',
    borderStyle: 'solid',
    borderColor: '--theme-document-dark-background',
    minWidth: 'H',
    padding: 'A B A C',
    gap: 'B',
    '@tabletM': {
      hide: true,
    },
  },
  H6: {
    fontSize: 'A',
    text: 'Fleet Summary',
    fontWeight: 'bold',
  },
  Flex: {
    flow: 'y',
    gap: 'B',
    children: (el, s) => {
      const charts = s.chartData?.data?.charts
      if (!charts) return []
      return CHART_CONFIG.map(({ key, title, type, showCount }) => {
        const chartData = charts[key]?.pie
        return {
          title,
          chartKey: key,
          chartType: type || 'doughnut',
          chartData,
          showCount: showCount || false,
          hiddenItems: []
        }
      }).filter(item => item.chartData)
    },
    childrenAs: 'state',
    childProps: {
      flexFlow: 'y',
      gap: 'Z',
      H6: {
        fontWeight: '700',
        fontSize: 'Z',
        textTransform: 'uppercase',
        text: '{{ title }}',
      },
      Flex: {
        flow: (el, s) => s.chartType === 'bar' || s.chartType === 'stacked' ? 'y' : 'x',
        gap: 'A',
        flexAlign: 'start start',
        overflow: 'visible',
        Box_chart: {
          tag: (el, s) => s.chartType === 'stacked' ? 'div' : 'canvas',
          width: (el, s) => s.chartType === 'bar' ? '100%' : s.chartType === 'stacked' ? '100%' : '120px',
          height: (el, s) => s.chartType === 'bar' ? 'auto' : s.chartType === 'stacked' ? '24px' : '120px',
          minWidth: (el, s) => s.chartType === 'bar' ? '200px' : s.chartType === 'stacked' ? '200px' : '120px',
          minHeight: (el, s) => s.chartType === 'bar' ? '200px' : s.chartType === 'stacked' ? '24px' : '120px',
          maxWidth: (el, s) => s.chartType === 'bar' ? '100%' : s.chartType === 'stacked' ? '100%' : '120px',
          maxHeight: (el, s) => s.chartType === 'bar' ? 'none' : s.chartType === 'stacked' ? '24px' : '120px',
          flexShrink: 0,
          overflow: 'visible',
          onBeforeUpdate: () => false,
          attr: (el, s) => {
            const numItems = s.chartData?.labels?.length || 0
            if (s.chartType === 'bar') {
              return {
                width: 260,
                height: Math.max(200, numItems * 24),
              }
            }
            if (s.chartType === 'stacked') {
              return {
                width: 300,
                height: 32,
              }
            }
            return {
              width: 120,
              height: 120,
            }
          },
          onRender: async (el, s) => {
            const pieData = s.chartData
            if (!pieData) return

            const originalColors = [...pieData.datasets[0].backgroundColor]
            const originalData = [...pieData.datasets[0].data]

            // Handle stacked bar (CSS-based, no canvas)
            if (s.chartType === 'stacked') {
              const total = originalData.reduce((sum, val) => sum + val, 0)
              const container = el.node
              container.innerHTML = ''
              container.style.display = 'flex'
              container.style.gap = '2px'
              container.style.alignItems = 'stretch'

              // Create individual bars for each status proportional to count
              pieData.labels.forEach((label, i) => {
                const value = originalData[i]
                if (value === 0) return

                const percentage = (value / total) * 100
                // Create bars proportional to the value
                for (let j = 0; j < value; j++) {
                  const bar = document.createElement('div')
                  bar.style.width = '4px'
                  bar.style.height = '100%'
                  bar.style.backgroundColor = originalColors[i]
                  bar.style.borderRadius = '2px'
                  bar.style.cursor = 'pointer'
                  bar.title = `${label}: ${value} (${Math.round(percentage)}%)`
                  container.appendChild(bar)
                }
              })

              return // No chart to destroy
            }

            // For canvas-based charts
            const ChartModule = await import('chart.js')
            const {
              Chart,
              ArcElement,
              DoughnutController,
              BarController,
              BarElement,
              CategoryScale,
              LinearScale,
              Tooltip,
              Legend
            } = ChartModule

            Chart.register(
              ArcElement,
              DoughnutController,
              BarController,
              BarElement,
              CategoryScale,
              LinearScale,
              Tooltip,
              Legend
            )

            const ctx = el.node.getContext('2d')
            const hasData = pieData.datasets?.[0]?.data?.some(v => v > 0)

            let chart

            if (s.chartType === 'bar') {
              // Helper to capitalize first letter
              const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

              // Sort data by value (descending)
              const sortedIndices = originalData
                .map((val, idx) => ({ val, idx }))
                .sort((a, b) => b.val - a.val)
                .map(item => item.idx)

              const sortedLabels = sortedIndices.map(i => capitalize(pieData.labels[i]))
              const sortedData = sortedIndices.map(i => originalData[i])
              const sortedColors = sortedIndices.map(i => originalColors[i])

              // Calculate total for percentages
              const total = sortedData.reduce((sum, val) => sum + val, 0)

              // Horizontal bar chart for networks_by_type
              chart = new Chart(ctx, {
                type: 'bar',
                data: {
                  labels: sortedLabels,
                  datasets: [{
                    data: hasData ? sortedData : [],
                    backgroundColor: sortedColors,
                    borderWidth: 0,
                    borderRadius: 4,
                    barThickness: 16,
                  }]
                },
                options: {
                  indexAxis: 'y',
                  responsive: false,
                  maintainAspectRatio: false,
                  layout: {
                    padding: {
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0
                    }
                  },
                  animation: {
                    duration: 600,
                    easing: 'easeOutQuart',
                    delay: (context) => context.dataIndex * 80
                  },
                  scales: {
                    x: {
                      display: false,
                      grid: {
                        display: false
                      },
                      grace: 0,
                      ticks: {
                        padding: 0
                      }
                    },
                    y: {
                      position: 'right',
                      grid: {
                        display: false
                      },
                      ticks: {
                        color: 'rgba(255, 255, 255, 0.7)',
                        font: {
                          size: 10
                        },
                        callback: function(_, index) {
                          const count = sortedData[index]
                          if (s.showCount) {
                            return `${sortedLabels[index]} (${count})`
                          }
                          const pct = total > 0 ? Math.round((count / total) * 100) : 0
                          return `${sortedLabels[index]} (${pct}%)`
                        }
                      }
                    }
                  },
                  plugins: {
                    legend: { display: false },
                    tooltip: {
                      enabled: hasData,
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      padding: 8,
                      callbacks: {
                        label: function(context) {
                          const value = context.raw
                          if (s.showCount) {
                            return `${value} nodes`
                          }
                          const pct = total > 0 ? Math.round((value / total) * 100) : 0
                          return `${value} (${pct}% of ${total} total)`
                        }
                      }
                    }
                  }
                }
              })
            } else {
              // Doughnut chart (default)
              chart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                  labels: [...pieData.labels],
                  datasets: [{
                    data: hasData ? [...originalData] : [1],
                    backgroundColor: hasData ? [...originalColors] : ['rgba(255,255,255,0.1)'],
                    borderWidth: 0,
                    hoverOffset: 8,
                    hoverBorderWidth: 2,
                    hoverBorderColor: '#fff',
                  }]
                },
                options: {
                  responsive: false,
                  maintainAspectRatio: true,
                  cutout: '55%',
                  layout: {
                    padding: 10
                  },
                  animation: {
                    duration: 600,
                    easing: 'easeOutQuart',
                    delay: (context) => context.dataIndex * 100
                  },
                  plugins: {
                    legend: { display: false },
                    tooltip: {
                      enabled: hasData,
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      padding: 8,
                    }
                  },
                  onClick: (event, elements) => {
                    if (elements.length > 0) {
                      const index = elements[0].index
                      const legendItems = el.parent?.lookup?.Grid_legend?.node?.children
                      if (legendItems?.[index]) {
                        legendItems[index].click()
                      }
                    }
                  },
                  onHover: (event, elements) => {
                    if (elements.length > 0) {
                      const index = elements[0].index
                      const colors = originalColors.map((c, idx) =>
                        idx === index ? c : c + '40'
                      )
                      chart.data.datasets[0].backgroundColor = colors
                    } else {
                      chart.data.datasets[0].backgroundColor = [...originalColors]
                    }
                    chart.update('none')
                  }
                }
              })
            }

            // Store chart instance and original data
            el.node.__chart = chart
            el.node.__originalColors = originalColors
            el.node.__originalData = originalData
            el.parent.node.__chart = chart
            el.parent.node.__originalColors = originalColors
            el.parent.node.__originalData = originalData

            return () => {
              chart.destroy()
            }
          },
        },
        Grid_legend: {
          hide: (el, s) => s.chartType === 'bar',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'Y',
          flex: 1,
          children: (el, s) => {
            const pieData = s.chartData
            if (!pieData) return []
            const data = pieData.datasets[0].data
            const total = data.reduce((sum, val) => sum + val, 0)
            return pieData.labels.map((label, i) => {
              const value = data[i]
              const percentage = total > 0 ? Math.round((value / total) * 100) : 0
              return {
                caption: label,
                value: value,
                percentage: percentage,
                color: pieData.datasets[0].backgroundColor[i],
                index: i,
                hidden: false,
                showCount: s.showCount
              }
            })
          },
          childrenAs: 'state',
          childProps: (el, s, i) => ({
            tag: 'button',
            flow: 'x',
            gap: 'Y',
            flexAlign: 'center start',
            cursor: 'pointer',
            padding: 'Y Z',
            round: 'Y',
            border: 'none',
            background: 'transparent',
            transition: 'all 0.15s ease',
            opacity: s.hidden ? 0.4 : 1,
            ':hover': {
              background: 'rgba(255,255,255,0.1)',
            },
            onClick: (ev, el, s) => {
              // Click = toggle hide/show segment
              const chartBox = el.parent?.parent?.lookup('Box_chart')
              const chart = chartBox?.node?.__chart
              const originalColors = chartBox?.node?.__originalColors
              if (chart) {
                const meta = chart.getDatasetMeta(0)
                const isCurrentlyHidden = meta.data[s.index]?.hidden || false

                // Toggle hidden state
                if (meta.data[s.index]) {
                  meta.data[s.index].hidden = !isCurrentlyHidden
                }

                // Restore colors when toggling visibility
                if (originalColors) {
                  chart.data.datasets[0].backgroundColor = [...originalColors]
                }

                s.update({ hidden: !isCurrentlyHidden })
                chart.update()
              }
            },
            onRender: (el, s) => {
              // Attach native mouse events for hover highlighting
              const node = el.node

              node.addEventListener('mouseenter', () => {
                if (s.hidden) return
                const chartBox = el.parent?.parent?.lookup('Box_chart')
                const chart = chartBox?.node?.__chart
                const originalColors = chartBox?.node?.__originalColors
                if (chart && originalColors) {
                  const colors = originalColors.map((c, idx) => {
                    const meta = chart.getDatasetMeta(0)
                    if (meta.data[idx]?.hidden) return c
                    return idx === s.index ? c : c + '4D'
                  })
                  chart.data.datasets[0].backgroundColor = colors
                  chart.update()
                }
              })

              node.addEventListener('mouseleave', () => {
                const chartBox = el.parent?.parent?.lookup('Box_chart')
                const chart = chartBox?.node?.__chart
                const originalColors = chartBox?.node?.__originalColors
                if (chart && originalColors) {
                  chart.data.datasets[0].backgroundColor = [...originalColors]
                  chart.update()
                }
              })
            },
            Span_dot: {
              width: 'Y',
              height: 'Y',
              minWidth: 'Y',
              round: 'C',
              background: s.color,
              transition: 'opacity 0.15s ease',
            },
            Span_caption: {
              fontSize: 'Z1',
              color: 'caption',
              text: s.caption,
            },
            Span_value: {
              fontSize: 'Z1',
              fontWeight: '600',
              color: 'white',
              text: s.showCount ? s.value : `${s.percentage}%`,
            },
          }),
        },
      },
    },
  },
}
