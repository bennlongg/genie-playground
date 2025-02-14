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

describe("Bubble Sort Function", () => {
  it("should correctly sort the array in ascending order", () => {
    expect(bubbleSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
    expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]); // Already sorted
    expect(bubbleSort([10, -1, 2, -5])).toEqual([-5, -1, 2, 10]); // Negative numbers
  });

  it("should handle edge cases like empty arrays", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("should not modify the original array and return a new sorted array", () => {
    const arr = [3, 1, 2];
    const sorted = bubbleSort(arr);
    expect(sorted).toEqual([1, 2, 3]);
    expect(arr).toEqual([3, 1, 2]); // Original array remains unchanged
  });

  it("should handle arrays with duplicate elements", () => {
    expect(bubbleSort([2, 3, 1, 2, 3])).toEqual([1, 2, 2, 3, 3]);
  });

  it("should handle single-element arrays", () => {
    expect(bubbleSort([7])).toEqual([7]);
  });

  it("should throw an error if input is not an array", () => {
    expect(() => bubbleSort(null)).toThrow(TypeError); // Catch the TypeError if no argument is provided
    expect(() => bubbleSort(null)).toThrow("Input must be an array");
    expect(() => bubbleSort(123)).toThrow("Input must be an array");
    expect(() => bubbleSort("string")).toThrow("Input must be an array");
  });
});