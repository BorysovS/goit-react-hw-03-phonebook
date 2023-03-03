import { Component } from 'react';
import { ContactForm } from './phonebookForm/PhonebookForn';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { ContactList } from './contactsList/ContactList';
import { Filter}  from './filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: ''
  };
  
  handleFilterInput = evt => { 
    this.setState({filter: evt.target.value})
  }

  getFindContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)) 
    
  }

  addContact = newContact => {
    const normalizeName = newContact.name.toLowerCase();
    const checkName = this.state.contacts.find(contact => {
     return contact.name.toLowerCase() === normalizeName
    });
    this.setState(pervState => {
          if (checkName) { 
      alert(`${newContact.name} is alredy in contacts`)
      return
    }
      return {
        contacts: [...pervState.contacts, newContact],
      };
    }
    );
  };

  deleteContact = contactId => { 
    this.setState(pervState => { 
      return {
        contacts: pervState.contacts.filter(contact => contact.id !== contactId)
      }
    })
  }


  render() {
    const findContacts = this.getFindContact();
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.addContact} />
      <h2>Contacts</h2>
      <Filter onChange={this.handleFilterInput} filter={ this.state.filter} />
      <ContactList contacts={findContacts} onDelete={this.deleteContact} />
      <GlobalStyle />
    </Layout>
  );}
};
