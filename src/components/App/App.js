import React, { Component } from 'react';

import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

import { Container, MainTitle, ContactTitle } from './AppStyle';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmitContactForm = data => {
    const handleName = data.name.toLowerCase();

    if (
      this.state.contacts.find(({ name }) => name.toLowerCase() === handleName)
    ) {
      alert(`${data.name} is already in contact`);
      return;
    } else {
      this.setState(prev => {
        return { contacts: [...prev.contacts, data] };
      });
    }
  };

  changeFilterName = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prev => {
      return {
        contacts: [...prev.contacts.filter(({ id }) => id !== contactId)],
      };
    });
  };

  render() {
    const { filter } = this.state;

    const searchName = filter.toLowerCase();
    const filterContacts = this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(searchName),
    );

    return (
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm handleSubmitContactForm={this.handleSubmitContactForm} />
        <ContactTitle>Contacts</ContactTitle>
        <Filter value={filter} changeFilterName={this.changeFilterName} />
        <ContactList
          filterContacts={filterContacts}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
