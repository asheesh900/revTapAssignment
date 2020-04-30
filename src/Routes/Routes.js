import React from 'react'
import {Link, Route, Switch, BrowserRouter} from 'react-router-dom'
import Customers from '../Component/Customers'
import OrdersTotalPriceVsDate from '../Component/OrdersTotalPriceVsDate'
import OrdersCountVsDate from '../Component/OrdersCountVsDate'
import ErrorPage from '../Component/ErrorPage'

function Routes() {
    return (
        <BrowserRouter>
            <div className = "container-fluid  p-4 bg-dark text-white">
                <Link className = " m-2 p-2 text-white" to = "/">Customers</Link>
                <Link className = " m-2 p-2 text-white" to = "/ordersTotalPriceVsDate">Order's Total Price Vs Date</Link>
                <Link className = " m-2 p-2 text-white" to = "/ordersCountVsDate">Order's Count Vs Date</Link>
            </div>
            <Switch>
                <Route exact path = "/" component = {Customers} />
                <Route path = "/ordersTotalPriceVsDate" component = {OrdersTotalPriceVsDate} />
                <Route path = "/ordersCountVsDate" component = {OrdersCountVsDate} />
                <Route component = {ErrorPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
