import React, { Component } from 'react';

class Contact extends Component {
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
    console.log(this.state.contact);
    return (
      <div className="contact">
        <div className="contact-header">
          <img
            src={
              this.state.contact.imageUrl ||
              `${process.env.PUBLIC_URL}/images/default-headshot.png`
            }
            alt={this.state.contact.name}
            className="headshot"
          />
          <div className="name">{this.state.contact.name}</div>
          <div className="title">{this.state.contact.title}</div>
        </div>
        <div className="contact-info">
          <div className="phone">{this.state.contact.phone}</div>

          {this.state.contact.address && (
            <div className="address">
              {this.state.contact.address.street}
              <br />
              {this.state.contact.address.city},{' '}
              {this.state.contact.address.state},{' '}
              {this.state.contact.address.zipcode}
            </div>
          )}

          <div className="email"></div>
          <div className="note"></div>
        </div>

        <button className="delete-contact">Delete Contact</button>
      </div>
    );
  }
}

export default Contact;
