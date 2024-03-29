// Default options for Charts
export const DEFAULT_CHART_OPTIONS = {
  responsive: true,
  maintainAspectRatio: false, // Set false for responsiveness
  plugins: {
    legend: {
      position: "bottom",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawOnChartArea: false,
      },
    },
    y: {
      grid: {
        display: false,
        drawOnChartArea: false,
      },
    },
  },
  animation: {
    easing : "easeInOutQuad",
    delay : 200,
    duration : 800
  },
};
