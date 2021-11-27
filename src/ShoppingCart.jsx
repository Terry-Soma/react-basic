import React, { Component } from 'react';
import Product from './Product';
export default class ShoppingCart extends Component {
  constructor() {
    super(); /* component class or parent props */
    this.state = {
      products: [
        { id: 1, productName: 'Iphone', price: 8900, quantity: 0 },
        { id: 2, productName: 'Samsung', price: 8900, quantity: 0 },
        { id: 3, productName: 'Huaweo', price: 3213900, quantity: 0 },
        { id: 4, productName: 'Sony', price: 1220, quantity: 0 },
        { id: 5, productName: 'Puma', price: 32132, quantity: 0 },
        { id: 6, productName: 'Src', price: 10222, quantity: 0 },
      ],
    };
  }

  handleIncrement = (product, maxVal) => {
    let allProduct = [...this.state.products];
    console.log(allProduct);
    let index = allProduct.indexOf(product);
    if (allProduct[index].quantity < maxVal) {
      allProduct[index].quantity++;
      this.setState({ products: allProduct });
    }
  };
  handleDecrement = (product, minVal) => {
    let allProduct = [...this.state.products];
    console.log(allProduct);
    let index = allProduct.indexOf(product);
    if (allProduct[index].quantity > minVal) {
      allProduct[index].quantity--;
      this.setState({ products: allProduct });
    }
  };
  handleDelete = (product) => {
    console.log('delete');
    let allProduct = [...this.state.products];
    console.log(allProduct);
    let index = allProduct.indexOf(product);
    if (window.confirm('are you sure to delete /?')) {
      allProduct.splice(index, 1);
      this.setState({ products: allProduct });
    }
  };
  render() {
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>

        <div className="row">
          {this.state.products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            >
              {' '}
              <button className="btn btn-primary">Buy now</button>
            </Product>
          ))}
        </div>
      </div>
    );
  }
}
