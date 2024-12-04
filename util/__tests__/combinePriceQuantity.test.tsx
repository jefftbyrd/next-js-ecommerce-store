import { test } from '@jest/globals';
import { combinePriceQuantity } from '../combinePriceQuantity';

test('add 2 numbers', () => {
  expect(add(1, 1)).toBe(2);
});

test('error when args are not numbers', () => {
  expect(() => add(1, '1')).toThrow('Pass only numbers!');
});
