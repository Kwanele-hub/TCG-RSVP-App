import React, { Component } from 'react'

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', surname: '', email: '', dietary: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
    this.setState({ name: '', surname: '', email: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name:
          <input type="text" name='name' value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Surname:
            <input type="text" name='surname' value={this.state.surname} onChange={this.handleChange} />
        </label>

        <label>Email:
          <input type="email" name='email' value={this.state.email} onChange={this.handleChange} />
        </label>
        <label>
          Dietary:
          <input type="dietary" name='dietary' value={this.state.dietary} onChange={this.handleChange} />
        </label>


        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm