import { Component } from 'react';

import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

import { Container, MainTitle, ContactTitle } from './AppStyle';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  checkingForExistenceOfSuchName = verifiableName => {
    const { contacts } = this.state;
    const handleName = verifiableName.toLowerCase();
    return contacts.find(({ name }) => name.toLowerCase() === handleName);
  };

  handleSubmitContactForm = data => {
    const { name } = data;

    this.checkingForExistenceOfSuchName(name)
      ? alert(`${name} is already in contact`)
      : this.setState(prev => ({ contacts: [...prev.contacts, data] }));
  };

  changeFilterName = ({ target }) => {
    const { value } = target;
    this.setState({ filter: value });
  };

  deleteContact = contactId => {
    this.setState(prev => ({
      contacts: [...prev.contacts.filter(({ id }) => id !== contactId)],
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const searchName = filter.toLowerCase();
    const filterContacts = contacts.filter(({ name }) =>
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
