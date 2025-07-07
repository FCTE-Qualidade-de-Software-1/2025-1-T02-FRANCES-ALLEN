function parseDate(utcDateStr) {
  const utcDate = new Date(utcDateStr);
  utcDate.setHours(utcDate.getHours() - 3);

  return utcDate.toISOString().substring(0, 10);
}

(async () => {
  const fetchedCommits = await fetch("https://api.github.com/repos/FCTE-Qualidade-de-Software-1/2025-1-T02-FRANCES-ALLEN/commits").then((res) => res.json());
  const lastCommitDate = parseDate(fetchedCommits[0].commit.author.date);
  const firstCommitDate = parseDate(fetchedCommits.at(-1).commit.author.date);
  const totalCommits = fetchedCommits.length;

  const commitsByDay = fetchedCommits.reduce((acc, curr) => {
    const date = parseDate(curr.commit.author.date);
    acc[date] ??= 0;
    acc[date]++;
    return acc;
  }, {});

  const labels = [];
  const frequencyData = [];
  for (let date = new Date(firstCommitDate); date <= new Date(lastCommitDate); date.setDate(date.getDate() + 1)) {
    const label = date.toISOString().substring(0, 10);
    const frequency = commitsByDay[label] ?? 0;

    labels.push(label.split("-").reverse().join("/"));
    frequencyData.push(frequency);
  }
  const prefixSum = frequencyData.reduce((acc, curr) => {
    acc.push((acc.at(-1) ?? 0) + curr);
    return acc;
  }, []);
  const cumulativePercent = prefixSum.map(e => (e / totalCommits) * 100);

  const cycleTimeCtx = document.getElementById('cycleTimeChart').getContext('2d');
  new Chart(cycleTimeCtx, {
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
        }
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


  const teamVelocity = prefixSum.map((curr, i, arr) => {
    const velocityBurn = 4;
    const totalNow = curr - (arr[i - velocityBurn] ?? 0);
    return totalNow / (Math.min(i, velocityBurn - 1) + 1);
  });

  const teamVelocityCtx = document.getElementById('teamVelocityChart').getContext('2d');
  new Chart(teamVelocityCtx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          type: 'line',
          label: 'Velocidade',
          data: teamVelocity,
          borderColor: '#5AC1C1',
          backgroundColor: '#5AC1C1',
          yAxisId: 'y2',
          tension: 0.3,
          pointRadius: 0
        },
        {
          type: 'bar',
          label: 'Atividades entregues',
          data: frequencyData,
          backgroundColor: 'navy',
          yAxisID: 'y'
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Team Velocity',
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
            text: 'Dia'
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
            text: 'Velocidade'
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
})();
