import React from 'react'
import axios from 'axios'


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', surname: '', email: '', dietary: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  register = async() => {

try {
  const fetch = await axios.post('http://localhost:5100/book',this.state)
  console.log('fetch',fetch.data)
} catch (error) {
  console.log(error)
}
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
    this.setState({ name: '', surname: '', email: '', dietary: '' })
    this.register (this.state)
  }

  render() {
    console.log(this.state)
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