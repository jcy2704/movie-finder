import React from 'react';
import PropTypes from 'prop-types';
import env from 'react-dotenv';
import '../styles/bighero/BigHero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlay } from '@fortawesome/free-solid-svg-icons';

const BigHero = ({
  title, genres, description, backDrop, poster, rating, home, video,
}) => (
  <div className={`position-relative hero ${home ? 'home-screen' : ''}`}>
    <div className="hero-img">
      <img className="w-100 backdrop" src={`${env.IMG_URL}${backDrop}`} alt="BackDrop" />
    </div>

    <div className="position-absolute info-cont d-flex">
      <img src={`${env.POSTER_URL}${poster}`} alt="Poster" />

      <div className="w-75 text-justify info">
        <h1 className="title">{title}</h1>

        <div className="d-flex genres">
          {genres.map(genre => <p key={genre}>{genre}</p>)}
          <p className="rating">
            <FontAwesomeIcon className="rating-star" icon={faStar} />
            {rating}
          </p>
        </div>

        <p className="desc">{description}</p>

        <div className="trailer-cont w-25">
          <a href={`https://www.youtube.com/watch?v=${video.key}`} className="trailer d-flex align-items-center" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="play-icon" icon={faPlay} />
            Trailer
          </a>
        </div>
      </div>
    </div>
  </div>
);

BigHero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backDrop: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  home: PropTypes.bool.isRequired,
  video: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default BigHero;
