import { combineReducers } from 'redux';
import movies from './movies';
import filter from './filter';
import trending from './trending';

export default combineReducers({ movies, filter, trending });
