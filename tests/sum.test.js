import { sum } from '../functions/sum';
const sumTotal = sum;

test('adds 1 + 2 to equal 3', () => {
  expect(sumTotal(1, 2)).toBe(3);
});
