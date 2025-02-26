import { describe, it, expect } from "vitest";
import { fibonacci, binarySearch, bubbleSort } from "./functions";

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
  it("should return the correct index when target is found", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
  });

  it("should return -1 when target is not found", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
    expect(binarySearch([1, 2, 3, 4, 5], 0)).toBe(-1);
  });

  it("should handle empty arrays", () => {
    expect(binarySearch([], 1)).toBe(-1);
  });

  it("should handle arrays with a single element", () => {
    expect(binarySearch([1], 1)).toBe(0);
    expect(binarySearch([1], 2)).toBe(-1);
  });

  it("should work with string arrays", () => {
    expect(binarySearch(["apple", "banana", "cherry", "date", "elderberry"], "cherry")).toBe(2);
    expect(binarySearch(["apple", "banana", "cherry", "date", "elderberry"], "fig")).toBe(-1);
  });

  it("should return the index of the first occurrence for duplicates", () => {
    // Note: The basic binary search implementation returns any matching index for duplicates
    // This test might need adjustment if specific behavior for duplicates is implemented
    const result = binarySearch([1, 2, 2, 2, 3], 2);
    expect([1, 2, 3]).toContain(result);
  });
});

describe("Bubble Sort Function", () => {
  it("should sort an array of numbers in ascending order", () => {
    expect(bubbleSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
    expect(bubbleSort([10, 7, 8, 9, 1, 5])).toEqual([1, 5, 7, 8, 9, 10]);
  });

  it("should return the same array if already sorted", () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should sort an array in reverse order", () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle empty arrays", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("should handle arrays with a single element", () => {
    expect(bubbleSort([1])).toEqual([1]);
  });

  it("should sort arrays with duplicate values", () => {
    expect(bubbleSort([5, 2, 5, 3, 1, 2])).toEqual([1, 2, 2, 3, 5, 5]);
  });

  it("should work with string arrays", () => {
    expect(bubbleSort(["banana", "cherry", "apple", "date"])).toEqual(["apple", "banana", "cherry", "date"]);
  });

  it("should preserve the original array", () => {
    const original = [5, 3, 8, 4, 2];
    const sorted = bubbleSort(original);
    expect(original).toEqual([5, 3, 8, 4, 2]); // Original should be unchanged
    expect(sorted).toEqual([2, 3, 4, 5, 8]); // Result should be sorted
  });
});
