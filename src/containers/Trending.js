import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/main/Main.css';
import { topTrending } from '../helpers/api_methods/api';
import { loadTrending } from '../actions';

const Trending = ({ movie, loader }) => {
  useEffect(() => {
    topTrending(loader);
  }, [loader]);

  return (
    <>
      <div className="App">
        <header className="App-header">
          {movie.title}
        </header>
      </div>
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
