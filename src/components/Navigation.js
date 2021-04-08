import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <>
    <Link to="/">Popular</Link>
    <Link to="/top">Top Rated</Link>
    <Link to="/upcoming">Upcoming</Link>
  </>
);

export default Navigation;
