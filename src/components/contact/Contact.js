import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
  handleDelete = () => {
    fetch(
      `https://mern-lab-backend.herokuapp.com/contacts/delete/${this.props.id}`,
      {
        method: 'DELETE'
      }
    )
      .then(res => res.json())
      .then(data => (window.location.href = '/'));
  };
  render() {
    return (
      <div className="contact">
        <div className="actions">
          <Link to={`/contacts/update/${this.state.contact._id}`}>
            {' '}
            <img
              src={`${process.env.PUBLIC_URL}/images/edit.svg`}
              alt="Edit"
              className="action-icon"
            />{' '}
          </Link>
          <img
            src={`${process.env.PUBLIC_URL}/images/delete.svg`}
            alt="Delete"
            className="action-icon"
            onClick={this.handleDelete}
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

          <div className="address info-box">
            <img
              src={`${process.env.PUBLIC_URL}/images/map.svg`}
              className="icon"
              alt="Address"
            />
            {this.state.contact.street}
            <br />
            {this.state.contact.city}, {this.state.contact.state},{' '}
            {this.state.contact.zipcode}
          </div>

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

          <div className="note info-box">
            <img
              src={`${process.env.PUBLIC_URL}/images/note.svg`}
              className="icon"
              alt="Note"
            />
            {this.state.contact.note}
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
