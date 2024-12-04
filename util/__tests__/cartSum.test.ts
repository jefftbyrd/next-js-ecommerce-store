import { expect, test } from '@jest/globals';
import { cartTotal } from '../cartTotal';

const testCart = [
  {
    id: 1,
    quantity: 3,
    price: 400,
  },
];

const testCartTwo = [
  {
    quantity: 4,
    price: 5,
  },
  {
    quantity: 3,
    price: 10,
  },
];

test('test CartTotal function', () => {
  expect(cartTotal(testCart)).toBe(1200);
  expect(cartTotal(testCartTwo)).toBe(50);
});
