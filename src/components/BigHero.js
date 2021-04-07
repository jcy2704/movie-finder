import React from 'react';
import PropTypes from 'prop-types';
import env from 'react-dotenv';

const BigHero = ({
  title, genres, description, backDrop, poster, rating,
}) => (
  <div>
    <img src={`${env.IMG_URL}${backDrop}`} alt="BackDrop" />
    <div>
      <img src={`${env.IMG_URL}${poster}`} alt="Poster" />
      <div>
        <h1>{title}</h1>
        <p>{genres}</p>
        <p>{rating}</p>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

BigHero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backDrop: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

export default BigHero;
