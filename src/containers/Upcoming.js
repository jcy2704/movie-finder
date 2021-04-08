import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { UpcomingMovies } from '../helpers/api_methods/api';
import { loadUpcoming } from '../actions';
import Loading from '../components/Loading';
import '../styles/catalogue/Catalogue.css';
import MoviePoster from '../components/MoviePoster';

const PopularCatalogue = ({ movies, loader }) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    UpcomingMovies(loader, setLoading);
  }, [loader]);

  if (isLoading) {
    return <Loading nothing />;
  }

  return (
    <ul className="catalogue-cont d-flex justify-content-center flex-wrap">
      {movies.map(movie => (
        <MoviePoster key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

PopularCatalogue.propTypes = {
  movies: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  loader: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ movies: state.movies });

const mapDispatchToProps = dispatch => ({
  loader: movies => dispatch(loadUpcoming(movies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PopularCatalogue);
