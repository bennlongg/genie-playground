import { fibonacci, binarySearch, bubbleSort } from './functions';

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

describe('bubbleSort', () => {
  it('should sort an already sorted array', () => {
    const array = [1, 2, 3, 4, 5];
    expect(bubbleSort(array)).toEqual([1, 2, 3, 4, 5]);
    // Original array should not be modified
    expect(array).toEqual([1, 2, 3, 4, 5]);
  });

  it('should sort an unsorted array', () => {
    const array = [5, 3, 1, 4, 2];
    expect(bubbleSort(array)).toEqual([1, 2, 3, 4, 5]);
    // Original array should not be modified
    expect(array).toEqual([5, 3, 1, 4, 2]);
  });

  it('should handle an empty array', () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it('should sort an array with negative numbers', () => {
    const array = [3, -1, 5, 0, -5, 2];
    expect(bubbleSort(array)).toEqual([-5, -1, 0, 2, 3, 5]);
    // Original array should not be modified
    expect(array).toEqual([3, -1, 5, 0, -5, 2]);
  });

  it('should sort an array with duplicate values', () => {
    const array = [3, 1, 3, 2, 1, 2];
    expect(bubbleSort(array)).toEqual([1, 1, 2, 2, 3, 3]);
    // Original array should not be modified
    expect(array).toEqual([3, 1, 3, 2, 1, 2]);
  });

  it('should sort a large unsorted array', () => {
    const unsortedArray = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));
    const sortedArray = [...unsortedArray].sort((a, b) => a - b);
    expect(bubbleSort(unsortedArray)).toEqual(sortedArray);
    // Original array should not be modified
    expect(unsortedArray).not.toEqual(sortedArray);
  });

  it('should handle an array with one element', () => {
    expect(bubbleSort([42])).toEqual([42]);
  });
});
