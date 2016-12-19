import React, {Component} from 'react';
import {browserHistory} from 'react-router';

export default class Home extends Component {
  onLogoutClick() {
    this.props.auth.logout();
    browserHistory.push('login')
  }
  render() {
    return (
      <div>
        Welcome to the homepage.
        {this.props.auth.loggedIn() ? <button onClick={this.onLogoutClick.bind(this)}>Log out</button> : null}
        {this.props.auth.loggedIn() ? <img src={this.props.auth.getProfile().picture} /> : null}
        {this.props.children}
      </div>
    );
  }
}
