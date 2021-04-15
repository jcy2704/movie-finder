import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PopularMovies } from '../helpers/api_methods/api';
import { addMovies, loadPopular } from '../actions';
import Loading from '../components/Loading';
import '../styles/catalogue/Catalogue.css';
import MoviePoster from '../components/MoviePoster';
import filteredMovies from '../helpers/filter';

const PopularCatalogue = ({
  movies, loader, filters, adder,
}) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    PopularMovies(loader, setLoading, adder);
  }, [loader]);

  if (isLoading) {
    return <Loading />;
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
  filters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  movies: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  loader: PropTypes.func.isRequired,
  adder: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ movies: state.movies, filters: state.filter });

const mapDispatchToProps = dispatch => ({
  loader: movies => dispatch(loadPopular(movies)),
  adder: movies => dispatch(addMovies(movies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PopularCatalogue);
