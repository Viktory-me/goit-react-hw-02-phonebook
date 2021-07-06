import { Component } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Section from "./Components/Section/Section";
import Container from "./Components/Container/Container";
import MyForm from "./Components/Form/Form";
import Filter from "./Components/Filter/Filter";
import ContactList from "./Components/ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  addContact = ({ name, number }) => {
    if (this.state.contacts.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const contact = {
      id: uuid(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    const { filter } = this.state;
    return (
      <Container>
        <Section>
          <h1>Phonebook</h1>
          <MyForm onSubmit={this.addContact} />
        </Section>
        <Section>
          <h2>Contacts</h2>
          <Filter value={filter} onChangeFilter={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          ></ContactList>
        </Section>
      </Container>
    );
  }
}

export default App;
