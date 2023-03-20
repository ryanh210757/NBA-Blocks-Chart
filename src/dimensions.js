import Chart from 'chart.js/auto'
import { getDimensions } from './api'

(async function() {
  const data = await getDimensions();

  new Chart(
    document.getElementById('dimensions'),
    {
      type: 'line',
      options: {
        aspectRatio: 1,
      scales:{
        x:{
            max: 500
        },
        y: {
            max: 4000
        }
      }
    },
      data: {
        labels: data.map(x => x.year),
        datasets: [
            {
              label: 'Hakeem Olajuwon ',
              data: data
                .filter(row => row.width === row.height)
                .map(row => ({
                  x: row.width,
                  y: row.height,
                  r: row.count
                }))
            },
            {
              label: 'Anthony Davis',
              data: data
                .filter(row => row.width > row.height)
                .map(row => ({
                  x: row.width,
                  y: row.height,
                  r: row.count
                }))
            },
            {
              label: 'Myles Turner',
              data: data
                .filter(row => row.width < row.height)
                .map(row => ({
                  x: row.width,
                  y: row.height,
                  r: row.count
                }))
            }
          ]
      }
    }
  );
})();
