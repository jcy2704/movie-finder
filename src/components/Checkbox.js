/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({
  id, name, handleChange, checked,
}) => (
  <div className="each-filter col">
    <input type="checkbox" value={name} id={id} onChange={handleChange} defaultChecked={checked(id.toString())} />
    <label htmlFor={name}>{name}</label>
  </div>
);

Checkbox.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  checked: PropTypes.func.isRequired,
};

export default Checkbox;
