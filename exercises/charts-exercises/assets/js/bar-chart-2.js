// bar-chart code

// 1. The canvas reference to display the chart.
const chartCanvas2 = document.getElementById('bar-chart-2').getContext('2d');

// 2. The chart configuration.
const config2 = {
  type: 'bar', // chart type
  data: {
    // The chart labels, the horizontal labels of the chart.
    labels: ['Ronan', 'Quentin', 'Anita', 'Julie', 'Matthieu'],

    // The chart datasets
    datasets: [
      {
        // The chart data, the horizontal labels of the chart.
        data: [33, 12, 15, 24, 69],
        // Chart label
        label: 'Asking random person a number between 1 and 100',
      },
    ],
  },
  // Canvas are not responsive by default
  options: {
    responsive: true,
  },
};

// 3. The chart instance, which is needed to initiate a new type of chart.
const BarChart2 = new Chart(chartCanvas2, config2);
