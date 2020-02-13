import React, { Component } from 'react';
import ContactListItem from '../contactListItem/ContactListItem';

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }
  componentDidMount() {
    fetch('https://mern-lab-backend.herokuapp.com/contacts')
      .then(res => res.json())
      .then(contacts => {
        this.setState({ contacts });
      });
  }
  render() {
    return (
      <div className="contact-list">
        {this.state.contacts.map(contact => (
          <ContactListItem contact={contact} key={contact._id} />
        ))}
      </div>
    );
  }
}

export default ContactList;
