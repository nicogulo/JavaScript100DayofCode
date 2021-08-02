import React, { Component } from 'react';

export default class FormInput extends Component {
  state = {
    name: 'Nic',
    job: 'Frontend',
    salary: 'Rp. 5000000',
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
      job: e.target.value,
    });
  };

  handleChangenew = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    console.log('prevent is success');
    e.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <p>Nama saya {this.state.name}</p>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChangenew}
          />
        </div>
        <p>Pekerjaan saya {this.state.job}</p>
        <select
          name="job"
          id=""
          value={this.state.job}
          onChange={this.handleChangenew}
        >
          <option value="fronend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="uiux">UI UX</option>
          <option value="qa">QA</option>
        </select>
        <p>Salary {this.state.salary}</p>
        <input
          type="radio"
          name="salary"
          id=""
          value="Rp. 4000000"
          onChange={this.handleChangenew}
          checked={this.state.salary === 'Rp. 4000000' ? true : false}
        />{' '}
        Rp. 4000000
        <br />
        <input
          type="radio"
          name="salary"
          id=""
          value="Rp. 5000000"
          onChange={this.handleChangenew}
          checked={this.state.salary === 'Rp. 5000000' ? true : false}
        />{' '}
        Rp. 5000000
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}
