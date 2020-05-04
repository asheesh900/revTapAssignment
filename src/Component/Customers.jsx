import React, {useState} from 'react'
import db from '../Data/db.json'
import CustomersTable from './CustomersTable'
import Pagination from './Pagination';

function Customers() {
    let [customers] = useState(db.customers)

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    // Get current page

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = customers.slice(indexOfFirstItem, indexOfLastItem);

    // Change page

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    return (
      <div id = "customerTable">
        <CustomersTable customers={currentItems} />
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={customers.length}
          paginate={paginate}
        />

      </div>
    );
}

export default Customers
