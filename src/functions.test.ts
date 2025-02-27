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
  it("should find an element in the middle of an array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  it("should find an element at the beginning of an array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
  });

  it("should find an element at the end of an array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  it("should return -1 when the element is not in the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  it("should handle an empty array", () => {
    expect(binarySearch([], 1)).toBe(-1);
  });

  it("should handle a single-element array", () => {
    expect(binarySearch([1], 1)).toBe(0);
    expect(binarySearch([1], 2)).toBe(-1);
  });

  it("should handle an array with duplicate elements", () => {
    expect(binarySearch([1, 2, 2, 3, 4, 5], 2)).toBeGreaterThanOrEqual(1);
    expect(binarySearch([1, 2, 2, 3, 4, 5], 2)).toBeLessThanOrEqual(2);
  });

  it("should work with large arrays", () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i);
    expect(binarySearch(largeArray, 500)).toBe(500);
    expect(binarySearch(largeArray, 999)).toBe(999);
    expect(binarySearch(largeArray, 1000)).toBe(-1);
  });
});
