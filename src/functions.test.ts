import { describe, it, expect } from "vitest";
import { fibonacci } from "./functions";
import { bubbleSort } from "./functions";
import { binarySearch } from "./functions";

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
  it("should return [] for an empty array", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("should return [1] for [1]", () => {
    expect(bubbleSort([1])).toEqual([1]);
  });

  it("should return [1, 2, 3] for [3, 2, 1]", () => {
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  it("should return [1, 2, 3] for already sorted [1, 2, 3]", () => {
    expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("should handle duplicates [4, 5, 4]", () => {
    expect(bubbleSort([4, 5, 4])).toEqual([4, 4, 5]);
  });
});


describe("Binary Search Function", () => {
  it("should return the index of the target if present in the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  it("should return -1 if the target is not present in the array", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 2)).toBe(-1);
  });

  it("should handle an empty array by returning -1", () => {
    expect(binarySearch([], 5)).toBe(-1);
  });

  it("should handle a single-element array", () => {
    expect(binarySearch([10], 10)).toBe(0);
  });

  it("should handle an array where all elements are identical", () => {
    expect(binarySearch([7, 7, 7, 7, 7], 7)).toBe(2); // Note: Expect the middle index
  });

  it("should correctly identify elements at the beginning, middle, and end of the array", () => {
    expect(binarySearch([10, 20, 30, 40, 50], 10)).toBe(0);
    expect(binarySearch([10, 20, 30, 40, 50], 30)).toBe(2);
    expect(binarySearch([10, 20, 30, 40, 50], 50)).toBe(4);
  });
});