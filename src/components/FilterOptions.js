/* eslint-disable max-len */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addFilter, removeFilter } from '../actions';
import genrelist from '../helpers/genres/genreslist';
import Checkbox from './Checkbox';

const FilterOptions = ({ filters, addFilters, removeFilters }) => {
  const handleChange = e => {
    const { id, checked } = e.target;
    return checked ? addFilters(id) : removeFilters(id);
  };

  return (
    <>
      <form>
        <fieldset className="d-flex flex-wrap justify-content-between">
          {genrelist.map(genre => (
            <Checkbox key={genre.id} name={genre.name} id={genre.id} handleChange={handleChange} checked={id => (!!filters.includes(id))} />
          ))}
        </fieldset>
      </form>
    </>
  );
};

FilterOptions.propTypes = {
  filters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  addFilters: PropTypes.func.isRequired,
  removeFilters: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ filters: state.filter });

const mapDispatchToProps = dispatch => ({
  addFilters: filter => dispatch(addFilter(filter)),
  removeFilters: filter => dispatch(removeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterOptions);
