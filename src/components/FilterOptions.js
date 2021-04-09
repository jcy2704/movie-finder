/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import genrelist from '../helpers/genres/genreslist';
import Checkbox from './Checkbox';
import splitList from '../helpers/splitList';

const FilterOptions = ({ handleChange, isChecked }) => (
  <>
    <form>
      <fieldset className="container">
        {splitList(genrelist).map(list => (
          <div key={list[0].name} className="row w-100 flex-wrap justify-content-between">
            {list.map(genre => (
              <Checkbox key={genre.id} name={genre.name} id={genre.id} handleChange={handleChange} checked={isChecked} />
            ))}
          </div>
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
