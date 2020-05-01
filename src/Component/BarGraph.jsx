import React from 'react';
import {Bar} from 'react-chartjs-2';

function BarGraph({ordersCount, date}) {

    if(ordersCount && date) {
      var data = {
        labels: date,
        datasets: [
          {
            label: 'Orders count',
            backgroundColor: 'teal',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: ordersCount
          }
        ]
      };

    }
    return (
        <div className = "container my-4 text-center">
            <h2 className = "my-4">Orders' Count Vs Date</h2>
            {
              data && 
              <Bar
                data={data}
                width={50}
                height={400}
                options={{
                    maintainAspectRatio: false
                }}
            />
            }
        </div>
    )
}

export default BarGraph
