import { describe, it, expect } from "vitest";
import { fibonacci, bubbleSort } from "./functions";

describe("Fibonacci Function", () => {
 it("should return0 for n =
0", () => {
    expect(fibonacci(0)).toBe(0);
  });

  it("should return1 for n =
1", () => {
    expect(fibonacci(1)).toBe(1);
  });

  it("should return1 for n =
2", () => {
    expect(fibonacci(2)).toBe(1);
  });

  it("should return55 for n =
10", () => {
    expect(fibonacci(10)).toBe(55);
  });

  it("should throw an error for negative numbers", () => {
    expect(() => fibonacci(-1)).toThrow("Negative numbers are not allowed");
  });
});

describe("BubbleSort Function", () => {
  it("should return the sorted array for an already sorted array", () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return the sorted array for a reverse-ordered array", () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return the sorted array for an array with duplicate values", () => {
    expect(bubbleSort([3, 1, 2, 1, 3])).toEqual([1, 1, 2, 3, 3]);
  });

  it("should return the sorted array for an unsorted array", () => {
    expect(bubbleSort([3, 1, 4, 1, 5, 9, 2, 6])).toEqual([1, 1, 2, 3, 4, 5, 6, 9]);
  });

  it("should return an empty array for an empty array", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("should return the same array for single element arrays", () => {
    expect(bubbleSort([5])).toEqual([5]);
    expect(bubbleSort([1])).toEqual([1]);
  });
});