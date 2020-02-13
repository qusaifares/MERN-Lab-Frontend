import React, { Component } from 'react';

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      title: '',
      imageUrl: '',
      street: '',
      city: '',
      state: '',
      zipcode: '',
      email: '',
      note: '',
      phone: ''
    };
  }
  handleChange = evt => {
    console.log(this.state[evt.target.name]);
    this.setState({ [evt.target.id]: evt.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log('this function works');
    fetch(`https://mern-lab-backend.herokuapp.com/contacts/`, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());
    // .then(() => this.props.history.push('/'));
  };
  render() {
    return (
      <div>
        <form method="POST" onSubmit={this.handleSubmit}>
          <input
            type="text"
            autoComplete="new-password"
            id="imageUrl"
            placeholder="Image URL"
            onChange={this.handleChange}
            value={this.state.imageUrl}
          />

          <input
            type="text"
            autoComplete="new-password"
            id="name"
            placeholder="Name"
            onChange={this.handleChange}
            value={this.state.name}
          />

          <input
            type="text"
            autoComplete="new-password"
            id="title"
            placeholder="Title"
            onChange={this.handleChange}
            value={this.state.title}
          />

          <input
            type="text"
            autoComplete="new-password"
            id="phone"
            placeholder="Phone Number"
            onChange={this.handleChange}
            value={this.state.phone}
          />

          <input
            type="text"
            autoComplete="new-password"
            id="email"
            placeholder="Email Address"
            onChange={this.handleChange}
            value={this.state.email}
          />

          <input
            type="text"
            autoComplete="new-password"
            id="street"
            placeholder="Street"
            onChange={this.handleChange}
            value={this.state.street}
          />

          <input
            type="text"
            autoComplete="new-password"
            id="city"
            placeholder="City"
            onChange={this.handleChange}
            value={this.state.city}
          />

          <input
            type="text"
            autoComplete="new-password"
            id="state"
            placeholder="State"
            onChange={this.handleChange}
            value={this.state.state}
          />

          <input
            type="text"
            autoComplete="new-password"
            id="zipcode"
            placeholder="Zip Code"
            onChange={this.handleChange}
            value={this.state.zipcode}
          />

          <input
            type="text"
            autoComplete="new-password"
            id="note"
            placeholder="Note"
            onChange={this.handleChange}
            value={this.state.note}
          />
          <input type="submit" value="Create" />
        </form>
      </div>
    );
  }
}

export default New;
