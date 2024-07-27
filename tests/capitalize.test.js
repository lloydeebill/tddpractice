import { capitalize } from '../functions/capitalize';

test('capitalizes first char of string', () => {
  const input = 'dragon';
  const expectedOutput = `Dragon`;
  expect(capitalize(input)).toBe(expectedOutput);
});
