import { fibonacci, binarySearch } from './functions';

describe('fibonacci', () => {
  it('should return 0 for n = 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  it('should return 1 for n = 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  it('should return 1 for n = 2', () => {
    expect(fibonacci(2)).toBe(1);
  });

  it('should return 2 for n = 3', () => {
    expect(fibonacci(3)).toBe(2);
  });

  it('should return 5 for n = 5', () => {
    expect(fibonacci(5)).toBe(5);
  });

  it('should throw error for negative numbers', () => {
    expect(() => fibonacci(-1)).toThrow('Negative numbers are not allowed');
  });
});

describe('binarySearch', () => {
  it('should return the index when element is found at the beginning', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
  });

  it('should return the index when element is found in the middle', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  it('should return the index when element is found at the end', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  it('should return -1 when element is not found', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  it('should work with an empty array', () => {
    expect(binarySearch([], 1)).toBe(-1);
  });

  it('should work with a single element array - element present', () => {
    expect(binarySearch([1], 1)).toBe(0);
  });

  it('should work with a single element array - element not present', () => {
    expect(binarySearch([1], 2)).toBe(-1);
  });

  it('should work with string arrays', () => {
    expect(binarySearch(['apple', 'banana', 'cherry', 'date', 'elderberry'], 'cherry')).toBe(2);
    expect(binarySearch(['apple', 'banana', 'cherry', 'date', 'elderberry'], 'fig')).toBe(-1);
  });
});
