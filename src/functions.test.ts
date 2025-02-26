import { fibonacci, binarySearch, bubbleSort, randomSort } from './functions';

describe('fibonacci', () => {
  test('should return 0 for n = 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('should return 1 for n = 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  test('should return 1 for n = 2', () => {
    expect(fibonacci(2)).toBe(1);
  });

  test('should return 2 for n = 3', () => {
    expect(fibonacci(3)).toBe(2);
  });

  test('should return 5 for n = 5', () => {
    expect(fibonacci(5)).toBe(5);
  });

  test('should return 55 for n = 10', () => {
    expect(fibonacci(10)).toBe(55);
  });

  test('should return 0 for negative numbers', () => {
    expect(fibonacci(-1)).toBe(0);
  });
});

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

describe('bubbleSort', () => {
  test('should sort an unsorted array', () => {
    expect(bubbleSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
    expect(bubbleSort([9, 7, 5, 3, 1])).toEqual([1, 3, 5, 7, 9]);
  });

  test('should return the same array if already sorted', () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle arrays with duplicate elements', () => {
    expect(bubbleSort([3, 1, 4, 1, 5, 9, 2, 6, 5])).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9]);
  });

  test('should handle empty arrays', () => {
    expect(bubbleSort([])).toEqual([]);
  });

  test('should handle single element arrays', () => {
    expect(bubbleSort([42])).toEqual([42]);
  });

  test('should handle arrays with negative numbers', () => {
    expect(bubbleSort([5, -3, 8, -4, 2])).toEqual([-4, -3, 2, 5, 8]);
    expect(bubbleSort([-9, -7, -5, -3, -1])).toEqual([-9, -7, -5, -3, -1]);
  });

  test('should handle arrays with mixed signs', () => {
    expect(bubbleSort([-5, 3, -8, 4, -2])).toEqual([-8, -5, -2, 3, 4]);
  });

  test('should handle large arrays', () => {
    const unsortedArray = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));
    const sortedArray = [...unsortedArray].sort((a, b) => a - b);
    expect(bubbleSort(unsortedArray)).toEqual(sortedArray);
  });
});

describe('randomSort', () => {
  test('should correctly sort arrays with distinct elements', () => {
    const unsortedArray = [5, 3, 8, 4, 2];
    const expectedSortedArray = [2, 3, 4, 5, 8];
    expect(randomSort(unsortedArray)).toEqual(expectedSortedArray);
    
    const unsortedArray2 = [9, 7, 5, 3, 1];
    const expectedSortedArray2 = [1, 3, 5, 7, 9];
    expect(randomSort(unsortedArray2)).toEqual(expectedSortedArray2);
  });

  test('should correctly sort arrays with duplicate elements', () => {
    const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5];
    const expectedSortedArray = [1, 1, 2, 3, 4, 5, 5, 6, 9];
    expect(randomSort(unsortedArray)).toEqual(expectedSortedArray);
  });

  test('should handle empty arrays', () => {
    expect(randomSort([])).toEqual([]);
  });

  test('should handle single element arrays', () => {
    expect(randomSort([42])).toEqual([42]);
  });

  test('should correctly sort arrays with negative numbers', () => {
    const unsortedArray = [5, -3, 8, -4, 2];
    const expectedSortedArray = [-4, -3, 2, 5, 8];
    expect(randomSort(unsortedArray)).toEqual(expectedSortedArray);
    
    const unsortedArray2 = [-9, -7, -5, -3, -1];
    const expectedSortedArray2 = [-9, -7, -5, -3, -1];
    expect(randomSort(unsortedArray2)).toEqual(expectedSortedArray2);
  });

  test('should correctly sort arrays with mixed signs', () => {
    const unsortedArray = [-5, 3, -8, 4, -2];
    const expectedSortedArray = [-8, -5, -2, 3, 4];
    expect(randomSort(unsortedArray)).toEqual(expectedSortedArray);
  });

  test('should produce consistent results for multiple runs', () => {
    // This test verifies that regardless of the random algorithm chosen,
    // the result is always a correctly sorted array
    const unsortedArray = [8, 3, 1, 9, 5, 2, 7, 4, 6];
    const expectedSortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    // Run multiple times to increase chance of different algorithms being chosen
    for (let i = 0; i < 10; i++) {
      expect(randomSort(unsortedArray)).toEqual(expectedSortedArray);
    }
  });

  test('should handle large arrays', () => {
    const unsortedArray = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));
    const sortedArray = [...unsortedArray].sort((a, b) => a - b);
    expect(randomSort(unsortedArray)).toEqual(sortedArray);
  });

  test('should not modify the original array', () => {
    const originalArray = [5, 3, 8, 4, 2];
    const originalArrayCopy = [...originalArray];
    randomSort(originalArray);
    expect(originalArray).toEqual(originalArrayCopy);
  });
});
