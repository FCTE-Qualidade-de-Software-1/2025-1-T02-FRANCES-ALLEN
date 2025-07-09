// const cumulativeFlowCtx = document.getElementById('cumulativeFlowChart').getContext('2d');

// const flowLabels = [
//   "08/05", "19/05", "28/05", "03/06", "06/07", "07/07"
// ];

// const toDoData = [5, 4, 3, 3, 2, 1, 0];
// const inProgressData = [0, 1, 2, 2, 3, 3, 2];
// const doneData = [0, 0, 1, 2, 3, 4, 5];

// new Chart(cumulativeFlowCtx, {
//   type: 'line',
//   data: {
//     labels: flowLabels,
//     datasets: [
//       {
//         label: 'To Do',
//         data: toDoData,
//         borderColor: '#f94144',
//         backgroundColor: '#f94144',
//         fill: true,
//         tension: 0.3
//       },
//       {
//         label: 'In Progress',
//         data: inProgressData,
//         borderColor: '#f3722c',
//         backgroundColor: '#f3722c',
//         fill: true,
//         tension: 0.3
//       },
//       {
//         label: 'Done',
//         data: doneData,
//         borderColor: '#90be6d',
//         backgroundColor: '#90be6d',
//         fill: true,
//         tension: 0.3
//       }
//     ]
//   },
//   options: {
//     responsive: true,
//     stacked: true,
//     plugins: {
//       title: { display: true, text: 'Cumulative Flow Diagram', font: { size: 18 } },
//       legend: { position: 'top' }
//     },
//     scales: {
//       y: { stacked: true, beginAtZero: true, title: { display: true, text: 'Quantidade de tarefas' } },
//       x: { title: { display: true, text: 'Data' } }
//     }
//   }
// });
