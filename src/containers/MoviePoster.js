import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import GenreList from '../helpers/genres/genre';
import MovieModal from '../components/MovieModal';
import getVideo from '../helpers/getVideo';

const MoviePoster = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [videoURL, setVideoURL] = useState({
    key: '',
  });

  const {
    id, poster_path: poster, title, vote_average: rating, genre_ids: genreIds,
  } = movie;

  const switcher = () => {
    setShowModal(!showModal);
    getVideo(id, setVideoURL);
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
      <MovieModal showModal={showModal} switcher={switcher} movie={movie} video={videoURL} />
    </li>
  );
};

MoviePoster.propTypes = {
  movie: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default MoviePoster;
