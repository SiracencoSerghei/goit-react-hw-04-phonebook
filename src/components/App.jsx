import React, { useState, useEffect } from 'react';

import { nanoid } from 'nanoid'; // npm i nanoid
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import './App.css';


export default function App() {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleChangeFilter = (filter) => {
    setFilter(filter);
  };

  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleRemove = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter(({ id }) => id !== contactId)
    );
  };

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);
  useEffect(()=>{
    if(contacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts))
    }
  }, []);
 
  return (
    <>
      <div className="Container">
        <section title="Phonebook" className="Section">
          <h1>Phonebook</h1>
          <ContactForm contacts={contacts} onAddContact={addContact} />
        </section>
        <section title="Contacts" className="Section">
          <h2>Contacts</h2>
          <Filter value={filter} onChangeFilter={handleChangeFilter} />
          <ContactList
            filteredContacts={getFilteredContacts()}
            onRemove={handleRemove}
          />
        </section>
      </div>
    </>
  );
}

