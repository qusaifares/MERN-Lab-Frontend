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
    return (
      <div className="contact">
        <div className="actions">
          <img src={`${process.env.PUBLIC_URL}/images/edit.svg`} alt="Edit" />
          <img
            src={`${process.env.PUBLIC_URL}/images/delete.svg`}
            alt="Delete"
          />
        </div>
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
          <div className="phone info-box">
            <img
              src={`${process.env.PUBLIC_URL}/images/phone.svg`}
              className="icon"
              alt="Phone"
            />
            {this.state.contact.phone}
          </div>

          {this.state.contact.address && (
            <div className="address info-box">
              <img
                src={`${process.env.PUBLIC_URL}/images/map.svg`}
                className="icon"
                alt="Address"
              />
              {this.state.contact.address.street}
              <br />
              {this.state.contact.address.city},{' '}
              {this.state.contact.address.state},{' '}
              {this.state.contact.address.zipcode}
            </div>
          )}

          <a
            href={`mailto:${this.state.contact.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="email info-box"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/email.svg`}
              className="icon"
              alt="Email"
            />
            {this.state.contact.email}
          </a>

          {this.state.contact.note && (
            <div className="note info-box">
              <img
                src={`${process.env.PUBLIC_URL}/images/note.svg`}
                className="icon"
                alt="Note"
              />
              {this.state.contact.note}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Contact;
