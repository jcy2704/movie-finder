import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TopRatedMovies } from '../helpers/api_methods/api';
import { loadTopRated } from '../actions';
import Loading from '../components/Loading';
import '../styles/catalogue/Catalogue.css';
import MoviePoster from './MoviePoster';
import filteredMovies from '../helpers/filter';

const PopularCatalogue = ({ movies, loader, filters }) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    TopRatedMovies(loader, setLoading);
  }, [loader]);

  if (isLoading) {
    return <Loading nothing />;
  }

  return (
    <ul className="catalogue-cont d-flex justify-content-center flex-wrap">
      {filteredMovies(movies, filters).map(movie => (
        <MoviePoster key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

PopularCatalogue.propTypes = {
  movies: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  filters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  loader: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ movies: state.movies, filters: state.filter });

const mapDispatchToProps = dispatch => ({
  loader: movies => dispatch(loadTopRated(movies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PopularCatalogue);
