import { fibonacci, binarySearch } from './functions';

describe('fibonacci', () => {
  it('returns the correct n-th Fibonacci number', () => {
    expect(fibonacci(0)).toEqual(0);
    expect(fibonacci(1)).toEqual(1);
    expect(fibonacci(2)).toEqual(1);
    expect(fibonacci(3)).toEqual(2);
    expect(fibonacci(4)).toEqual(3);
    expect(fibonacci(5)).toEqual(5);
    expect(fibonacci(6)).toEqual(8);
    expect(fibonacci(10)).toEqual(55);
  });
});

describe('binarySearch', () => {
  // Tests for various scenarios
  it('should return -1 for empty array or array with one element not matching target', () => {
    expect(binarySearch([], 0)).toBe(-1);
    expect(binarySearch([1], 2)).toBe(-1);
  });

  it('should return the correct index for successful searches', () => {
    expect(binarySearch([1], 1)).toBe(0);

    expect(binarySearch([1, 2], 1)).toBe(0);
    expect(binarySearch([1, 2], 2)).toBe(1);

    expect(binarySearch([1, 2, 3], 1)).toBe(0);
    expect(binarySearch([1, 2, 3], 2)).toBe(1);
    expect(binarySearch([1, 2, 3], 3)).toBe(2);

    expect(binarySearch([1, 2, 3], 2, 1, 1)).toBe(1);
    expect(binarySearch([1, 2, 3, 4], 4, undefined, 3)).toBe(3);
  });

  it('should return -1 for unsuccessful searches', () => {
    expect(binarySearch([1, 2, 4], 3)).toBe(-1);
    expect(binarySearch([1, 2, 4], 5)).toBe(-1);
    expect(binarySearch([1, 2, 4], 0)).toBe(-1);
  });

  // Tests edge cases
  it('should return -1 when start is greater than end', () => {
    expect(binarySearch([1, 2, 3], 2, 2, 1)).toBe(-1);
    expect(binarySearch([1, 2, 3], 4, 1, 0)).toBe(-1);
  });

  it('should return correct index when start equals end and target is the only element', () => {
    expect(binarySearch([1, 2, 3], 2, 1, 1)).toBe(1);
    expect(binarySearch([4, 5], 5, 1, 1)).toBe(1);
  });

  it('should support negative numbers in sorted arrays', () => {
    expect(binarySearch([-3, -2, -1, 1, 2, 3], -1)).toBe(2);
    expect(binarySearch([-5, -3, -1, 1, 2, 3], 3)).toBe(5);
    expect(binarySearch([-9, -7, -3, -1, 0, 2, 4, 6, 8], -7)).toBe(1);
  });

  it('should support arrays of odd and even lengths', () => {
    expect(binarySearch([1, 3, 5, 7, 9], 3)).toBe(1);
    expect(binarySearch([1, 3, 5, 7, 9, 11], 7)).toBe(3);
    expect(binarySearch([2, 4, 6, 8], 6)).toBe(2);
    expect(binarySearch([1, 2, 3, 4], 4)).toBe(3);
    expect(binarySearch(['a', 'b', 'c'], 'c')).toBe(2);
    expect(binarySearch(['', 'abc'], '')).toBe(0);
  });
});