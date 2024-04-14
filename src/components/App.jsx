import ContactForm from "./ContactForm/contactForm";
import SearchBox from "./SeachBox/searchBox";
import ContactList from "./ContactList/contactList";
import contacts from "../contacts.json";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState(contacts)
  // const [contact, setContact] = useState()
  
  // const addContact = (newContact) => {
    
  // }
// const visibleContact = 

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox input={input} onType={setInput} />
      <ContactList contacts={contacts} />
    </div>

  );
}