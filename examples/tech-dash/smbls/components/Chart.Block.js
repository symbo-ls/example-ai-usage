const Chartblock = {
  data: {},
  props: {
    position: 'relative',
  },
  Number: {
    text: '5,104,599',
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
        const Chart = window.Chart;
        const ctx = el.node.getContext('2d');
        const canvas = el.node;

        const maxPoints = 100;
        let currentHeight = 5104596;

        // Create initial data with a slight upward trend
        const data = {
          labels: Array(maxPoints).fill(''),
          datasets: [{
            label: 'Chain height',
            data: Array.from({
                length: maxPoints
              }, (_, i) =>
              currentHeight - (maxPoints - i) * 10
            ),
            borderColor: 'rgb(86, 154, 67)',
            backgroundColor: 'transparent',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            pointRadius: 0,
          }]
        };

        // Chart configuration
        const config = {
          type: 'line',
          data: data,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            scales: {
              x: {
                display: false,
                grid: {
                  display: false
                }
              },
              y: {
                display: false,
                grid: {
                  display: false
                }
              }
            },
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                enabled: false
              }
            },
            elements: {
              line: {
                borderCapStyle: 'round',
                borderJoinStyle: 'round'
              }
            }
          }
        };

        // Create the chart
        const chart = new Chart(ctx, config);

        // Update function
        const updateChart = () => {
          // Simulate block height increase
          currentHeight += Math.floor(Math.random() * 3) + 1;

          // Update the data
          const newData = [...chart.data.datasets[0].data];
          newData.shift();
          newData.push(currentHeight);
          chart.data.datasets[0].data = newData;

          // Update the chart
          chart.update('none');

          // Update the overlay
          const Number = el.parent.Number
          Number.setProps({
            text: currentHeight.toLocaleString()
          })
        };

        // Start updating every second
        const interval = setInterval(updateChart, 3000);

        // Clean up
        const cleanup = () => {
          clearInterval(interval);
          chart.destroy();
        };

        // Handle unmount
        canvas.addEventListener('unmount', cleanup);

        // Also clean up if the canvas is removed from DOM
        const observer = new MutationObserver((mutations) => {
          if (!document.contains(canvas)) {
            cleanup();
            observer.disconnect();
          }
        });

        observer.observe(document.body, {
          childList: true,
          subtree: true
        });
      },
  },
};

export { Chartblock as 'Chart.Block' }