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
