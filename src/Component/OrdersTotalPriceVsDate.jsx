import React, {useState} from 'react'
import db from '../Data/db.json'
import LineGraph from './LineGraph'

function OrdersTotalPriceVsDate() {
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

    if(ordersCopy1) {
        ordersCopy1 = ordersCopy1.map(ele => {
            ele["created"] = ele["created"].split("T");
            return ele
        })
    }

    // key, value pair to get the cost of orders per day

    let priceVsDateObj = {};
    for(let i=0; ordersCopy1 && i<ordersCopy1.length; i++) {
        if(ordersCopy1[i]["created"][0] in priceVsDateObj) {
            priceVsDateObj[ordersCopy1[i]["created"][0]] += Number(ordersCopy1[i]["price"]);
        
        } else {
            priceVsDateObj[ordersCopy1[i]["created"][0]] = Number(ordersCopy1[i]["price"]);
        }
    }

    // extracting total price per day and date from priceVsDateObj
    
    let totalPricePerDay = Object.values(priceVsDateObj);
    let date = Object.keys(priceVsDateObj);

    return (
        <div>
            {
                totalPricePerDay && date && <LineGraph totalPricePerDay = {totalPricePerDay} date = {date} />
            }
        </div>
    )
}

export default OrdersTotalPriceVsDate
