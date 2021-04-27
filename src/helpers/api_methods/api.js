/* eslint-disable max-len */
import axios from 'axios';
import randInt from '../randInt';
import getVideo from '../getVideo';

export const topTrending = async (loader, setLoading, setVideoURL) => {
  await axios.get(`${process.env.REACT_APP_TRENDING}?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      const movie = randInt(0, 10);
      loader(response.data.results[movie]);
      getVideo(response.data.results[movie].id, setVideoURL, setLoading);
    });
};

export const PopularMovies = async (loader, setLoading, adder) => {
  await axios.get(`${process.env.REACT_APP_POPULAR}?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      loader(response.data.results);
      axios.get(`${process.env.REACT_APP_POPULAR}?api_key=${process.env.REACT_APP_API_KEY}&page=2`)
        .then(response => adder(response.data.results));
      axios.get(`${process.env.REACT_APP_POPULAR}?api_key=${process.env.REACT_APP_API_KEY}&page=3`)
        .then(response => adder(response.data.results));
      setLoading(false);
    });
};

export const TopRatedMovies = async (loader, setLoading, adder) => {
  await axios.get(`${process.env.REACT_APP_TOP_RATED}?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      loader(response.data.results);
      axios.get(`${process.env.REACT_APP_TOP_RATED}?api_key=${process.env.REACT_APP_API_KEY}&page=2`)
        .then(response => adder(response.data.results));
      axios.get(`${process.env.REACT_APP_TOP_RATED}?api_key=${process.env.REACT_APP_API_KEY}&page=3`)
        .then(response => adder(response.data.results));
      setLoading(false);
    });
};

export const UpcomingMovies = async (loader, setLoading, adder) => {
  await axios.get(`${process.env.REACT_APP_UPCOMING}?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      loader(response.data.results);
      axios.get(`${process.env.REACT_APP_UPCOMING}?api_key=${process.env.REACT_APP_API_KEY}&page=2`)
        .then(response => adder(response.data.results));
      axios.get(`${process.env.REACT_APP_UPCOMING}?api_key=${process.env.REACT_APP_API_KEY}&page=3`)
        .then(response => adder(response.data.results));
      setLoading(false);
    });
};
