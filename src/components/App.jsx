import ContactForm from "./ContactForm/contactForm";
import SearchBox from "./SeachBox/searchBox";
import ContactList from "./ContactList/contactList";
import contacts from "../contacts.json";
import { useEffect, useState } from "react";



const getSaveContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  return savedContacts ? JSON.parse(savedContacts) : [
  {
    "id":"id-1",
    "name":"Rosie Simpson",
    "number":"459-12-56"
  },
  {
    "id":"id-2",
    "name":"Hermione Kline",
    "number":"443-89-12"
  },
  {
    "id":"id-3",
    "name":"Eden Clements",
    "number":"645-17-79"
  },
  {
    "id":"id-4",
    "name":"Annie Copeland",
    "number":"227-91-26"
  }
];
};

export default function App() {

  const [contact, setContact] = useState(getSaveContacts);
  const [filter, setFilter] = useState('')

  const visibleContact = contact.filter((cont) =>
    cont.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  const addContact = (newContact) => {
    setContact((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContact(prevContacts => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contact))
  }, [contact]);
  
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onType={setFilter} />
      <ContactList contacts={visibleContact} onDelete={deleteContact} />
    </div>

  );
}