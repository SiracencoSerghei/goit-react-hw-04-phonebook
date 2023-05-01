import { React, Component } from 'react';
import PropTypes from 'prop-types';
import './ContactForm.css';

export default class ContactForm extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    onAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = (type, e) => {
    const { contacts } = this.props;
    if (type === 'name') {
      const contactInState = contacts.find(
        contact => contact.name.toLowerCase() === e.target.value.toLowerCase()
      );
      if (contactInState) {
        alert(`${contactInState.name} is already in contacts!`);
      }
    } else if (type === 'number') {
      const contactWithNumber = contacts.find(
        contact => contact.number === e.target.value
      );
      if (contactWithNumber) {
        alert(`The phone number ${e.target.value} already exists in the phonebook for ${contactWithNumber.name}!`);
      }
    }
    this.setState({ [type]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts, onAddContact } = this.props;
    const contactInState = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  
    if (contactInState) {
      alert(`${contactInState.name} is already in contacts!
      ${contactInState.name} is not saved in the phonebook!`);
      return;
    } else {
      onAddContact(name, number);
  
      this.setState({
        name: '',
        number: '',
      });
        alert(`${name} has been added to contacts!`);
    }
  };

  render() {
    const { name, number } = this.state;
    return (
      <div className="formWrapper">
        <form onSubmit={this.handleSubmit}>
          <h3>Name</h3>
          <label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={e => this.handleChange('name', e)}
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
              onChange={e => this.handleChange('number', e)}
            />
          </label>
          <br />
          <button type="submit" className="buttonForm">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
