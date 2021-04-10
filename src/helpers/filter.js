const filteredMovies = (movies, filters) => {
  if (!filters.length) {
    return movies;
  }

  return movies.filter(movie => movie.genre_ids.some(id => filters.includes(id.toString())));
};

export default filteredMovies;
