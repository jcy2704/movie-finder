import axios from 'axios';
import env from 'react-dotenv';

export const topTrending = loader => {
  axios.get(`${env.TRENDING}?api_key=${env.API_KEY}`)
    .then(response => {
      loader(response.data.results[0]);
    });
};

export const Popular = loader => {
  axios.get(`${env.POPULAR}?api_key=${env.API_KEY}`)
    .then(response => {
      loader(response.data.results);
    });
};
