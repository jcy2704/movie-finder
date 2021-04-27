import { GET_TRENDING } from '../actions/index';

const TrendingReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TRENDING:
      return action.movie;
    default:
      return state;
  }
};

export default TrendingReducer;
