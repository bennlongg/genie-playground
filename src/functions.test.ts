import { describe, it, expect } from "vitest";
import { fibonacci, binarySearch, bubbleSort, curriedAdd, curriedSubtract, curriedMultiply, curriedDivide  } from "./functions";

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


describe("Binary Search Function", () => {
    it("should find the target 3 at index 1", () => {
      expect(binarySearch([1, 3, 5, 7, 9, 11, 12], 3)).toBe(1);
    });
  
    it("should find the target 6 at index 2", () => {
      expect(binarySearch([4, 5, 6, 7, 8], 6)).toBe(2);
    });
  
    it("should find the target 12 at index 6", () => {
      expect(binarySearch([2, 3, 4, 5, 6, 7, 12], 12)).toBe(6);
    });
  
    it("should return -1 for target -1 which is not in the array", () => {
      expect(binarySearch([1, 3, 5, 7, 9], -1)).toBe(-1);
    });
  
    it("should return -1 for target 13 which is not in the array", () => {
      expect(binarySearch([1, 2, 3, 4, 5], 13)).toBe(-1);
    });
  
    it("should return -1 for an empty array", () => {
      expect(binarySearch([], 5)).toBe(-1);
    });
  });


  describe('Bubble Sort Function', () => {
    it('should sort an unsorted array in ascending order', () => {
      expect(bubbleSort([5, 3, 8, 1, 2])).toEqual([1, 2, 3, 5, 8]);
    });
  
    it('should handle already sorted arrays gracefully', () => {
      expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
  
    it('should handle arrays sorted in descending order', () => {
      expect(bubbleSort([9, 7, 5, 3, 1])).toEqual([1, 3, 5, 7, 9]);
    });
  
    it('should correctly sort arrays with duplicate values', () => {
      expect(bubbleSort([4, 2, 4, 1, 3])).toEqual([1, 2, 3, 4, 4]);
    });
  
    it('should return an empty array when given an empty array', () => {
      expect(bubbleSort([])).toEqual([]);
    });
  });
  



describe('Curried Math Functions', () => {
    it('should correctly add multiple numbers', () => {
      expect(curriedAdd(3, 5, 2).toBe(10));
    });
  
    it('should correctly subtract multiple numbers', () => {
      expect(curriedSubtract(10, 4, 3).toBe(3));
    });
  
    it('should correctly multiply multiple numbers', () => {
      expect(curriedMultiply(2, 3, 4).toBe(24));
    });
  
    it('should correctly divide multiple numbers', () => {
      expect(curriedDivide(100, 4, 5).toBe(5));
    });

    it('Divide specific: Should throw an error when dividing by zero', () => {
        expect(() => curriedDivide(10, 2, 0)).toThrow("Division by zero is not allowed!");
    });

  });  
