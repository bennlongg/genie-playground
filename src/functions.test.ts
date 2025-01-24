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
  const arr = [1, 2, 3, 4, 5];

  it("should return index of target when present (beginning)", () => {
    expect(binarySearch(arr, 1)).toBe(0);
  });

  it("should return index of target when present (middle)", () => {
    expect(binarySearch(arr, 3)).toBe(2);
  });

  it("should return index of target when present (end)", () => {
    expect(binarySearch(arr, 5)).toBe(4);
  });

  it("should return -1 when target is not present", () => {
    expect(binarySearch(arr, 6)).toBe(-1);
  });

  it("should handle empty arrays", () => {
    expect(binarySearch([], 1)).toBe(-1);
});