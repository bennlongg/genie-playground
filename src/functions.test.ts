import { binarySearch } from './functions';

describe('binarySearch', () => {
  test('should return the index when target exists in the array', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  test('should return -1 when target does not exist in the array', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
    expect(binarySearch([1, 2, 3, 4, 5], 0)).toBe(-1);
    expect(binarySearch([1, 2, 3, 4, 5], 2.5)).toBe(-1);
  });

  test('should handle arrays with duplicate elements', () => {
    expect(binarySearch([1, 2, 2, 3, 4, 5], 2)).toBeGreaterThanOrEqual(1);
    expect(binarySearch([1, 2, 2, 3, 4, 5], 2)).toBeLessThanOrEqual(2);
  });

  test('should handle empty arrays', () => {
    expect(binarySearch([], 1)).toBe(-1);
  });

  test('should handle single element arrays', () => {
    expect(binarySearch([1], 1)).toBe(0);
    expect(binarySearch([1], 2)).toBe(-1);
  });

  test('should handle large sorted arrays', () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i + 1);
    expect(binarySearch(largeArray, 500)).toBe(499);
    expect(binarySearch(largeArray, 1)).toBe(0);
    expect(binarySearch(largeArray, 1000)).toBe(999);
    expect(binarySearch(largeArray, 1001)).toBe(-1);
  });
});
