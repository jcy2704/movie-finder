export const GET_MOVIES = 'GET_MOVIES';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const loadMovies = movies => ({ type: GET_MOVIES, movies });
export const changeFilter = filter => ({ type: CHANGE_FILTER, filter });
