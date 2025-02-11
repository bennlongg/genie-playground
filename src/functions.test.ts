import { fibonacci } from './functions';
import { binarySearch } from './functions'; 

describe('fibonacci', () => {
    it('should return the correct value for positive n', () => {
        expect(fibonacci(0)).toBe(0);
        expect(fibonacci(1)).toBe(1);
        expect(fibonacci(2)).toBe(1);
        expect(fibonacci(3)).toBe(2);
        expect(fibonacci(4)).toBe(3);
        expect(fibonacci(5)).toBe(5);
        expect(fibonacci(10)).toBe(55);
    });

    it('should handle large numbers', () => {
        expect(fibonacci(20)).toBe(6765);
        expect(fibonacci(30)).toBe(832040);
    });

    it('should throw an error for negative n', () => {
        expect(() => fibonacci(-1)).toThrow('Negative numbers are not allowed');
        expect(() => fibonacci(-5)).toThrow('Negative numbers are not allowed');
    });
});

// Binary Search Test Cases
describe('binarySearch', () => {
  it('should return the correct index when the target is present', () => {
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(binarySearch(sortedArray, 1)).toBe(0); // 1 is at index 0
    expect(binarySearch(sortedArray, 5)).toBe(4); // 5 is at index 4
    expect(binarySearch(sortedArray, 10)).toBe(9); // 10 is at index 9
  });

  it('should return any correct index when there are duplicates', () => {
    const sortedArrayWithDuplicates = [1, 2, 3, 3, 3, 4, 5, 6];
    const result = binarySearch(sortedArrayWithDuplicates, 3);
    expect(result >= 2 && result <= 4).toBeTruthy(); // Duplicate 3s are between indices 2 and 4
  });

  it('should return -1 when the target is not present', () => {
    const sortedArray = [1, 3, 5, 7, 9];
    expect(binarySearch(sortedArray, 2)).toBe(-1); // 2 is not in the array
    expect(binarySearch(sortedArray, 10)).toBe(-1); // 10 is larger than any element in the array
  });

  it('should handle edge cases for very large or very small numbers', () => {
    const largeArray = Array.from({ length: 1e5 }, (_, i) => i * 2); // [0, 2, 4, ..., 199998]

    expect(binarySearch(largeArray, 0)).toBe(0); // 0 is the first element
    expect(binarySearch(largeArray, 199998)).toBe(99999); // 199998 is the last element
    expect(binarySearch(largeArray, 123456)).toBe(61678); // 123456 is at index 61678
    expect(binarySearch(largeArray, 42)).toBe(21); // 42 is at index 21
  });

  it('should return -1 for an empty array', () => {
    const emptyArray = [];
    expect(binarySearch(emptyArray, 5)).toBe(-1); // No elements to search for
  });

  it('should handle corner cases like single-element arrays', () => {
    const singleElementArray = [7];
    expect(binarySearch(singleElementArray, 7)).toBe(0); // The only element is at index 0
    expect(binarySearch(singleElementArray, 3)).toBe(-1); // 3 is not in the array
  });
});