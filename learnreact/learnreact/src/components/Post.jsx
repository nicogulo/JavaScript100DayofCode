import React, { Component } from 'react';

export default class Post extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.nama}</h2>
        <p>{this.props.detail}</p>
        <img src={this.props.foto} alt={this.props.nama} />
      </div>
    );
  }
}
