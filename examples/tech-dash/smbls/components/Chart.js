export const Chart = {
  props: {
    onRender: async (el, s) => {
      const Chart = window.Chart;
      const ctx = el.node.getContext('2d');

      const maxPoints = 50;
      const dataPoints = Array(maxPoints).fill(0);

      const labels = Array.from({
        length: maxPoints
      }, (_, i) => i.toString());

      // Initialize with some starting data
      for (let i = 0; i < dataPoints.length; i++) {
        dataPoints[i] = 30 + Math.sin(i * 0.2) * 20;
      }

      const data = {
        labels: labels,
        datasets: [{
          label: 'CPU',
          data: dataPoints.map((value, index) => ({
            x: index,
            y: value
          })),
          borderColor: 'rgb(86, 154, 67)',
          fill: false,
          tension: 0.4,
          pointRadius: 0,
          borderWidth: 2,
          cubicInterpolationMode: 'monotone'
        }]
      };

      const options = {
        responsive: true,
        animation: false,
        interaction: {
          intersect: false,
          mode: 'index'
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        },
        scales: {
          x: {
            display: false,
            type: 'linear',
            min: 0,
            max: maxPoints - 1
          },
          y: {
            display: false,
            min: 0,
            max: 100
          }
        },
        elements: {
          line: {
            borderJoinStyle: 'round'
          }
        },
        maintainAspectRatio: false
      };

      const chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
      });

      // Color functions
      function getColor(value) {
        if (value < 60) return 'rgb(86, 154, 67)';
        if (value < 80) return 'rgb(245, 158, 11)';
        return 'rgb(220, 38, 38)';
      }

      function interpolateColor(color1, color2, factor) {
        const c1 = color1.match(/\d+/g).map(Number);
        const c2 = color2.match(/\d+/g).map(Number);
        const r = Math.round(c1[0] + (c2[0] - c1[0]) * factor);
        const g = Math.round(c1[1] + (c2[1] - c1[1]) * factor);
        const b = Math.round(c1[2] + (c2[2] - c1[2]) * factor);
        return `rgb(${r}, ${g}, ${b})`;
      }

      let animationFrame = null;
      let isAnimating = false;

      function updateCPUChart(newValue) {
        if (isAnimating) return;

        isAnimating = true;
        const dataset = chart.data.datasets[0];
        const originalData = [...dataset.data];
        const lastPoint = originalData[originalData.length - 1];
        const startTime = performance.now();
        const duration = 1000;

        // Get colors for transition
        const startColor = dataset.borderColor;
        const endColor = getColor(newValue);

        function animate(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeProgress = easeInOutCubic(progress);

          // Create new animated data
          const animatedData = [];

          // Animate all existing points shifting left (keep their y values)
          for (let i = 0; i < originalData.length; i++) {
            animatedData.push({
              x: originalData[i].x - easeProgress,
              y: originalData[i].y // Keep original y value unchanged
            });
          }

          // Add new point entering from the right, transitioning from lastPoint.y to newValue
          animatedData.push({
            x: maxPoints - 1 + (1 - easeProgress),
            y: lastPoint.y + (newValue - lastPoint.y) * easeProgress
          });

          dataset.data = animatedData;

          // Animate color if crossing threshold
          if (getColor(lastPoint.y) !== getColor(newValue)) {
            dataset.borderColor = interpolateColor(startColor, endColor, easeProgress);
          }

          chart.update('none');

          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
          } else {
            // Final state: shift all data and add new point
            dataset.data = [
              ...originalData.slice(1).map((point, i) => ({
                x: i,
                y: point.y
              })),
              {
                x: maxPoints - 1,
                y: newValue
              }
            ];
            dataset.borderColor = endColor;
            chart.update('none');
            isAnimating = false;
          }
        }

        animationFrame = requestAnimationFrame(animate);
      }

      function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      }

      // Simulate CPU data updates
      const interval = setInterval(() => {
        const fakeCPU = Math.floor(Math.random() * 100);
        updateCPUChart(fakeCPU);
      }, 1100);

      // Cleanup function
      return () => {
        clearInterval(interval);
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
        chart.destroy();
      };
    },
    tag: 'canvas',
    minWidth: 'G',
    minHeight: 'D',
  },
  data: {},
};