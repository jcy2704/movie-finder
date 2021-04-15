import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import GenreList from '../helpers/genres/genre';

const MoviePoster = ({ movie }) => {
  const {
    id, poster_path: poster, title, vote_average: rating, genre_ids: genreIds,
  } = movie;

  const history = useHistory();

  const switcher = () => {
    history.push(`/movie/${id}`);
  };

  return (
    <li className="single-poster">
      <div role="presentation" onClick={switcher} className="movie position-relative">
        <div className="poster-img">
          <img src={`${process.env.REACT_APP_POSTER_URL}${poster}`} alt="Poster" />
        </div>
        <div className="w-100 info-cont-catalogue position-absolute">
          <div className="info-top d-flex justify-content-between">
            <h3>
              {title}
            </h3>
            <p className="catalogue-rating">
              <FontAwesomeIcon className="rating-star" icon={faStar} />
              {rating}
            </p>
          </div>
          <ul className="catalogue-genres flex-wrap d-flex">
            {GenreList(genreIds).map(genre => (
              <li key={genre}>
                <button type="button" name={genre}>
                  {genre}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

MoviePoster.propTypes = {
  movie: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default MoviePoster;
