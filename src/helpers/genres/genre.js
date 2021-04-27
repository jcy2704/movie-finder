import genres from './genreslist';

const GenreList = ids => {
  const arr = [];

  if (ids) {
    ids.forEach(id => {
      genres.filter(obj => obj.id === id).map(gen => arr.push(gen.name));
    });
  }

  return arr;
};

export default GenreList;
