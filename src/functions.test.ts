import { describe, it, expect } from "vitest";
import { fibonacci, binarySearch } from "./functions";

describe("Fibonacci Function", () => {
  it("should return 0 for n = 0", () => {
    expect(fibonacci(0)).toBe(0);
  });

  it("should return 1 for n = 1", () => {
    expect(fibonacci(1)).toBe(1);
  });

  it("should return 1 for n = 2", () => {
    expect(fibonacci(2)).toBe(1);
  });

  it("should return 55 for n = 10", () => {
    expect(fibonacci(10)).toBe(55);
  });

  it("should throw an error for negative numbers", () => {
    expect(() => fibonacci(-1)).toThrow("Negative numbers are not allowed");
  });
});

describe('Binary Search Function', () => {
    it('should return the index of the target value in a sorted array', () => {
      expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
    });
  
    it('should return -1 if the target value is not found', () => {
      expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
    });
  
    it('should handle an empty array gracefully', () => {
      expect(binarySearch([], 3)).toBe(-1);
    });
  
    it('should return the index of the target value in a larger sorted array', () => {
      expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)).toBe(6);
    });
  
    it('should throw an error for unsorted input array', () => {
      expect(() => binarySearch([5, 4, 3, 2, 1], 3)).toThrow('Input array must be sorted');
    });
  
    // Additional edge cases
  
    it('should handle arrays with duplicate values', () => {
      expect(binarySearch([1, 2, 2, 3, 4, 5], 2)).toBe(1); // Return the index of the first occurrence
    });
  
    it('should handle arrays with one element', () => {
      expect(binarySearch([3], 3)).toBe(0);
    });
  
    it('should handle arrays with negative and zero values', () => {
      expect(binarySearch([-10, -5, 0, 3, 7], 0)).toBe(2);
      expect(binarySearch([-10, -5, 0, 3, 7], -5)).toBe(1);
    });
  
    it('should handle arrays with all elements being the same', () => {
      expect(binarySearch([5, 5, 5, 5, 5], 5)).toBe(0); // Return the index of the first occurrence
      expect(binarySearch([5, 5, 5, 5, 5], 6)).toBe(-1);
    });
  
    it('should handle input that is not a number gracefully', () => {
      expect(binarySearch([1, 2, 3, 4, 5], Number("5"))).toBe(-1);
    });
  });