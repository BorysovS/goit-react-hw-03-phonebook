import { Component } from 'react';
import { ContactForm } from './phonebookForm/PhonebookForn';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { ContactList } from './contactsList/ContactList';
import { Filter } from './filter/Filter';
import initialContacts from './InitialContacts/initialContacts.json';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: ''
  };

  componentDidMount() { 
    const savedContacts = localStorage.getItem('contacts')

    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts);
      this.setState({ contacts: parsedContacts })
      return
    }
    this.setState({contacts: initialContacts})
 }

  componentDidUpdate(prevProps, prevState) { 
    if (prevState.contacts !== this.state.contacts) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))  
    }
  }
  
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
