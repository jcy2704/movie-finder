import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faTimes } from '@fortawesome/free-solid-svg-icons';
import { addFilter, removeFilter, resetFilter } from '../actions';
import '../styles/filtermodal/FilterModal.css';
import FilterOptions from '../components/FilterOptions';

const FilterModal = ({
  filters, addFilters, removeFilters, resetFilters,
}) => {
  const [showModal, setShowModal] = useState(false);

  const switcher = () => {
    setShowModal(!showModal);
  };

  const handleChange = e => {
    const { id, checked } = e.target;
    return checked ? addFilters(id) : removeFilters(id);
  };

  const isChecked = id => !!filters.includes(id);

  const resetFilterHandler = () => {
    resetFilters();
    switcher();
  };

  return (
    <div>
      <button type="button" onClick={switcher}><FontAwesomeIcon icon={faFilter}>Filter</FontAwesomeIcon></button>

      <Modal closeTimeoutMS={500} isOpen={showModal} className="filter-modal-content" overlayClassName="modal-overlay" onRequestClose={switcher} parentSelector={() => document.querySelector('#modalsContainer')}>
        <div className="content-container position-relative">
          <button type="button" className="close-icon position-absolute" onClick={switcher}><FontAwesomeIcon icon={faTimes}>Close</FontAwesomeIcon></button>

          <div className="d-flex justify-content-between">
            <h1>Filter</h1>
            <button className="reset-btn" onClick={resetFilterHandler} type="button">RESET</button>
          </div>
        </div>

        <FilterOptions handleChange={handleChange} isChecked={isChecked} />
      </Modal>
    </div>
  );
};

FilterModal.propTypes = {
  filters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  addFilters: PropTypes.func.isRequired,
  removeFilters: PropTypes.func.isRequired,
  resetFilters: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ filters: state.filter });

const mapDispatchToProps = dispatch => ({
  addFilters: filter => dispatch(addFilter(filter)),
  removeFilters: filter => dispatch(removeFilter(filter)),
  resetFilters: filter => dispatch(resetFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterModal);
