import { GET_TRENDING, GET_VIDEOS } from '../actions/index';

const TrendingReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TRENDING:
      return action.movie;
    case GET_VIDEOS:
      return { ...state, trailer: action.trailer };
    default:
      return state;
  }
};

export default TrendingReducer;
