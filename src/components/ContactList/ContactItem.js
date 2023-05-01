import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.css';

export const ContactListItem = ({name, number, onClickRemove}) => {
    return (
        <li className="ContactListItem">
            <p>{name}: {number}</p>
            <button type="button" className="ContactsList-button" onClick={onClickRemove}>Delete</button>
        </li>
    )
}

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClickRemove: PropTypes.func.isRequired,
}
