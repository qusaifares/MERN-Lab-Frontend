import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Link className="list-item" to={`/contacts/${this.props.contact._id}`}>
        <img
          className="list-image"
          src={
            this.props.contact.imageUrl ||
            `${process.env.PUBLIC_URL}/images/default-headshot.png`
          }
          alt={this.props.contact.name}
        />
        {this.props.contact.name}
      </Link>
    );
  }
}

export default ContactListItem;
