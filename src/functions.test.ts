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
  it("should find the target in a sorted array", () => {
    const arr = [1, 3, 5, 7, 9];
    expect(binarySearch(arr, 3)).toBe(1);
  });

  it("should return -1 for an empty array", () => {
    const arr: number[] = [];
    expect(binarySearch(arr, 5)).toBe(-1);
  });

  it("should return -1 when target is not in the array", () => {
    const arr = [1, 3, 5, 7, 9];
    expect(binarySearch(arr, 2)).toBe(-1);
  });

  it("should find the first element", () => {
    const arr = [1, 3, 5, 7, 9];
    expect(binarySearch(arr, 1)).toBe(0);
  });

  it("should find the last element", () => {
    const arr = [1, 3, 5, 7, 9];
    expect(binarySearch(arr, 9)).toBe(4);
  });
});