import { describe, it, expect } from "vitest";
import { fibonacci, binarySearch } from "./functions.old";

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
  it("should find the index of a number in a sorted array", () => {
    const array = [1, 3, 5, 7, 9, 11, 13, 15];
    expect(binarySearch(array, 7)).toBe(3);
    expect(binarySearch(array, 15)).toBe(7);
    expect(binarySearch(array, 1)).toBe(0);
  });

  it("should return -1 when the target is not in the array", () => {
    const array = [1, 3, 5, 7, 9, 11, 13, 15];
    expect(binarySearch(array, 2)).toBe(-1);
    expect(binarySearch(array, 0)).toBe(-1);
    expect(binarySearch(array, 20)).toBe(-1);
  });

  it("should handle empty arrays", () => {
    expect(binarySearch([], 5)).toBe(-1);
  });

  it("should work with arrays of length 1", () => {
    expect(binarySearch([42], 42)).toBe(0);
    expect(binarySearch([42], 41)).toBe(-1);
  });

  it("should work with string arrays", () => {
    const array = ["apple", "banana", "cherry", "orange", "pear"];
    expect(binarySearch(array, "cherry")).toBe(2);
    expect(binarySearch(array, "grape")).toBe(-1);
  });

  it("should handle large datasets efficiently", () => {
    const largeArray = Array.from({ length: 10000 }, (_, i) => i * 2); // Even numbers 0-19998
    expect(binarySearch(largeArray, 9998)).toBe(4999);
    expect(binarySearch(largeArray, 9999)).toBe(-1);
  });
});
