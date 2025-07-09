const ctx = document.getElementById('burndownChart').getContext('2d');

const labels = [
  '28/05/2025', '04/06/2025', '11/06/2025', '18/06/2025',
  '25/06/2025', '02/07/2025', '09/07/2025'
];

const idealData = [4.0, 3.33, 2.67, 2.0, 1.33, 0.67, 0];
const realData = [4.0, 3.9, 3.5, 2.8, 2.8, 1.2, 0];

new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [
      {
        label: 'Ideal',
        data: idealData,
        borderColor: '#5AC1C1',
        backgroundColor: '#5AC1C1',
        borderWidth: 3,
        fill: false,
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8
      },
      {
        label: 'Real',
        data: realData,
        borderColor: '#f9c80e',
        backgroundColor: 'rgba(249, 200, 14, 0.1)',
        borderWidth: 3,
        fill: false,
        tension: 0.4,
        pointRadius: 6,
        pointBackgroundColor: '#f9c80e',
        pointBorderColor: '#f9c80e',
        pointHoverRadius: 8
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Burndown Chart - Progresso da Sprint',
        font: { size: 18 }
      },
      tooltip: {
        callbacks: {
          label: context => `${context.dataset.label}: ${context.raw.toFixed(1)} tarefas`
        }
      },
      legend: {
        labels: {
          font: { size: 14 }
        }
      }
    },
    animations: {
      tension: {
        duration: 1500,
        easing: 'easeOutElastic',
        from: 1,
        to: 0.4,
        loop: false
      },
      radius: {
        duration: 1000,
        easing: 'linear',
        from: 1,
        to: 6,
        loop: true
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Fases Restantes'
        },
        ticks: {
          stepSize: 0.5,
        }
      },
      x: {
        title: {
          display: true,
          text: 'Semanas Sprint'
        },
        ticks: {
        }
      }
    }
  }
});
