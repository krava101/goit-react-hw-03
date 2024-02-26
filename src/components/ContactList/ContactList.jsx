import Contact from "../Contact/Contact";
import css from './ContactList.module.css';


function ContactList({ contacts, search, onDelete }) {
  return (
    <ul className={css.contactList}>
      {
        contacts.filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase()))
          .map((contact) => <Contact key={contact.id} contact={contact} onDelete={onDelete} />)
      }
    </ul>
  )
}

export default ContactList;