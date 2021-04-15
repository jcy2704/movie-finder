import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navigation/Navigation.css';
import FilterModal from '../containers/FilterModal';

const Navigation = () => {
  const location = useLocation();

  return (
    <>
      <div className={`navigation-cont justify-content-between ${location.pathname.includes('/movie') ? 'd-none' : 'd-flex'}`}>
        <div className="navigation">
          <Link to="/">Popular</Link>
          <Link to="/top">Top Rated</Link>
          <Link to="/upcoming">Upcoming</Link>
        </div>
        <FilterModal />
      </div>
    </>
  );
};

export default Navigation;
