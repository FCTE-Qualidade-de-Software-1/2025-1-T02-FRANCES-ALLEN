<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Burndown Chart - Tarefas Restantes</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
      background-color: #f9f9f9;
    }
    .chart-container {
      width: 80%;
      max-width: 900px;
      margin: 0 auto;
      background-color: white;
      border-radius: 20px;
      padding: 20px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    h1 {
      text-align: center;
      color: #333;
    }
  </style>
</head>
<body>
  <h1>Burndown Chart - Fases Restantes por Semana</h1>
  <div class="chart-container">
    <canvas id="burndownChart"></canvas>
  </div>

  <script>
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
            borderColor: '#000000',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            borderWidth: 3,
            fill: false,
            tension: 0.4,
            pointRadius: 6,
            pointBackgroundColor: '#000000',
            pointBorderColor: '#000000',
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
              color: '#333',
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
              color: '#333'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Semanas Sprint'
            },
            ticks: {
              color: '#333'
            }
          }
        }
      }
    });
  </script>
</body>
</html>
