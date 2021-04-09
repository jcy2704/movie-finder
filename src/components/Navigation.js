import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigation/Navigation.css';
import FilterModal from '../containers/FilterModal';

const Navigation = () => (
  <>
    <div className="navigation-cont d-flex justify-content-between">
      <div className="navigation">
        <Link to="/">Popular</Link>
        <Link to="/top">Top Rated</Link>
        <Link to="/upcoming">Upcoming</Link>
      </div>
      <FilterModal />
    </div>
  </>
);

export default Navigation;
