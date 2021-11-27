import React, { Component } from 'react';

export default class CustomerList extends Component {
  state = {
    appTitle: 'C',
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: 'Scott',
        phone: '123213',
        address: { city: 'London' },
        photo:
          'https://images.unsplash.com/photo-1637996815859-43629ffe6ab9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80',
      },
      {
        id: 3,
        name: 'Scott',
        phone: '123213',
        address: { city: 'Londen' },
        photo:
          'https://images.unsplash.com/photo-1637996815859-43629ffe6ab9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80',
      },
      {
        id: 2,
        name: 'Scott',
        phone: '123213',
        address: { city: 'Londyn' },
        photo:
          'https://images.unsplash.com/photo-1637996815859-43629ffe6ab9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80',
      },
      {
        id: 12,
        name: 'Scott',
        phone: '123213',
        address: { city: 'Londqn' },
        photo:
          'https://images.unsplash.com/photo-1637996815859-43629ffe6ab9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80',
      },
      {
        id: 5,
        name: 'Scott',
        phone: '123213',
        address: { city: 'Londwn' },
        photo:
          'https://images.unsplash.com/photo-1637996815859-43629ffe6ab9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80',
      },
      {
        id: 11,
        name: 'Scott',
        phone: null,
        address: { city: 'Londzn' },
        photo:
          'https://images.unsplash.com/photo-1637996815859-43629ffe6ab9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80',
      },
    ],
  };

  onRefreshClick = () => {
    this.setState({ customersCount: 7 });
  };
  render() {
    return (
      <>
        <h1 className="border-bottom m-1 p-1">
          {this.state.appTitle}
          <span className="badge badge-secondary m-2 bg-dark">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h1>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>
                  <img src={customer.photo} alt={customer.name} />
                </td>
                <td>{customer.name}</td>
                {/*conditional */}{' '}
                <td>{customer.phone == null ? 'No phone' : customer.phone}</td>
                <td>{customer.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
