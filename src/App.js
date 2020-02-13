import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Contact from './components/contact/Contact';
import Edit from './components/edit/Edit';
import New from './components/new/New';
import Home from './components/home/Home';

class App extends Component {
  constructor() {
    super();
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
      <>
        <header>
          <Header />
        </header>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            {this.state.contacts.map(contact => (
              <Route
                path={`/contacts/${contact._id}`}
                key={contact._id}
                exact
                render={routerProps => (
                  <Contact match={routerProps.match} id={contact._id} />
                )}
              />
            ))}
            {this.state.contacts.map(contact => (
              <Route
                path={`/contacts/update/${contact._id}`}
                key={contact._id}
                exact
                render={routerProps => (
                  <Edit
                    match={routerProps.match}
                    id={contact._id}
                    history={this.props.history}
                  />
                )}
              />
            ))}

            {this.state.contacts.map(contact => (
              <Route
                path={`/contacts/delete/${contact._id}`}
                key={contact._id}
                exact
                render={routerProps => (
                  <Contact match={routerProps.match} id={contact._id} />
                )}
              />
            ))}
            <Route path="/new" component={New} />
          </Switch>
        </main>
      </>
    );
  }
}
export default App;
