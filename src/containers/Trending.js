/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/main/Main.css';
import { topTrending } from '../helpers/api_methods/api';
import { loadTrending } from '../actions';
import BigHero from '../components/BigHero';
import GenreList from '../helpers/genres/genre';
import Loading from '../components/Loading';

const Trending = ({
  movie, loader, location,
}) => {
  const [isLoading, setLoading] = useState(true);
  const [videoURL, setVideoURL] = useState({
    key: '',
  });

  useEffect(() => {
    topTrending(loader, setLoading, setVideoURL);
  }, [loader]);

  const {
    title, backdrop_path: backDrop, poster_path: poster, vote_average: rating, overview,
  } = movie;

  if (isLoading) {
    return <Loading nothing />;
  }

  const { pathname } = location;

  return (
    <>
      <BigHero title={title} backDrop={backDrop} poster={poster} rating={rating} description={overview} genres={GenreList(movie.genre_ids)} video={videoURL} home ismovie={pathname.includes('/movie/')} />
    </>
  );
};

Trending.propTypes = {
  movie: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  loader: PropTypes.func.isRequired,
  location: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const mapStateToProps = state => ({ movie: state.trending });

const mapDispatchToProps = dispatch => ({
  loader: movie => dispatch(loadTrending(movie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Trending));
