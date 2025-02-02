import { describe, it, expect } from "vitest";
import { fibonacci, bubbleSort, binarySearch } from "./functions";

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

describe("Bubble Sort Function", () => {
  it("should return an empty array for an empty input", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("should return the same array for a sorted input", () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should sort an unsorted array", () => {
    expect(bubbleSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
  });

  it("should handle arrays with duplicate elements", () => {
    expect(bubbleSort([5, 3, 8, 4, 2, 3])).toEqual([2, 3, 3, 4, 5, 8]);
  });
});

describe("Binary Search Function", () => {
  it("should return -1 for an empty array", () => {
    expect(binarySearch([], 5)).toBe(-1);
  });

  it("should return the correct index for a target at the beginning", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
  });

  it("should return the correct index for a target in the middle", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  it("should return the correct index for a target at the end", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  it("should return -1 for a target not present in the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  it("should handle arrays with negative numbers and zero", () => {
    expect(binarySearch([-5, -3, 0, 2, 4], -3)).toBe(1);
    expect(binarySearch([-5, -3, 0, 2, 4], 0)).toBe(2);
  });
});
