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
  it("should find the element in the middle of the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  it("should find the first element of the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
  });

  it("should find the last element of the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  it("should return -1 when the element is not in the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  it("should return -1 when searching in an empty array", () => {
    expect(binarySearch([], 1)).toBe(-1);
  });

  it("should work with arrays containing only one element", () => {
    expect(binarySearch([5], 5)).toBe(0);
    expect(binarySearch([5], 1)).toBe(-1);
  });

  it("should throw an error when the array is not sorted", () => {
    expect(() => binarySearch([5, 3, 1, 2, 4], 3)).toThrow(
      "Array must be sorted in ascending order for binary search"
    );
  });
});

describe("Bubble Sort Function", () => {
  it("should sort an unsorted array", () => {
    expect(bubbleSort([5, 3, 1, 4, 2])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an already sorted array", () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should sort an array with duplicate values", () => {
    expect(bubbleSort([3, 1, 4, 1, 5, 9, 2, 6, 5])).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9]);
  });

  it("should return an empty array when given an empty array", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("should sort an array with negative numbers", () => {
    expect(bubbleSort([5, -3, 1, -4, 2])).toEqual([-4, -3, 1, 2, 5]);
  });

  it("should sort an array with decimal numbers", () => {
    expect(bubbleSort([5.5, 3.3, 1.1, 4.4, 2.2])).toEqual([1.1, 2.2, 3.3, 4.4, 5.5]);
  });

  it("should not modify the original array", () => {
    const original = [5, 3, 1, 4, 2];
    bubbleSort(original);
    expect(original).toEqual([5, 3, 1, 4, 2]);
  });

  it("should throw an error when input is not an array", () => {
    // @ts-ignore - Testing invalid input
    expect(() => bubbleSort("not an array")).toThrow("Input must be an array");
  });

  it("should throw an error when array contains non-number elements", () => {
    // @ts-ignore - Testing invalid input
    expect(() => bubbleSort([1, 2, "three", 4])).toThrow("All elements must be numbers");
  });
});
