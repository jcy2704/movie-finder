export const GET_TRENDING = 'GET_TRENDING';
export const GET_UPCOMING = 'GET_UPCOMING';
export const GET_POPULAR = 'GET_POPULAR';
export const GET_TOP_RATED = 'GET_TOP_RATED';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const GET_VIDEOS = 'GET_VIDEOS';

export const loadTrending = movie => ({ type: GET_TRENDING, movie });
export const loadVideos = trailer => ({ type: GET_VIDEOS, trailer });
export const loadPopular = movies => ({ type: GET_POPULAR, movies });
export const loadTopRated = movies => ({ type: GET_TOP_RATED, movies });
export const loadUpcoming = movies => ({ type: GET_UPCOMING, movies });
export const changeFilter = filter => ({ type: CHANGE_FILTER, filter });
