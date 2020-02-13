import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Link to={`/contacts/${this.props.contact._id}`}>
        <div className="card-name">{this.props.contact.name}</div>
      </Link>
    );
  }
}

export default ContactListItem;
