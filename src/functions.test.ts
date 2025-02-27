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

  it('should return 55 for n = 10', () => {
    expect(fibonacci(10)).toBe(55);
  });

  it('should throw an error for negative numbers', () => {
    expect(() => fibonacci(-1)).toThrow('Negative numbers are not allowed');
  });
});

describe('binarySearch', () => {
  it('should find target at the beginning of the array', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
  });

  it('should find target in the middle of the array', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  it('should find target at the end of the array', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  it('should return -1 when target is not found', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  it('should return -1 for an empty array', () => {
    expect(binarySearch([], 1)).toBe(-1);
  });

  it('should find target in a single-element array', () => {
    expect(binarySearch([1], 1)).toBe(0);
  });

  it('should return -1 when target is not found in a single-element array', () => {
    expect(binarySearch([1], 2)).toBe(-1);
  });

  it('should find target in a large sorted array', () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i + 1);
    expect(binarySearch(largeArray, 500)).toBe(499);
  });
});
