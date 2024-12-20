// Chart.js Roadmap Visualization
const ctxRoadmap = document.getElementById('roadmapChart').getContext('2d');
const roadmapChart = new Chart(ctxRoadmap, {
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

// Chart.js Token Distribution Visualization
const ctxDistribution = document.getElementById('distributionChart').getContext('2d');
const distributionChart = new Chart(ctxDistribution, {
  type: 'pie',
  data: {
    labels: ['Burned (50%)', 'Liquidity Pool (30%)', 'Team (10%)', 'Advisors (5%)', 'Partnerships (5%)'],
    datasets: [{
      data: [50, 30, 10, 5, 5],
      backgroundColor: ['#ff6f61', '#e62e00', '#ff6600
