

{
  const charts = [
    document.getElementById('myChart'),
    document.getElementById('myChart1'),
    document.getElementById('myChart2'),
    document.getElementById('myChart3')
  ];

  charts.forEach((canvas) => {
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx || typeof window.Chart === 'undefined') return;

    new Chart(ctx, {
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
  });
}