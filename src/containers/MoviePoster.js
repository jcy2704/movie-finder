import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import GenreList from '../helpers/genres/genre';
import MovieModal from './MovieModal';

const MoviePoster = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [videoURL, setVideoURL] = useState({
    key: '',
  });

  const {
    id, poster_path: poster, title, vote_average: rating, genre_ids: genreIds,
  } = movie;

  const getVideo = async () => {
    await axios.get(`${process.env.REACT_APP_DETAILS}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
        const [vid] = response.data.results.filter(obj => obj.site === 'YouTube' && obj.type === 'Trailer');
        setVideoURL(vid);
      });
  };

  const switcher = () => {
    setShowModal(!showModal);
    if (showModal) {
      getVideo();
    }
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
