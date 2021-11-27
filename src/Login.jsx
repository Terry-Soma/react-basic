import React, { Component } from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super();
    this.state = { email: '', password: '', message: '' };
  }

  onLogin = () => {
    console.log(this.state);
    let messages;
    if (this.state.password !== null) {
      messages = <span className="text-success">Successfully logged in </span>;
    } else {
      messages = <span className="text-error">Invalid login </span>;

      console.log('jak');
    }
    this.setState({ message: messages });
  };
  render() {
    console.log(this.state);
    return (
      <div className="col-lg-9">
        <h4 className="m-1 p-2 border-bottom">Login</h4>
        {this.state.message}
        <div className="form-group form-row">
          <label htmlFor="Emal" className="col-lg-4">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
        </div>
        <div className="form-group form-row">
          <label htmlFor="Password" className="col-lg-4">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
        </div>
        <div className="text-right">
          <button className="btn btn-primary" onClick={this.onLogin}>
            Login
          </button>
        </div>
      </div>
    );
  }
}
