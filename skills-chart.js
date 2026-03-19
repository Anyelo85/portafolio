

{
  const ctx1 = document.getElementById('myChart').getContext('2d');
  new Chart(ctx1, {
    type: 'doughnut',
    data: {
      datasets: [{
        label: '# of Votes',
        data: [-10, 90],
        backgroundColor: ['rgb(163, 163, 163)', 'rgb(53, 53, 53)'],
        borderWidth: 4
      }],
      labels: ['90%']
    }
  });

  const ctx2 = document.getElementById('myChart1').getContext('2d');
  new Chart(ctx2, {
    type: 'doughnut',
    data: {
      datasets: [{
        label: '# of Votes',
        data: [-15, 85],
        backgroundColor: ['rgb(163, 163, 163)', 'rgb(53, 53, 53)'],
        borderWidth: 4
      }],
      labels: ['85%']
    }
  });

  const ctx3 = document.getElementById('myChart2').getContext('2d');
  new Chart(ctx3, {
    type: 'doughnut',
    data: {
      datasets: [{
        label: '# of Votes',
        data: [-5, 95],
        backgroundColor: ['rgb(163, 163, 163)', 'rgb(53, 53, 53)'],
        borderWidth: 4
      }],
      labels: ['95%']
    }
  });

  const ctx4 = document.getElementById('myChart3').getContext('2d');
  new Chart(ctx4, {
    type: 'doughnut',
    data: {
      datasets: [{
        label: '# of Votes',
        data: [-10, 90],
        backgroundColor: ['rgb(163, 163, 163)', 'rgb(53, 53, 53)'],
        borderWidth: 4
      }],
      labels: ['90%']
    }
  });
}