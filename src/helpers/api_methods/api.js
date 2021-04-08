import axios from 'axios';
import env from 'react-dotenv';
import randInt from '../randInt';

export const topTrending = loader => {
  axios.get(`${env.TRENDING}?api_key=${env.API_KEY}`)
    .then(response => {
      const movie = randInt(0, 10);
      loader(response.data.results[movie]);
    });
};

export const Popular = loader => {
  axios.get(`${env.POPULAR}?api_key=${env.API_KEY}`)
    .then(response => {
      loader(response.data.results);
    });
};
