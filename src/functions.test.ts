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
  it("should sort an already sorted array", () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should sort a reverse-sorted array", () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle arrays with duplicate values", () => {
    expect(bubbleSort([3, 2, 1, 4, 2, 3])).toEqual([1, 2, 2, 3, 3, 4]);
  });

  it("should handle arrays with negative numbers", () => {
    expect(bubbleSort([5, -1, 3, 0, -2])).toEqual([-2, -1, 0, 3, 5]);
  });

  it("should handle empty arrays", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("should handle single-element arrays", () => {
    expect(bubbleSort([1])).toEqual([1]);
  });
});