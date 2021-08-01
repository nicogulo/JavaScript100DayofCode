import React, { Component } from 'react';

class Biodata extends Component {
  render() {
    return (
      <div>
        <h2>Nama {this.props.nama}</h2>
        <h2>Hobby: {this.props.hobby}</h2>
      </div>
    );
  }
}

export default Biodata;
