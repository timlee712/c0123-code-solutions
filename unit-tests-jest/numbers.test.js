import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers.js';

describe('evenNumbers()', () => {
  it('should return an array containing only even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
});
describe('toDollars', () => {
  it('formats the amount in dollars and cents', () => {
    const amount = 123.45;
    const result = toDollars(amount);
    expect(result).toBe('$123.45');
  });
});

describe('divideBy', () => {
  it('returns a new array with each element divided by the divisor', () => {
    const numbers = [4, 8, 12];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([2, 4, 6]);
    expect(numbers).toEqual([4, 8, 12]);
  });
});

describe('multiplyBy', () => {
  it('modifies the object by multiplying each number value by the multiplier', () => {
    const obj = { a: 5, b: 'hello', c: 7 };
    const multiplier = 3;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ a: 15, b: 'hello', c: 21 });
    expect(obj).toEqual({ a: 15, b: 'hello', c: 21 });
  });
});
