import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactItem';
import './ContactList.css';

const ContactList = ({ getFilteredContacts, onRemove }) => {
    const filteredContacts = getFilteredContacts();
  return (
    filteredContacts.length > 0 && (
      <ul className="ContactsList">
        {filteredContacts.map(({ id, name, number }) => (
          <ContactListItem key={id} name={name} number={number} onClickRemove={() => onRemove(id)} />
        ))}
      </ul>
    )
  );
};

ContactList.propTypes = {
    getFilteredContacts: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
  };

export default ContactList;