/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/main/Main.css';
import { topTrending } from '../helpers/api_methods/api';
import { loadTrending } from '../actions';
import BigHero from '../components/BigHero';

const Trending = ({ movie, loader }) => {
  useEffect(() => {
    topTrending(loader);
  }, [loader]);

  const {
    title, backdrop_path: backDrop, poster_path: poster, vote_average: rating, overview,
  } = movie;

  return (
    <>
      <BigHero title={title} backDrop={backDrop} poster={poster} rating={rating} description={overview} />
    </>
  );
};

Trending.propTypes = {
  movie: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  loader: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ movie: state.movies });

const mapDispatchToProps = dispatch => ({
  loader: movie => dispatch(loadTrending(movie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
