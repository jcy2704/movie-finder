import GenreList from '../../helpers/genres/genre';

test('return filtered genres', () => {
  const result = GenreList([28]);
  expect(result).toBeInstanceOf(Array);
  expect(result[0]).toEqual('Action');
});
