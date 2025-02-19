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
  it("should return the index of a target number if found", () => {
    const arr = [1, 3, 5, 7, 9];
    expect(binarySearch(arr, 5)).toBe(2);
    expect(binarySearch(arr, 1)).toBe(0);
    expect(binarySearch(arr, 9)).toBe(4);
  });

  it("should return -1 if the target number is not found", () => {
    const arr = [1, 3, 5, 7, 9];
    expect(binarySearch(arr, 2)).toBe(-1);
    expect(binarySearch(arr, 8)).toBe(-1);
    expect(binarySearch(arr, 0)).toBe(-1);
  });

  it("should handle an empty array by returning -1", () => {
    expect(binarySearch([], 5)).toBe(-1);
  });
});

describe("Bubble Sort Function", () => {
  it("should sort an empty array correctly", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("should sort an already sorted array correctly", () => {
    expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("should sort an unsorted array correctly", () => {
    expect(bubbleSort([3, 1, 2])).toEqual([1, 2, 3]);
  });
  });