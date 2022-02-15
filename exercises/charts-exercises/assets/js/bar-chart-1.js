// bar-chart code

// 1. The canvas reference to display the chart.
const chartCanvas1 = document.getElementById('bar-chart-1').getContext('2d');

// 2. The chart configuration.
const config1 = {
  type: 'bar', // chart type
  data: {
    // The chart labels, the horizontal labels of the chart.
    labels: ['label-1', 'label-2', 'label-3', 'label-4', 'label-5'],

    // The chart datasets
    datasets: [
      {
        // The chart data, the horizontal labels of the chart.
        data: [67.7, 63.1, 54.7, 44.1, 40.2],

        // Chart label
        label: 'Chart Label',
      },
    ],
  },
  // Canvas are not responsive by default
  options: {
    responsive: true,
  },
};

// 3. The chart instance, which is needed to initiate a new type of chart.
const BarChart1 = new Chart(chartCanvas1, config1);
