// const committedCompletedCtx = document.getElementById('committedCompletedChart').getContext('2d');

// const ccLabels = [
//   'Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5'
// ];

// const committedData = [10, 9, 8, 7, 5];
// const completedData = [8, 7, 6, 6, 4];

// // const committedData = [4, 4, 4, 4, 4, 4, 4];
// // const completedData = [0, 0.1, 0.4, 0.7, 0, 1.6, 1.2];

// new Chart(committedCompletedCtx, {
//   type: 'bar',
//   data: {
//     labels: ccLabels,
//     datasets: [
//       {
//         label: 'Committed',
//         data: committedData,
//         backgroundColor: '#377eb8'
//       },
//       {
//         label: 'Completed',
//         data: completedData,
//         backgroundColor: '#4daf4a'
//       }
//     ]
//   },
//   options: {
//     responsive: true,
//     plugins: {
//       title: { display: true, text: 'Committed vs Completed', font: { size: 18 } },
//       legend: { position: 'top' }
//     },
//     scales: {
//       y: { beginAtZero: true, title: { display: true, text: 'Número de tarefas' } },
//       x: { title: { display: true, text: 'Semana' } }
//     }
//   }
// });
