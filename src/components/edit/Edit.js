import React, { Component } from 'react';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: {}
    };
  }
  componentDidMount() {
    fetch(`https://mern-lab-backend.herokuapp.com/contacts/${this.props.id}`)
      .then(res => res.json())
      .then(contact => {
        this.setState({ contact });
      });
  }
  render() {
    return (
      <div>
        <form method="put" className="contact-edit">
          <div className="phone info-box">
            <img
              src={`${process.env.PUBLIC_URL}/images/phone.svg`}
              className="icon"
              alt="Phone"
            />
            <input type="text" value={this.state.contact.phone} name="phone" />
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
                value={this.state.contact.address.street}
                name="street"
              />
              <input
                type="text"
                value={this.state.contact.address.city}
                name="city"
              />
              <input
                type="text"
                value={this.state.contact.address.state}
                name="state"
              />
              <input
                type="text"
                value={this.state.contact.address.zipcode}
                name="zipcode"
              />
            </div>
          )}

          <img
            src={`${process.env.PUBLIC_URL}/images/email.svg`}
            className="icon"
            alt="Email"
          />
          <input type="text" value={this.state.contact.email} name="email" />

          <div className="note info-box">
            <img
              src={`${process.env.PUBLIC_URL}/images/note.svg`}
              className="icon"
              alt="Note"
            />
            <input type="text" value={this.state.contact.note} name="note" />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}

export default Edit;
