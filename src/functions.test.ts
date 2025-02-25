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
  it("should return the correct index when target is at the beginning", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 1)).toBe(0);
  });

  it("should return the correct index when target is in the middle", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 5)).toBe(2);
  });

  it("should return the correct index when target is at the end", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 9)).toBe(4);
  });

  it("should return -1 when target is not in the array", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 4)).toBe(-1);
  });

  it("should return -1 for an empty array", () => {
    expect(binarySearch([], 5)).toBe(-1);
  });

  it("should work with an array of length 1", () => {
    expect(binarySearch([5], 5)).toBe(0);
    expect(binarySearch([5], 6)).toBe(-1);
  });

  it("should work with duplicate values", () => {
    // Returns index of first occurrence
    const result = binarySearch([1, 3, 3, 5, 7, 9], 3);
    expect(result === 1 || result === 2).toBe(true);
  });
});
