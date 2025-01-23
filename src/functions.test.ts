import { describe, it, expect } from "vitest";
import { fibonacci, bubbleSort } from "./functions";

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

describe("Bubble Sort Function", () => {
  it("should sort an array of numbers in ascending order", () => {
    const arr = [5, 3, 8, 4, 2];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual([2, 3, 4, 5, 8]);
  });

  it("should handle an already sorted array", () => {
    const arr = [1, 2, 3, 4, 5];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
});
