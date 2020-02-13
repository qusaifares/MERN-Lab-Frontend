import React, { Component } from 'react';
import ContactList from '../contactList/ContactList';

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
        <form method="post">
          <label htmlFor="contactSearch">Search Contact Name </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="contactSearch"
            id="contactSearch"
            value={this.state.contactSearch}
            autoComplete="off"
          />
        </form>
        <ContactList />
      </>
    );
  }
}

export default Home;
