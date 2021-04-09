/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import BigHero from '../components/BigHero';
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
    <Modal closeTimeoutMS={500} isOpen={showModal} className="movie-modal-content" overlayClassName="modal-overlay" onRequestClose={switcher}>
      <BigHero title={title} genres={GenreList(genreIds)} backDrop={backDrop} rating={rating} poster={poster} description={overview} video={video} />
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
