import React, {Component} from 'react';

export default class ProfileCard extends Component {
  render() {
    return (
      <div>
        {this.props.name}
        <img src={this.props.picture} />
        {this.props.children}
      </div>
    );
  }
}
