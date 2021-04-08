import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PopularMovies } from '../helpers/api_methods/api';
import { loadPopular, loadVideos } from '../actions';
import Loading from '../components/Loading';

const PopularCatalogue = () => {

};

const mapStateToProps = state => ({ movies: state.movies })
}

export default PopularCatalogue;
