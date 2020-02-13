import React, { Component } from 'react';

class Edit extends Component {
  render() {
    return (
      <div>
        <div className="contact-info">
          <div className="phone info-box">
            <img
              src={`${process.env.PUBLIC_URL}/images/phone.svg`}
              className="icon"
              alt="Phone"
            />
            <input type="text" value={this.state.contact.phone} />
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
            <input type="text" value={this.state.contact.email} />
          </a>

          <div className="note info-box">
            <img
              src={`${process.env.PUBLIC_URL}/images/note.svg`}
              className="icon"
              alt="Note"
            />
            <input type="text" value={this.state.contact.note} />
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
