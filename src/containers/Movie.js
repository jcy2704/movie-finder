/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import BigHero from '../components/BigHero';
import Loading from '../components/Loading';
import { currentMovie } from '../actions';
import '../styles/movie/Movie.css';

const Movie = ({
  movie, addMovie,
}) => {
  const [loading, setLoading] = useState(true);
  const [videoURL, setVideoURL] = useState({
    key: '',
  });

  const { id: paramsID } = useParams();
  const history = useHistory();

  useEffect(async () => {
    await axios.get(`${process.env.REACT_APP_DETAILS}/${paramsID}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`)
      .then(response => {
        addMovie(response.data);
        const [vid] = response.data.videos.results.filter(obj => obj.site === 'YouTube' && obj.type === 'Trailer');
        setVideoURL(vid);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  const {
    poster_path: poster, title, vote_average: rating, genres, backdrop_path: backDrop, overview,
  } = movie;

  return (
    <>
      <div className="position-relative">
        <BigHero title={title} rating={rating} genres={genres} poster={poster} video={videoURL} backDrop={backDrop} description={overview} home isMovieGenre />
        <button type="button" className="position-absolute back-btn" onClick={() => history.goBack()}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </div>
    </>
  );
};

Movie.propTypes = {
  movie: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  addMovie: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ movie: state.movies });

const mapDipatchToProps = dispatch => ({
  addMovie: movie => dispatch(currentMovie(movie)),
});

export default connect(mapStateToProps, mapDipatchToProps)(Movie);
