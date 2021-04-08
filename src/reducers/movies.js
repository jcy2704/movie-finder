import {
  GET_UPCOMING, GET_POPULAR, GET_TOP_RATED,
} from '../actions';

const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_POPULAR:
      return action.movies;
    case GET_TOP_RATED:
      return action.movies;
    case GET_UPCOMING:
      return action.movies;
    default:
      return state;
  }
};

export default moviesReducer;
