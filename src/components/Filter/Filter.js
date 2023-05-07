import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Filter.css'

const Filter = (value, onChangeFilter) => {
  
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChangeFilter(newValue);
  };
  
        return (
      <div className="Filter">
        <p>Find contacts by name</p>
        <input type="text" value={inputValue} onChange={handleChange}/>
      </div>
    );
  }
  export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};