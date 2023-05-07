import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ContactForm.css';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (type, e) => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
  
    switch (type) {
      case 'name':
        const contactInState = savedContacts.find(
          (contact) => contact.name.toLowerCase() === e.target.value.toLowerCase()
        );
        if (contactInState) {
          alert(`${contactInState.name} is already in contacts!`);
          setName('');
          // setNumber('');
        } else {
          setName(e.target.value);
        }
        break;
  
      case 'number':
        const contactWithNumber = savedContacts.find(
          (contact) => contact.number === e.target.value
        );
        if (contactWithNumber) {
          alert(
            `The phone number ${e.target.value} already exists in the phonebook for ${contactWithNumber.name}!`
          );
          // setName('');
          setNumber('');
        } else {
          setNumber(e.target.value);
        }
        break;
  
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact(name, number);
    setName('');
    setNumber('');
    // const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    // const contactInState = savedContacts.find(
    //   (contact) => contact.name.toLowerCase() === name.toLowerCase()
    // );

    // if (contactInState) {
    //   alert(`${contactInState.name} is already in contacts!\n${contactInState.name} is not saved in the phonebook!`);
    //   setName('');
    //   setNumber('');
    //   return;
    // } else {
    //   onAddContact(name, number);
    //   setName('');
    //   setNumber('');
    // }
  };

  return (
    <div className="formWrapper">
      <form onSubmit={handleSubmit}>
        <h3>Name</h3>
        <label>
        <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  value={name}
  onChange={(e) => handleChange('name', e)}
/>
        </label>
        <br />
        <h3>Number</h3>
        <label>
        <input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  value={number}
  onChange={(e) => handleChange('number', e)}
  disabled={!name} // Disable if name is empty
/>
        </label>
        <br />
        <button
  type="submit"
  className="buttonForm"
  disabled={!name || !number} // Disable if name or number is empty
>
  Add contact
</button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;