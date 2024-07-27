import { caesarShift } from '../functions/caesarShift';

test('shifts the string based on the shift value', () => {
  expect(caesarShift('hello', 1)).toBe('ifmmp');
});

test('shifts the string based on the shift value', () => {
  expect(caesarShift('ifmmp', -1)).toBe('hello');
});

test('shifts the string based on the shift value', () => {
  expect(caesarShift('xyz', 3)).toBe('abc');
});

test('shifts the string based on the shift value', () => {
  expect(caesarShift('hElLo', 1)).toBe('iFmMp');
});
