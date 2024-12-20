// Tokenomics Pie Chart with Chart.js
const ctx = document.getElementById('tokenomicsChart').getContext('2d');

const tokenomicsChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Burned Tokens (50%)', 'Circulating Supply (50%)'],
    datasets: [{
      data: [500000000, 500000000],
      backgroundColor: ['#e62e00', '#ff6f61'],
      borderColor: '#fff',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw.toLocaleString();
          }
        }
      }
    }
  }
});
