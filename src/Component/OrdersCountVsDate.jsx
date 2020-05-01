import React, {useState} from 'react';
import db from '../Data/db.json'
import BarGraph from './BarGraph';

function OredersCountVsDate() {
    let [orders] = useState(db.orders)

    let ordersCopy = [...orders]  // shallow copy

    // sorting orders based on date

    ordersCopy.sort((a, b) => {
        let dateA = a.created.toUpperCase();
        let dateB = b.created.toUpperCase();

        if(dateA < dateB) {
            return -1;
        } else if(dateA > dateB) {
            return 1;
        } else {
            return 0;
        }
    })

    let ordersCopy1 = JSON.parse(JSON.stringify(ordersCopy)) // detaching reference of its blueprint (deep copy)

    // extracting date in readable format

    ordersCopy1 = ordersCopy1.map(ele => {
        ele["created"] = ele["created"].split("T");
        return ele
    })

    // key, value pair to count number of orders per day

    let countVsDateObj = {};
    for(let i=0; ordersCopy1 && i<ordersCopy1.length; i++) {
        if(ordersCopy1[i]["created"][0] in countVsDateObj) {
            countVsDateObj[ordersCopy1[i]["created"][0]] += 1;
        
        } else {
            countVsDateObj[ordersCopy1[i]["created"][0]] = 1;
        }
    }
    
    // extracting orders' count and date from ordersCount object
    
    let ordersCount = Object.values(countVsDateObj);
    let date = Object.keys(countVsDateObj);

    return (
      <div>
        {ordersCount && date && (
          <BarGraph ordersCount={ordersCount} date={date} />
        )}
      </div>
    );
}

export default OredersCountVsDate
