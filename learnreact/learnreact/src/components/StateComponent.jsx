import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class StateComponent extends Component {
  state = {
    name: 'Nico',
    umur: '23',
    hobby: 'Coding',
  };

  render() {
    return (
      <div>
        <h2>Nama: {this.state.nama}</h2>
        <h2>Umur: {this.state.umur}</h2>
        <h2>Hobby: {this.state.hobby}</h2>
      </div>
    );
  }
}

export default StateComponent;
