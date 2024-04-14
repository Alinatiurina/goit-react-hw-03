import Contact from "../Contact/contact.jsx";
import css from "./contactList.module.css";

export default function ContactList({contacts}) {
    return (
        <ul>
            {contacts.map((contacts) => (
                <li key={contacts.id}>
                    <Contact contacts={contacts } />
                </li>))}
        </ul>

    );
}