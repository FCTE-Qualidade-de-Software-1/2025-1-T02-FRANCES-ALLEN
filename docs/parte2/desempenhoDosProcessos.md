<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<canvas id="cycleTimeChart" width="800" height="400"></canvas>

<script>
const commits = [
    {
        "date": "2025-05-08",
        "qtdCommits": 1
    },
    {
        "date": "2025-05-19",
        "qtdCommits": 2
    },
    {
        "date": "2025-05-28",
        "qtdCommits": 7
    },
    {
        "date": "2025-06-03",
        "qtdCommits": 2
    },
    {
        "date": "2025-07-06",
        "qtdCommits": 7
    },
    {
        "date": "2025-07-07",
        "qtdCommits": 2
    }
];


const commitsByDay = commits.reduce((acc, curr) => {
  acc[curr.date] = curr.qtdCommits;
  return acc;
}, {});
const labels = [];
const frequencyData = [];
for(let date = new Date(commits[0].date); date <= new Date(commits.at(-1).date); date.setDate(date.getDate() + 1)) {
  const label = date.toISOString().substring(0, 10);
  const frequency = commitsByDay[label] ?? 0;
  
  labels.push(label.split("-").reverse().join("/"));
  frequencyData.push(frequency);
}

const totalCommits = commits.reduce((acc, curr) => curr.qtdCommits + acc, 0);
const prefixSum = frequencyData.reduce((acc, curr) => {
  acc.push((acc.at(-1) ?? 0) + curr);
  return acc;
}, []);

const cumulativePercent = prefixSum.map(e => (e/totalCommits)*100);
const teamVelocity = prefixSum.map((curr, i, arr) => {
  const velocityBurn = 14;
  const totalNow = curr - (arr[i-velocityBurn] ?? 0);
  return totalNow / (Math.min(i, velocityBurn-1) + 1);
});


const ctx = document.getElementById('cycleTimeChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [
      {
        type: 'line',
        label: 'Percentil',
        data: cumulativePercent,
        borderColor: '#5AC1C1',
        backgroundColor: '#5AC1C1',
        yAxisID: 'y1',
        tension: 0.3,
        pointRadius: 2
      },
      {
        type: 'bar',
        label: 'Atividades entregues',
        data: frequencyData,
        backgroundColor: 'navy',
        yAxisID: 'y'
      },
      // {
      //   type: 'line',
      //   label: 'Velocity',
      //   data: teamVelocity,
      //   borderColor: '#fafafa',
      //   backgroundColor: '#123123',
      //   yAxisId: 'y2',
      //   tension: 0.3,
      //   pointRadius: 0
      // }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Cycle Time',
        font: {
          size: 18
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false
      },
      legend: {
        position: 'top'
      }
    },
    interaction: {
      mode: 'index',
      intersect: false
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Cycle Time (Dias)'
        }
      },
      y: {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'Frequência'
        },
        beginAtZero: true
      },
      y1: {
        type: 'linear',
        position: 'right',
        title: {
          display: true,
          text: 'Percentil (%)'
        },
        min: 0,
        max: 100,
        grid: {
          drawOnChartArea: false
        },
        ticks: {
          callback: function (value) {
            return value + '%';
          }
        }
      }
    }
  }
});
</script>