import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { UpcomingMovies } from '../helpers/api_methods/api';
import { addMovies, loadUpcoming } from '../actions';
import Loading from '../components/Loading';
import '../styles/catalogue/Catalogue.css';
import MoviePoster from '../components/MoviePoster';
import filteredMovies from '../helpers/filter';

const UpcomingCatalogue = ({
  movies, loader, filters, adder,
}) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    UpcomingMovies(loader, setLoading, adder);
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

UpcomingCatalogue.propTypes = {
  movies: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  filters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  loader: PropTypes.func.isRequired,
  adder: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ movies: state.movies, filters: state.filter });

const mapDispatchToProps = dispatch => ({
  loader: movies => dispatch(loadUpcoming(movies)),
  adder: movies => dispatch(addMovies(movies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingCatalogue);
