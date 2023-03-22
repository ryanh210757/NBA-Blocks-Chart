import Chart from 'chart.js/auto'
import { getAquisitionsByYear } from './api'

(async function() {
  const data = [
    { year: 1, count: 220 },
    { year: 2, count: 448 },
    { year: 3, count: 700},
    { year: 4, count: 914},
    { year: 5, count: 1196},
    { year: 6, count: 1793 },
    { year: 7, count: 2097},
    { year: 8, count: 2439},
    { year: 9, count: 2736},
    { year: 10, count: 2978},
    { year: 11, count: 3185},
    { year: 12, count: 3358 },
    { year: 13, count: 3454},
    { year: 14, count: 3577},
    { year: 15, count: 3647},
    { year: 16, count: 3735 },
    { year: 17, count: 3825}
  ]

  const ad = [
    { year: 1, count: 112 },
    { year: 2, count: 301 },
    { year: 3, count: 501},
    { year: 4, count: 626},
    { year: 5, count: 793},
    { year: 6, count: 986 },
    { year: 7, count: 1121},
    { year: 8, count: 1264},
    { year: 9, count: 1323},
    { year: 10, count: 1413},
    { year: 11, count: 1509}    
  ]

  const rudy = [
    { year: 1, count: 41 },
    { year: 2, count: 230 },
    { year: 3, count: 365},
    { year: 4, count: 494},
    { year: 5, count: 708},
    { year: 6, count: 837 },
    { year: 7, count: 1024},
    { year: 8, count: 1159},
    { year: 9, count: 1349},
    { year: 10, count: 1486}
    
  ]

  const myles = [
    { year: 1, count: 86 },
    { year: 2, count: 258 },
    { year: 3, count: 376},
    { year: 4, count: 575},
    { year: 5, count: 707},
    { year: 6, count:  866},
    { year: 7, count: 984},
    { year: 8, count: 1122}
  ]

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'line',
      options:{
        animation: true,
        plugins: {
            legend: {
                display: true
            }, 
            tooltip:{
                enabled: true
            }
        }
      },
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: `Hakeem Olajuwon`,
            data: data.map(row => row.count)
          },
          {
            label: 'Anthony Davis',
            data: ad.map(row => row.count)
          },
          {
            label: 'Myles Turner',
            data: myles.map(row => row.count)
          },
          {
            label: 'Rudy Gobert',
            data: rudy.map(row => row.count),
            
          }
        ]
      }
    }
  );
})();
