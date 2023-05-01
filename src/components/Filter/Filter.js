import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css'

export default class Filter extends React.Component {
  static defaultProps = {
    value: '',
  }

  static propTypes = {
    value: PropTypes.string,
    onChangeFilter: PropTypes.func.isRequired,
  }

  render() {
    const { value, onChangeFilter } = this.props;

    return (
      <div className="Filter">
        <p>Find contacts by name</p>
        <input type="text" value={value} onChange={e => onChangeFilter(e.target.value)}/>
      </div>
    );
  }
}