import React from 'react';
import renderer from 'react-test-renderer'
import App from './App';
import Routes from './Routes/Routes'
import Customers from './Component/Customers';
import CustomersTable from './Component/CustomersTable'
import Pagination from './Component/Pagination'
import OrdersTotalPriceVsDate from './Component/OrdersTotalPriceVsDate'
import OrdersCountVsDate from './Component/OrdersCountVsDate'
import LineGraph from './Component/LineGraph'
import BarGrapth from './Component/BarGraph'

it('App component snapshot', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});

it('Routes component snapshot', () => {
  const tree = renderer
    .create(<Routes />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});

it('Customers component snapshot', () => {
  const tree = renderer
    .create(<Customers />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});

it('CustomersTable component snapshot', () => {
  const tree = renderer
    .create(<CustomersTable />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});

it('Pagination component snapshot', () => {
  const tree = renderer
    .create(<Pagination />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});

it('OrdersTotalPriceVsDate component snapshot', () => {
    const tree = renderer
      .create(<OrdersTotalPriceVsDate />)
      .toJSON();
      expect(tree).toMatchSnapshot();
});

it('OrdersCountVsDate component snapshot', () => {
  const tree = renderer
    .create(<OrdersCountVsDate />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});

it('LineGraph component snapshot', () => {
  const tree = renderer
    .create(<LineGraph />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});

it('BarGrapth component snapshot', () => {
  const tree = renderer
    .create(<BarGrapth />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});