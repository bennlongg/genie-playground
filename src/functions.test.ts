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
  it("should return the index of the target in a sorted array", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const target = 5;
    const index = binarySearch(nums, target);
    expect(index).toBe(4);
  });

  it("should return -1 if the target is not in the array", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const target = 10;
    const index = binarySearch(nums, target);
    expect(index).toBe(-1);
  });

  it("should handle empty arrays correctly", () => {
    const nums: number[] = [];
    const target = 5;
    const index = binarySearch(nums, target);
    expect(index).toBe(-1);
  });

  it("should handle single-element arrays correctly", () => {
    const nums = [5];
    const target = 5;
    const index = binarySearch(nums, target);
    expect(index).toBe(0);
  });

  it("should handle arrays with duplicate elements", () => {
    const nums = [1, 2, 2, 2, 3, 4, 5];
    const target = 2;
    const index = binarySearch(nums, target);
    expect(index).toBeGreaterThanOrEqual(1);
    expect(index).toBeLessThanOrEqual(3);
  });
});
