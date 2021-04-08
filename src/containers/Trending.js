/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/main/Main.css';
import { topTrending } from '../helpers/api_methods/api';
import { loadTrending, loadVideos } from '../actions';
import BigHero from '../components/BigHero';
import GenreList from '../helpers/genres/genre';

const Trending = ({ movie, loader, trailer }) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    topTrending(loader, setLoading, trailer);
  }, [loader]);

  const {
    title, backdrop_path: backDrop, poster_path: poster, vote_average: rating, overview,
  } = movie;

  if (isLoading) {
    return <div />;
  }

  return (
    <>
      <BigHero title={title} backDrop={backDrop} poster={poster} rating={rating} description={overview} genres={GenreList(movie.genre_ids)} video={movie.trailer} home />
    </>
  );
};

Trending.propTypes = {
  movie: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  loader: PropTypes.func.isRequired,
  trailer: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ movie: state.movies });

const mapDispatchToProps = dispatch => ({
  loader: movie => dispatch(loadTrending(movie)),
  trailer: trailer => dispatch(loadVideos(trailer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
