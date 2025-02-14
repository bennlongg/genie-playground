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

describe("Binary Search Function", () => {
    it("should return the correct index when the target exists in the array", () => {
      expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
      expect(binarySearch([10, 20, 30, 40, 50], 10)).toBe(0);
      expect(binarySearch([100, 200, 300, 400, 500], 500)).toBe(4);
    });
  
    it("should return -1 when the target does not exist in the array", () => {
      expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
      expect(binarySearch([10, 20, 30, 40, 50], 15)).toBe(-1);
      expect(binarySearch([100, 200, 300, 400, 500], 250)).toBe(-1);
    });
  
    it("should handle edge cases like empty arrays", () => {
      expect(binarySearch([], 1)).toBe(-1);
    });
  
    it("should handle large arrays and perform efficiently", () => {
      const largeArray = Array.from({ length: 1000000 }, (_, index) => index);
      expect(binarySearch(largeArray, 999999)).toBe(999999);
      expect(binarySearch(largeArray, 0)).toBe(0);
      expect(binarySearch(largeArray, 500000)).toBe(500000);
    });
  });