// Chart.js Roadmap Visualization
const ctx = document.getElementById('roadmapChart').getContext('2d');

const roadmapChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4'],
    datasets: [{
      label: 'Phoenix Coin Roadmap',
      data: [10, 30, 60, 100], // Progress percentage for each phase
      backgroundColor: ['#ff6f61', '#e62e00', '#ff6600', '#d84e2a'],
      borderColor: '#fff',
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 120
      }
    }
  }
});
