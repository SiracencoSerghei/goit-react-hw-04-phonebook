import React from 'react';
import PropTypes from 'prop-types';
import {ContactListItem} from './ContactItem';
import './ContactList.css';


const ContactList = ({filteredContacts, onRemove}) => {
  return (
      filteredContacts.length > 0 && (
          <ul className="ContactsList">
              {filteredContacts.map(({id, name, number}) => (
                  <ContactListItem key={id} name={name} number={number} onClickRemove={() => onRemove(id)} />
              ))}
          </ul>
      )
  )
}
export default ContactList;

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
      PropTypes.exact({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,
      })
  ),
  onRemove: PropTypes.func.isRequired,
}
