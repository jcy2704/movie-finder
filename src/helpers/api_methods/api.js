/* eslint-disable max-len */
import axios from 'axios';
import randInt from '../randInt';

const Videos = async (id, loader, setLoading) => {
  await axios.get(`${process.env.REACT_APP_DETAILS}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      const [vid] = response.data.results.filter(obj => obj.site === 'YouTube' && obj.type === 'Trailer');
      loader(vid);
      setLoading(false);
    });
};

export const topTrending = async (loader, setLoading, trailer) => {
  await axios.get(`${process.env.REACT_APP_TRENDING}?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      const movie = randInt(0, 10);
      loader(response.data.results[movie]);
      Videos(response.data.results[movie].id, trailer, setLoading);
    });
};

export const PopularMovies = async (loader, setLoading) => {
  await axios.get(`${process.env.REACT_APP_POPULAR}?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      loader(response.data.results);
      // axios.get(`${process.env.REACT_APP_POPULAR}?api_key=${process.env.REACT_APP_API_KEY}&page=2`)
      //   .then(response => loader(response.data.results));
      // axios.get(`${process.env.REACT_APP_POPULAR}?api_key=${process.env.REACT_APP_API_KEY}&page=3`)
      //   .then(response => loader(response.data.results));
      setLoading(false);
    });
};

export const TopRatedMovies = async (loader, setLoading) => {
  await axios.get(`${process.env.REACT_APP_TOP_RATED}?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      loader(response.data.results);
      // axios.get(`${process.env.REACT_APP_TOP_RATED}?api_key=${process.env.REACT_APP_API_KEY}&page=2`)
      //   .then(response => loader(response.data.results));
      // axios.get(`${process.env.REACT_APP_TOP_RATED}?api_key=${process.env.REACT_APP_API_KEY}&page=3`)
      //   .then(response => loader(response.data.results));
      setLoading(false);
    });
};

export const UpcomingMovies = async (loader, setLoading) => {
  await axios.get(`${process.env.REACT_APP_UPCOMING}?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      loader(response.data.results);
      // axios.get(`${process.env.REACT_APP_UPCOMING}?api_key=${process.env.REACT_APP_API_KEY}&page=2`)
      //   .then(response => loader(response.data.results));
      // axios.get(`${process.env.REACT_APP_UPCOMING}?api_key=${process.env.REACT_APP_API_KEY}&page=3`)
      //   .then(response => loader(response.data.results));
      setLoading(false);
    });
};
