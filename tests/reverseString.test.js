const { reverseString } = require('../functions/reverseString');

test('reverses string', () => {
  expect(reverseString('lloyd')).toBe('dyoll');
});
