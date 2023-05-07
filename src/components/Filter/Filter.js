import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

const Filter = ({ onChangeFilter, contacts }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (contacts && contacts.length > 0) {
      const sortedContacts = contacts.sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );
      localStorage.setItem('contacts', JSON.stringify(sortedContacts));
    }
  }, [contacts]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChangeFilter(newValue);
  };

  return (
    <div className="Filter">
      <p>Find contacts by name</p>
        <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  contacts: PropTypes.array,
};

export default Filter;