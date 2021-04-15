import filteredMovies from '../../helpers/filter';

const initialState = {
  movies: [
    {
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
    },
    {
      backdrop_path: '/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg',
      genre_ids: [
        28,
        878,
      ],
      id: 399566,
      overview: 'In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.',
      poster_path: '/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
      title: 'Movie',
      vote_average: 8.4,
    },
  ],
  filter: ['28'],
};

test('filtering movies', () => {
  const result = filteredMovies(initialState.movies, initialState.filter);

  expect(result).toBeInstanceOf(Array);
  expect(result.length).toEqual(2);
});
