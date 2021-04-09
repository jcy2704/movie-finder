/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import genrelist from '../helpers/genres/genreslist';
import Checkbox from './Checkbox';

const FilterOptions = ({ handleChange, isChecked }) => (
  <>
    <form>
      <fieldset className="d-flex flex-wrap justify-content-between">
        {genrelist.map(genre => (
          <Checkbox key={genre.id} name={genre.name} id={genre.id} handleChange={handleChange} checked={isChecked} />
        ))}
      </fieldset>
    </form>
  </>
);

FilterOptions.propTypes = {
  handleChange: PropTypes.func.isRequired,
  isChecked: PropTypes.func.isRequired,
};

export default FilterOptions;
