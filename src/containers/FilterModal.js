import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/filtermodal/FilterModal.css';
import FilterOptions from '../components/FilterOptions';

const FilterModal = () => {
  const [showModal, setShowModal] = useState(false);

  const switcher = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button type="button" onClick={switcher}><FontAwesomeIcon icon={faFilter}>Filter</FontAwesomeIcon></button>

      <Modal closeTimeoutMS={500} isOpen={showModal} className="filter-modal-content" overlayClassName="modal-overlay" onRequestClose={switcher}>
        <div className="content-container position-relative">
          <button type="button" className="close-icon position-absolute" onClick={switcher}><FontAwesomeIcon icon={faTimes}>Close</FontAwesomeIcon></button>

          <h1>Filter</h1>
        </div>

        <FilterOptions />
      </Modal>
    </div>
  );
};

export default FilterModal;
