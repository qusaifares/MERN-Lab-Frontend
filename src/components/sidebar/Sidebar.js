import React, { Component } from 'react';
import ContactList from '../contactList/ContactList';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      contactSearch: ''
    };
  }
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    return (
      <>
        <form className="sidebar-header" method="post">
          <input
            onChange={this.handleChange}
            type="text"
            name="contactSearch"
            id="contactSearch"
            placeholder="Search Contacts"
            value={this.state.contactSearch}
            autoComplete="off"
          />
          <Link to="/new">
            <img
              src={`${process.env.PUBLIC_URL}/images/new.svg`}
              alt="Edit"
              className="new-icon"
            />
          </Link>
        </form>
        <ContactList />
      </>
    );
  }
}

export default Home;
