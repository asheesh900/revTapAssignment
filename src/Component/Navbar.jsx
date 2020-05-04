import React from 'react'

function Navbar() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className = " m-2 p-2  nav-link" href = "#customerTable">Customers</a>
          </li>
          <li className="nav-item">
            <a className = " m-2 p-2 nav-link" href = "#ordersTotalPrice">Order's Total Price Vs Date</a>

          </li>
          <li className="nav-item">
            <a className = " m-2 p-2 nav-link" href = "#ordersTotalCount">Order's Count Vs Date</a>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar
