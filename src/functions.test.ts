import { describe, it, expect } from "vitest";
import { fibonacci } from "./functions";
import { binarySearch } from "./functions";
import { bubbleSort } from './functions';

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
  it("should return the index of the target when it exists", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  it("should return -1 when the target does not exist", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  it("should return -1 for an empty array", () => {
    expect(binarySearch([], 1)).toBe(-1);
  });

  it("should return 0 for a single-element array where the element exists", () => {
    expect(binarySearch([1], 1)).toBe(0);
  });

  it("should return -1 for a single-element array where the element does not exist", () => {
    expect(binarySearch([1], 2)).toBe(-1);
  });
});

// src/functions.test.ts
describe('Bubble Sort', () => {
  it('sorts an array of numbers in ascending order', () => {
    expect(bubbleSort([4, 2, 7, 1, 9, 3])).toEqual([1, 2, 3, 4, 7, 9]);
  });

  it('returns an already sorted array unchanged', () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('handles an empty array', () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles an array with all identical elements', () => {
    expect(bubbleSort([5, 5, 5, 5])).toEqual([5, 5, 5, 5]);
  });

  it('handles an array with negative numbers', () => {
    expect(bubbleSort([3, -2, 7, -1, 0])).toEqual([-2, -1, 0, 3, 7]);
  });
});
