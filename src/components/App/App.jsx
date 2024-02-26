import { useEffect, useState } from "react";
import css from './App.module.css';
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
const storageContactsKey = "contacts-info";

const getContacts = () => {
  const contactsData = window.localStorage.getItem(storageContactsKey)
  return contactsData !== null ? JSON.parse(contactsData) : [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]
}

const App = () => {
  const [contacts, setContacts] = useState(getContacts);

  useEffect(() => {
    window.localStorage.setItem(storageContactsKey, JSON.stringify(contacts))
  }, [contacts]);

  const [search, setSearch] = useState('');

  const saveContact = (contact) => {
    setContacts([...contacts, contact])
  } 

  const deleteContact = (contact) => {
    setContacts(contacts.filter(e => e !== contact))
  }

  const handleSearch = (evt) => {
    setSearch(evt.target.value);
  }

  return (
    <div className={css.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm onSave={saveContact} />
      <SearchBox search={search} onSearch={handleSearch} />
      <ContactList contacts={contacts} search={search} onDelete={deleteContact} />
    </div>
  )
}

export default App;