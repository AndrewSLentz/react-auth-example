import React, {Component} from 'react';

export default class Login extends Component {
  render() {
    const { auth } = this.props
    return (
      <div>
        <h2>Login</h2>
        Welcome to the login page
        <button onClick={auth.login.bind(this)}>Login</button>
        {this.props.children}
      </div>
    );
  }
}
