import axios from 'axios';

export default async (id, setVideoURL) => {
  await axios.get(`${process.env.REACT_APP_DETAILS}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      const [vid] = response.data.results.filter(obj => obj.site === 'YouTube' && obj.type === 'Trailer');
      setVideoURL(vid);
    });
};
