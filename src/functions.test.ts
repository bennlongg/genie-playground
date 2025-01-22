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
  it("should return correct index when target is present", () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 3;
    const result = binarySearch(arr, target);
    expect(result).toBe(2); // Index of target (3) in arr
  });

  it("should return -1 when target is not present", () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 6;
    const result = binarySearch(arr, target);
    expect(result).toBe(-1); // Target (6) is not present in arr
  });

  it("should handle empty array correctly", () => {
    const arr: number[] = [];
    const target = 3;
    const result = binarySearch(arr, target);
    expect(result).toBe(-1); // Target (3) is not present in empty arr
  });

  it("should throw an error when array is not sorted", () => {
    const arr = [5, 3, 4];
    const target = 3;
    expect(() => binarySearch(arr, target)).toThrow(
      "Array must be sorted in ascending order"
    );
  });

  it("should work with custom comparator", () => {
    const arr = [5, 4, 3];
    const target = 4;
    const compareFn = (a: number, b: number) => b - a; // Custom comparator for descending order
    const result = binarySearch(arr, target, compareFn);
    expect(result).toBe(1); // Index of target (4) in arr with custom comparator
});