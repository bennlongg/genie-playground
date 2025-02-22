import { describe, it, expect } from "vitest";
import { fibonacci, binarySearch, bubbleSort, curriedMath } from "./functions";

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

describe('Binary Search', () => {
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  it("should find the target in the array", () => {
    expect(binarySearch(testArray, 1)).toBe(0);
    expect(binarySearch(testArray, 2)).toBe(1);
    expect(binarySearch(testArray, 4)).toBe(3);
  });

  it("should return -1 if the target is not in the array", () => {
    expect(binarySearch(testArray, 11)).toBe(-1);
  });

  it("should handle an empty array", () => {
    const emptyArray: Array<number> = [];
    expect(binarySearch(emptyArray, 4)).toBe(-1);
  })
});

describe('Sorting Functions', () => {
  describe('Bubble Sort', () => {
    it('should sort an array of numbers using bubble sort', () => {
      const testArray = [5, 2, 9, 1, 5, 6];
      expect(bubbleSort(testArray)).toEqual([1, 2, 5, 5, 6, 9]);
      expect(bubbleSort(testArray)).toEqual([1, 2, 5, 5, 6, 9]); // Idempotent check
    });
    it("should handle an empty array list", () => {
      const emptyArray: Array<number> = [];
      expect(bubbleSort(emptyArray)).toEqual([]);
    })
    it("should handle sorted array list", () => {
      const sorted = Array.from({length: 20}, (_, i) => i + 1);
      expect(bubbleSort(sorted)).toEqual(sorted);
    })
    it("should handle reverse-sorted array list", () => {
      const reverse = Array.from({length: 10}, (_, i) => 20 - i);
      expect(bubbleSort(reverse)).toEqual(reverse.reverse());
    })
    it("should handle an array list with duplicates", () => {
      const arrayWithDuplicates = [20, 10, 20, 5, 5, 25, 2];
      expect(bubbleSort(arrayWithDuplicates)).toEqual([2, 5, 5, 10, 20, 20, 25])
    })
    it("should handle negative values in array", () => {
      const arrayWithNegatives = [-2, 10, 20, 20, -10, 25, 2];
      expect(bubbleSort(arrayWithNegatives)).toEqual([-10, -2, 2, 10, 20, 20, 25])
    })
  });
});

describe('Curried Math Functions', () => {
  it('add', () => {
    const result = curriedMath('add')(4)(8);
    expect(result).toBe(12);
  });

  it('subtract', () => {
    const result = curriedMath('subtract')(4)(8);
    expect(result).toBe(-4);
  });

  it('multiply', () => {
    const result = curriedMath('multiply')(4)(8);
    expect(result).toBe(32);
  });

  it('divide', () => {
    const result = curriedMath('divide')(4)(8);
    expect(result).toBe(0.5);
  });

  it('should throw error on division by zero', () => {
    expect(() => curriedMath('divide')(4)(0)).toThrow(new Error('Division by zero is not allowed.'));
  });
});