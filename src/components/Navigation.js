import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import '../styles/navigation/Navigation.css';

const Navigation = () => (
  <>
    <div className="navigation-cont d-flex justify-content-between">
      <div className="navigation">
        <Link to="/">Popular</Link>
        <Link to="/top">Top Rated</Link>
        <Link to="/upcoming">Upcoming</Link>
      </div>
      <button type="button"><FontAwesomeIcon icon={faFilter}>Filter</FontAwesomeIcon></button>
    </div>
  </>
);

export default Navigation;
