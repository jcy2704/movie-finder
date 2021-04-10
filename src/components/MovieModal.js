/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import BigHero from './BigHero';
import GenreList from '../helpers/genres/genre';
import '../styles/moviemodal/MovieModal.css';

const MovieModal = ({
  switcher, showModal, movie, video,
}) => {
  const {
    overview, poster_path: poster, title, vote_average: rating, genre_ids: genreIds, backdrop_path: backDrop,
  } = movie;

  Modal.setAppElement('body');

  return (
    <Modal closeTimeoutMS={500} isOpen={showModal} className="movie-modal-content" overlayClassName="modal-overlay" onRequestClose={switcher} parentSelector={() => document.querySelector('#modalsContainer')}>
      <BigHero title={title} genres={GenreList(genreIds)} backDrop={backDrop} rating={rating} poster={poster} description={overview} video={video} />
      <div>
        <button type="button" className="close-movie-icon position-absolute" onClick={switcher}><FontAwesomeIcon icon={faTimes}>Close</FontAwesomeIcon></button>
      </div>
    </Modal>
  );
};

MovieModal.propTypes = {
  switcher: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  movie: PropTypes.oneOfType([PropTypes.object]).isRequired,
  video: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default MovieModal;
