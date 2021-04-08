import axios from 'axios';
import env from 'react-dotenv';
import randInt from '../randInt';

const Videos = (id, loader, setLoading) => {
  axios.get(`${env.DETAILS}/${id}/videos?api_key=${env.API_KEY}`)
    .then(response => {
      const [vid] = response.data.results.filter(obj => obj.site === 'YouTube' && obj.type === 'Trailer');
      loader(vid);
      setLoading(false);
    });
};

export const topTrending = (loader, setLoading, trailer) => {
  axios.get(`${env.TRENDING}?api_key=${env.API_KEY}`)
    .then(response => {
      const movie = randInt(0, 10);
      loader(response.data.results[movie]);
      Videos(response.data.results[movie].id, trailer, setLoading);
    });
};

export const PopularMovies = (loader, setLoading) => {
  axios.get(`${env.POPULAR}?api_key=${env.API_KEY}`)
    .then(response => {
      loader(response.data.results);
      setLoading(false);
    });
};
