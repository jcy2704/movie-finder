/* eslint-disable max-len */
import axios from 'axios';
import randInt from '../randInt';

const Videos = (id, loader, setLoading) => {
  axios.get(`${process.env.REACT_APP_DETAILS}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      const [vid] = response.data.results.filter(obj => obj.site === 'YouTube' && obj.type === 'Trailer');
      loader(vid);
      setLoading(false);
    });
};

export const topTrending = (loader, setLoading, trailer) => {
  axios.get(`${process.env.REACT_APP_TRENDING}?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      const movie = randInt(0, 10);
      loader(response.data.results[movie]);
      Videos(response.data.results[movie].id, trailer, setLoading);
    });
};

export const PopularMovies = (loader, setLoading) => {
  axios.get(`${process.env.REACT_APP_POPULAR}?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      loader(response.data.results);
      // axios.get(`${process.env.REACT_APP_POPULAR}?api_key=${process.env.REACT_APP_API_KEY}&page=2`)
      //   .then(response => loader(response.data.results));
      // axios.get(`${process.env.REACT_APP_POPULAR}?api_key=${process.env.REACT_APP_API_KEY}&page=3`)
      //   .then(response => loader(response.data.results));
      setLoading(false);
    });
};

export const TopRatedMovies = (loader, setLoading) => {
  axios.get(`${process.env.REACT_APP_TOP_RATED}?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      loader(response.data.results);
      // axios.get(`${process.env.REACT_APP_TOP_RATED}?api_key=${process.env.REACT_APP_API_KEY}&page=2`)
      //   .then(response => loader(response.data.results));
      // axios.get(`${process.env.REACT_APP_TOP_RATED}?api_key=${process.env.REACT_APP_API_KEY}&page=3`)
      //   .then(response => loader(response.data.results));
      setLoading(false);
    });
};

export const UpcomingMovies = (loader, setLoading) => {
  axios.get(`${process.env.REACT_APP_UPCOMING}?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      loader(response.data.results);
      // axios.get(`${process.env.REACT_APP_UPCOMING}?api_key=${process.env.REACT_APP_API_KEY}&page=2`)
      //   .then(response => loader(response.data.results));
      // axios.get(`${process.env.REACT_APP_UPCOMING}?api_key=${process.env.REACT_APP_API_KEY}&page=3`)
      //   .then(response => loader(response.data.results));
      setLoading(false);
    });
};
