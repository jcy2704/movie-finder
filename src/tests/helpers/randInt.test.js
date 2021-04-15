import randInt from '../../helpers/randInt';

test('return random int', () => {
  expect(randInt(0, 10)).toEqual(expect.any(Number));
});
