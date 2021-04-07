import axios from 'axios';
import env from 'react-dotenv';

export const topTrending = () => {
  axios.get(env.TRENDING)
    .then((response) => console.log(response.data));
};

export const Popular = () => {

};
