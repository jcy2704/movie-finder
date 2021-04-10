export const GET_TRENDING = 'GET_TRENDING';
export const GET_UPCOMING = 'GET_UPCOMING';
export const GET_POPULAR = 'GET_POPULAR';
export const GET_TOP_RATED = 'GET_TOP_RATED';
export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const RESET_FILTER = 'RESET_FILTER';
export const ADD_MOVIES = 'ADD_MOVIES';

export const loadTrending = movie => ({ type: GET_TRENDING, movie });
export const addMovies = movies => ({ type: ADD_MOVIES, movies });
export const loadPopular = movies => ({ type: GET_POPULAR, movies });
export const loadTopRated = movies => ({ type: GET_TOP_RATED, movies });
export const loadUpcoming = movies => ({ type: GET_UPCOMING, movies });
export const addFilter = filter => ({ type: ADD_FILTER, filter });
export const removeFilter = filter => ({ type: REMOVE_FILTER, filter });
export const resetFilter = filter => ({ type: RESET_FILTER, filter });
