import Chart from 'chart.js/auto'
import { getAquisitionsByYear } from './api'

(async function() {
  const data = [
    { year: 2003, count: 20.9 },
    { year: 2004, count: 27.2 },
    { year: 2005, count: 31.4},
    { year: 2006, count: 27.3},
    { year: 2007, count: 30},
    { year: 2008, count: 28.4 },
    { year: 2009, count: 29.7},
  ];

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'bar',
      options:{
        animation: true,
        plugins: {
            legend: {
                display: false
            }, 
            tooltip:{
                enabled: false
            }
        }
      },
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();
