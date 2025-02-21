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
  it("should return the correct index when the target is found", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 4)).toBe(3);
  });

  it("should return -1 when the target is not found", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  it("should handle an empty array", () => {
    expect(binarySearch([], 1)).toBe(-1);
  });

  it("should handle a single-element array where the target is found", () => {
    expect(binarySearch([1], 1)).toBe(0);
  });

  it("should handle a single-element array where the target is not found", () => {
    expect(binarySearch([1], 2)).toBe(-1);
  });

  it("should handle a large array", () => {
    const largeArray = Array.from({ length: 100000 }, (_, i) => i + 1);
    expect(binarySearch(largeArray, 99999)).toBe(99998);
  });

  it("should handle duplicates in the array", () => {
    expect(binarySearch([1, 2, 2, 2, 3], 2)).toBeDefined();
  });
});

describe("Bubble Sort Function", () => {
  it("should sort an already sorted array", () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should sort an unsorted array", () => {
    expect(bubbleSort([5, 3, 4, 1, 2])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an empty array", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("should handle an array with duplicate elements", () => {
    expect(bubbleSort([4, 2, 2, 4, 3])).toEqual([2, 2, 3, 4, 4]);
  });

  it("should not modify the original array", () => {
    const arr = [5, 4, 3, 2, 1];
    const sortedArr = bubbleSort(arr);
    expect(arr).toEqual([5, 4, 3, 2, 1]); // Check original array remains unchanged
    expect(arr).not.toBe(sortedArr); // Ensure a new array is returned
  });
});