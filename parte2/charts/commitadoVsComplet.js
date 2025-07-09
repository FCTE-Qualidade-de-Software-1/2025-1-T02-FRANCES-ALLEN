const committedCompletedCtx = document.getElementById('committedCompletedChart').getContext('2d');

const ccLabels = [
  '28/05', '04/06', '11/06', '18/06', '25/06', '02/07', '09/07'
];

const completedData = [6, 2, 0, 0, 0, 7, 7]; 
const committedData = [4, 4, 4, 4, 4, 4, 4]; 

new Chart(committedCompletedCtx, {
  type: 'bar',
  data: {
    labels: ccLabels,
    datasets: [
      {
        label: 'Committed',
        data: committedData,
        backgroundColor: '#377eb8'
      },
      {
        label: 'Completed',
        data: completedData,
        backgroundColor: '#4daf4a'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: { display: true, text: 'Committed vs Completed', font: { size: 18 } },
      legend: { position: 'top' }
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Número de tarefas' } },
      x: { title: { display: true, text: 'Semana' } }
    }
  }
});