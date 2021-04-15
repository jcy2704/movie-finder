/* eslint-disable max-len */
import React from 'react';
import renderer from 'react-test-renderer';
import BigHero from '../../components/BigHero';
import GenreList from '../../helpers/genres/genre';

const movie = {
  backdrop_path: '/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg',
  genre_ids: [
    28,
    878,
  ],
  id: 399566,
  overview: 'In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.',
  poster_path: '/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
  title: 'Godzilla vs. Kong',
  vote_average: 8.4,
  video: {},
};

it('Renders Big hero component', () => {
  const popular = renderer
    .create(
      <BigHero title={movie.title} backDrop={movie.backdrop_path} description={movie.overview} poster={movie.poster_path} rating={movie.vote_average} genres={GenreList(movie.genre_ids)} video={movie.video} />,
    )
    .toJSON();

  expect(popular).toMatchSnapshot();
});
