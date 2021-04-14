import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/navigation/Navigation.css';
import FilterModal from '../containers/FilterModal';

const Navigation = ({ location }) => (
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

Navigation.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default withRouter(Navigation);
