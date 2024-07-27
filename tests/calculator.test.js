import { Calculator } from '../functions/calculator';

const calculator = new Calculator();

test('adds two values together', () => {
  expect(calculator.add(10, 5)).toBe(15);
});

test('subtracts two values together', () => {
  expect(calculator.subtract(10, 5)).toBe(5);
});

test('multiply two values together', () => {
  expect(calculator.multiply(10, 5)).toBe(50);
});

test('divide two values together', () => {
  expect(calculator.divide(10, 5)).toBe(2);
});
