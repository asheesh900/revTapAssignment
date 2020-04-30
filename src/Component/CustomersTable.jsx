import React from 'react'

function CustomersTable({customers}) {
    return (
        <div className = "container my-4">
            <h1 className = "text-center my-4">Customers</h1>
            <table className="table table-striped  table-responsive">
                <thead className = "thead-dark">
                    <tr>
                    <th scope="col">Sr. No.</th>
                    <th scope="col">ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Created_at</th>
                    <th scope="col">Orders</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       customers && customers.map((customer, i) => {
                            return (
                                <tr key = {customer.id}>
                                    <th>{i+1} </th>
                                    <th>{customer.id} </th>
                                    <th>{customer.firstName} </th>
                                    <th>{customer.lastName} </th>
                                    <th>{customer.email} </th>
                                    <th>{customer.created} </th>
                                    <th>{customer.orders} </th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
    
}

export default CustomersTable
