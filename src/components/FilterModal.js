import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import '../styles/filtermodal/FilterModal.css';

const FilterModal = () => {
  const [showModal, setShowModal] = useState(false);

  const switcher = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button type="button" onClick={switcher}><FontAwesomeIcon icon={faFilter}>Filter</FontAwesomeIcon></button>

      <Modal isOpen={showModal} className="filter-modal-content" overlayClassName="modal-overlay" onRequestClose={switcher}>
        <h1>Filter</h1>
      </Modal>
    </div>
  );
};

export default FilterModal;
