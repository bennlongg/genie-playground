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
  it("should find target at the beginning of the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
  });

  it("should find target in the middle of the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  it("should find target at the end of the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  it("should return -1 when target is not in the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  it("should return -1 for an empty array", () => {
    expect(binarySearch([], 1)).toBe(-1);
  });

  it("should correctly handle an array with one element", () => {
    expect(binarySearch([1], 1)).toBe(0);
    expect(binarySearch([1], 2)).toBe(-1);
  });

  it("should find the first occurrence in an array with duplicates", () => {
    const arr = [1, 2, 2, 2, 3, 4, 5];
    const index = binarySearch(arr, 2);
    expect(arr[index]).toBe(2);
    expect(index).toBeGreaterThanOrEqual(1);
    expect(index).toBeLessThanOrEqual(3);
  });

  it("should work with negative numbers", () => {
    expect(binarySearch([-5, -4, -3, -2, -1], -3)).toBe(2);
  });

  it("should work with a large sorted array", () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i);
    expect(binarySearch(largeArray, 500)).toBe(500);
    expect(binarySearch(largeArray, 999)).toBe(999);
    expect(binarySearch(largeArray, 1000)).toBe(-1);
  });
});

describe("Bubble Sort Function", () => {
  it("should sort an array in ascending order", () => {
    expect(bubbleSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
  });

  it("should return a new array without modifying the original", () => {
    const original = [5, 3, 8, 4, 2];
    const sorted = bubbleSort(original);
    expect(sorted).toEqual([2, 3, 4, 5, 8]);
    expect(original).toEqual([5, 3, 8, 4, 2]);
  });

  it("should handle an already sorted array", () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should sort an array in reverse order", () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an array with duplicate values", () => {
    expect(bubbleSort([3, 1, 4, 1, 5, 9, 2, 6, 5])).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9]);
  });

  it("should return an empty array when given an empty array", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("should return the same array when given a single-element array", () => {
    expect(bubbleSort([42])).toEqual([42]);
  });

  it("should handle an array with negative numbers", () => {
    expect(bubbleSort([3, -1, 4, -5, 2])).toEqual([-5, -1, 2, 3, 4]);
  });

  it("should handle a large array", () => {
    const largeArray = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));
    const sortedArray = [...largeArray].sort((a, b) => a - b);
    expect(bubbleSort(largeArray)).toEqual(sortedArray);
  });
});
