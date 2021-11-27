import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    return (
      <>
        <div className="col-lg-6">
          <div className="card m-2">
            <div className="card-body">
              <div className="text-muted">
                # {this.props.product.id}
                <span
                  className="pull-right hand"
                  onClick={() => {
                    this.props.onDelete(this.props.product);
                  }}
                >
                  <i className="fa fa-times"></i>
                </span>
              </div>
              <h5 className="p-5 border-top">
                {this.props.product.productName}
              </h5>
              <div className="">${this.props.product.price}</div>
            </div>

            <div className="card-footer">
              <div className="float-left">
                <span className="badge bg-primary">
                  {this.props.product.quantity}
                </span>
                <div className="btn-group">
                  <button
                    className="btn btn-outline-sucess"
                    onClick={() => {
                      this.props.onIncrement(this.props.product, 10);
                    }}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-outline-sucess"
                    onClick={() => {
                      this.props.onDecrement(this.props.product, 0);
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="float-right">{this.props.children}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
