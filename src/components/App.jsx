import ContactForm from "./ContactForm/contactForm";
import SearchBox from "./SeachBox/searchBox";
import ContactList from "./ContactList/contactList";
import contacts from "../contacts.json";
import { useState } from "react";
import { nanoid } from 'nanoid';


export default function App() {
  const [contact, setContact] = useState(contacts)
  const [filter, setFilter] = useState('')
  
  const addContact = (newContact) => {
    setContact((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const visibleContact = contact.filter((cont) =>
    cont.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onType={setFilter} />
      <ContactList contacts={visibleContact} />
    </div>

  );
}