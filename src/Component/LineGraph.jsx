import React from 'react';
import {Line} from 'react-chartjs-2';

function LineGraph({totalPricePerDay, date}) {

    const data = {
        labels: date,
        datasets: [
          {
            label: `Orders' Total Price `,
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'red',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: totalPricePerDay
          }
        ]
      };
    return (
        <div className = "container text-center my-4">
            <h2 className = "my-4">Orders' Total Price Vs Date</h2>
            <Line data={data} />
        </div>
    )
}

export default LineGraph
