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

describe('bubbleSort', () => {
  it('should sort an array of numbers in ascending order', () => {
    expect(bubbleSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
  });

  it('should sort an array of strings in alphabetical order', () => {
    expect(bubbleSort(['banana', 'apple', 'cherry', 'date'])).toEqual(['apple', 'banana', 'cherry', 'date']);
  });

  it('should handle empty arrays', () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it('should handle single element arrays', () => {
    expect(bubbleSort([42])).toEqual([42]);
  });

  it('should handle already sorted arrays', () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle arrays sorted in reverse order', () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle arrays with duplicate elements', () => {
    expect(bubbleSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
  });

  it('should preserve the order of equal elements (stable sort)', () => {
    const array = [
      { key: 3, value: 'a' },
      { key: 1, value: 'b' },
      { key: 3, value: 'c' },
      { key: 2, value: 'd' },
      { key: 1, value: 'e' }
    ];
    
    // Custom comparison for objects based on 'key' property
    const sortedArray = bubbleSort([...array], (a, b) => a.key - b.key);
    
    expect(sortedArray[0].key).toBe(1);
    expect(sortedArray[1].key).toBe(1);
    // Check stability - order of equal keys should be preserved
    expect(sortedArray[0].value).toBe('b');
    expect(sortedArray[1].value).toBe('e');
  });
});
