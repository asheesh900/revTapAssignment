import React from 'react'
import Customers from '../Component/Customers'
import OrdersTotalPriceVsDate from '../Component/OrdersTotalPriceVsDate'
import OrdersCountVsDate from '../Component/OrdersCountVsDate'
import Navbar from '../Component/Navbar'

function Routes() {
    return (
        <>
            <div className = "container-fluid  p-4 bg-dark  sticky-top">
                <Navbar />
            </div>
            <div>
                <Customers />
                <OrdersTotalPriceVsDate  />
                <OrdersCountVsDate />
            </div>
        </>
    )
}

export default Routes
