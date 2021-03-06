/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/bighero/BigHero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlay } from '@fortawesome/free-solid-svg-icons';

const BigHero = ({
  title, genres, description, backDrop, poster, rating, home, video, ismovie, isMovieGenre,
}) => {
  const genresInMoviePath = () => {
    if (isMovieGenre) {
      return genres.map(genre => (
        <p key={genre.id}>
          <button type="button" name={genre.name}>
            {genre.name}
          </button>
        </p>
      ));
    }

    return genres.map(genre => (
      <p key={genre}>
        <button type="button" name={genre}>
          {genre}
        </button>
      </p>
    ));
  };

  const isThereVideo = () => {
    if (video !== undefined) {
      return (
        <div className="trailer-cont w-25">
          <a href={`https://www.youtube.com/watch?v=${video.key}`} className="trailer d-flex align-items-center" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="play-icon" icon={faPlay} />
            Trailer
          </a>
        </div>
      );
    }

    return '';
  };

  return (
    <>
      <div className={`position-relative hero ${home ? 'home-screen' : ''} ${ismovie ? 'd-none' : ''}`}>
        <div className="hero-img">
          <img className="w-100 backdrop" src={`${process.env.REACT_APP_IMG_URL}${backDrop}`} alt="BackDrop" />
        </div>

        <div className="position-absolute info-cont d-flex">
          <img src={`${process.env.REACT_APP_POSTER_URL}${poster}`} alt="Poster" />

          <div className="w-75 text-justify info">
            <h1 className="title">{title}</h1>

            <div className="d-flex genres">
              {genresInMoviePath()}
              <p className="rating">
                <FontAwesomeIcon className="rating-star" icon={faStar} />
                {rating}
              </p>
            </div>

            <p className="desc">{description}</p>

            {isThereVideo()}
          </div>
        </div>
      </div>
    </>
  );
};

BigHero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backDrop: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.arrayOf(PropTypes.object)]).isRequired,
  rating: PropTypes.number.isRequired,
  home: PropTypes.bool,
  video: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  ismovie: PropTypes.bool,
  isMovieGenre: PropTypes.bool,
};

BigHero.defaultProps = {
  home: false,
  ismovie: false,
  isMovieGenre: false,
};

export default BigHero;
