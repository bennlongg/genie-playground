import { fibonacci, binarySearch } from './functions';

describe('fibonacci', () => {
  it('should return 0 for 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  it('should return 1 for 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  it('should return 55 for 10', () => {
    expect(fibonacci(10)).toBe(55);
  });

  it('should throw an error for negative input', () => {
    expect(() => fibonacci(-1)).toThrow('Negative numbers are not allowed');
  });
});

  describe('binarySearch', () => {
    it('should return correct index for target in sorted array', () => {
      const arr = [1, 3, 5, 7, 9];
      const target = 5;
      const expectedIndex = 2;
      expect(binarySearch(arr, target)).toBe(expectedIndex);
    });
  
    it('should return -1 when target is not in array', () => {
      const arr = [2, 4, 6, 8, 10];
      const target = 3;
      expect(binarySearch(arr, target)).toBe(-1);
    });
  
    it('should handle edge case of empty array', () => {
      const arr: number[] = [];
      const target = 1;
      expect(binarySearch(arr, target)).toBe(-1);
    });
  
    it('should handle edge case of single-element array', () => {
      const arr = [42];
      const target = 42;
      const expectedIndex = 0;
      expect(binarySearch(arr, target)).toBe(expectedIndex);
    });
  
    it('should return -1 if input array is unsorted', () => {
      const arr = [5, 3, 2, 8];
      const target = 3;
      expect(binarySearch(arr, target)).toBe(-1);
    });
  
    it('should handle edge case of target at start of array', () => {
      const arr = [1, 2, 3, 4];
      const target = 1;
      const expectedIndex = 0;
      expect(binarySearch(arr, target)).toBe(expectedIndex);
    });
  
    it('should handle edge case of target at end of array', () => {
      const arr = [10, 20, 30, 40];
      const target = 40;
      const expectedIndex = 3;
      expect(binarySearch(arr, target)).toBe(expectedIndex);
    });
  
    it('should handle edge case of target in middle of odd-length array', () => {
      const arr = [1, 2, 3, 4, 5];
      const target = 3;
      const expectedIndex = 2;
      expect(binarySearch(arr, target)).toBe(expectedIndex);
    });
  });