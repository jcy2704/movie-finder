import { ADD_FILTER, REMOVE_FILTER, RESET_FILTER } from '../actions';

const filterReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FILTER:
      return [...state, action.filter];
    case REMOVE_FILTER:
      return state.filter(idx => idx !== action.filter);
    case RESET_FILTER:
      return [];
    default:
      return state;
  }
};

export default filterReducer;
