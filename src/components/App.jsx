import React, { useState, useEffect } from 'react';

import { nanoid } from 'nanoid'; // npm i nanoid
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import './App.css';


export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts((prevContacts) => [...prevContacts, newContact]);
    alert(`${name} has been added to contacts!`);
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

  return (
    <>
      <div className="Container">
        <section title="Phonebook" className="Section">
          <h1>Phonebook</h1>
          <ContactForm onAddContact={addContact} />
        </section>
        <section title="Contacts" className="Section">
          <h2>Contacts</h2>
          <Filter onChangeFilter={handleChangeFilter} />
          <ContactList
            getFilteredContacts={getFilteredContacts}
            onRemove={handleRemove}
          />
        </section>
      </div>
    </>
  );
}