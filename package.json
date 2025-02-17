import { describe, it, expect } from "vitest";
import { fibonacci } from "./functions";

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

import { binarySearch } from "./functions";

describe("Binary Search Function", () => {
  it("should return the correct index when the target is found", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const target = 5;
    const result = binarySearch(arr, target);
    expect(result).toBe(4); // Index of 5 in the array [1, 2, 3, 4, 5, 6, 7, 8, 9]
  });

  it("should return -1 when the target is not found", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const target = 10;
    const result = binarySearch(arr, target);
    expect(result).toBe(-1); // Target 10 is not present in the array
  });

  it("should handle an empty array and return -1", () => {
    const arr: number[] = [];
    const target = 5;
    const result = binarySearch(arr, target);
    expect(result).toBe(-1); // Target cannot be found in an empty array
  });

  it("should handle an array with a single element", () => {
    const arr = [42];
    const target = 42;
    const result = binarySearch(arr, target);
    expect(result).toBe(0); // Single element is the target, so index 0 should be returned
  });

  it("should handle an array with duplicate elements", () => {
    const arr = [1, 2, 3, 3, 3, 4, 5];
    const target = 3;
    const result = binarySearch(arr, target);
    expect(result).toBeGreaterThanOrEqual(2); // One of the valid indices for target 3 (2, 3, or 4)
  });
});