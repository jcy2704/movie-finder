import axios from 'axios';
import env from 'react-dotenv';

export const topTrending = () => {
  axios.get(`${env.TRENDING}?api_key=${env.API_KEY}`)
    .then(response => {
      console.log(response.data);
    });
};

export const Popular = () => {

};
