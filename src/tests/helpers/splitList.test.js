import splitList from '../../helpers/splitList';
import genrelist from '../../helpers/genres/genreslist';

test('list splitted', () => {
  const result = splitList(genrelist);
  expect(result).toBeInstanceOf(Array);
  expect(result.length).toEqual(7);
  expect(result[0]).toBeInstanceOf(Array);
});
