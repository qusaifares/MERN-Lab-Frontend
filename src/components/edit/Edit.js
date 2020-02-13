import React, { Component } from 'react';

class Edit extends Component {
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
  componentDidMount() {
    fetch(`https://mern-lab-backend.herokuapp.com/contacts/${this.props.id}`)
      .then(res => res.json())
      .then(contact => {
        this.setState({
          name: contact.name,
          title: contact.title,
          street: contact.street,
          city: contact.city,
          state: contact.state,
          zipcode: contact.zipcode,
          note: contact.note,
          phone: contact.phone,
          email: contact.email
        });
      });
  }

  handleChange = evt => {
    console.log(this.state[evt.target.name]);
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = this.state;
    console.log(data);
    fetch(
      `https://mern-lab-backend.herokuapp.com/contacts/update/${this.props.id}`,
      {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
      .then(res => res.json())
      .then(() => {
        console.log(this.props);
      });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form
          acceptCharset="utf-8"
          className="contact-edit"
          onSubmit={this.handleSubmit}
          method="POST"
        >
          <input
            type="text"
            defaultValue={this.state.imageUrl}
            name="imageUrl"
            onChange={this.handleChange}
          />
          <div className="phone info-box">
            <img
              src={`${process.env.PUBLIC_URL}/images/phone.svg`}
              className="icon"
              alt="Phone"
            />
            <input
              type="text"
              defaultValue={this.state.phone}
              name="phone"
              onChange={this.handleChange}
            />
          </div>

          <div className="address info-box">
            <img
              src={`${process.env.PUBLIC_URL}/images/map.svg`}
              className="icon"
              alt="Address"
            />
            <input
              type="text"
              defaultValue={this.state.street}
              name="street"
              onChange={this.handleChange}
            />
            <input
              type="text"
              defaultValue={this.state.city}
              name="city"
              onChange={this.handleChange}
            />
            <input
              type="text"
              defaultValue={this.state.state}
              name="state"
              onChange={this.handleChange}
            />
            <input
              type="text"
              defaultValue={this.state.zipcode}
              name="zipcode"
              onChange={this.handleChange}
            />
          </div>

          <img
            src={`${process.env.PUBLIC_URL}/images/email.svg`}
            className="icon"
            alt="Email"
          />
          <input
            type="text"
            defaultValue={this.state.email}
            name="email"
            onChange={this.handleChange}
          />

          <div className="note info-box">
            <img
              src={`${process.env.PUBLIC_URL}/images/note.svg`}
              className="icon"
              alt="Note"
            />
            <input
              type="text"
              defaultValue={this.state.note}
              name="note"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}

export default Edit;
