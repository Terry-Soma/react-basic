import React, { Component } from 'react';
import Navbar from './Navbar';
import CustomerList from './CustomerList';
import Login from './Login';
import ShoppingCart from './ShoppingCart';
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        {/* <CustomerList /> */}
        <Login />
        <ShoppingCart />
      </React.Fragment>
    );
  }
}
