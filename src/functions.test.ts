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
  it("should return the correct index when target is found", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  it("should return -1 when target is not found", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
    expect(binarySearch([1, 2, 3, 4, 5], 0)).toBe(-1);
    expect(binarySearch([1, 3, 5, 7, 9], 4)).toBe(-1);
  });

  it("should throw an error for empty arrays", () => {
    expect(() => binarySearch([], 1)).toThrow("Array cannot be empty");
  });

  it("should throw an error for unsorted arrays", () => {
    expect(() => binarySearch([5, 3, 1, 2, 4], 3)).toThrow("Array must be sorted in ascending order");
  });

  it("should throw an error for non-array inputs", () => {
    // @ts-expect-error Testing invalid input
    expect(() => binarySearch("not an array", 1)).toThrow("Input must be an array");
    // @ts-expect-error Testing invalid input
    expect(() => binarySearch(null, 1)).toThrow("Input must be an array");
  });
});
