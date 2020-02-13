import React, { Component } from 'react';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: {},
      name: '',
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
          contact,
          name: contact.name,
          street: contact.address.street,
          city: contact.address.city,
          state: contact.address.state,
          zipcode: contact.address.zipcode,
          note: contact.note,
          phone: contact.phone,
          email: contact.email
        });
      });
  }

  handleChange = evt => {
    // this.setState({ [evt.target.name]: evt.target.value });
    console.log('hello');
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form method="put" className="contact-edit">
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
          {this.state.contact.address && (
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
          )}

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
