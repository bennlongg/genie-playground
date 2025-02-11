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
  it("should return an empty array for empty input", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("should return the same array for a single-element array", () => {
    expect(bubbleSort([42])).toEqual([42]);
  });

  it("should return sorted array for a sorted input", () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return sorted array for an unsorted input", () => {
    expect(bubbleSort([5,2,9,1])).toEqual([1,2,5,9]);
  });

  it("should return sorted array with mixed positive/negative numbers", () => {
    expect(bubbleSort([5,-2,9,1])).toEqual([-2,1,5,9]);
  });

  it("should return sorted array and handle duplicates correctly", () => {
    expect(bubbleSort([1,4,3,5,1])).toEqual([1,1,3,4,5]);
  });

  it("should throw an error for invalid inputs", () => {
    const nonArrayInput = <number[]> 123; // Type casting used for TS strict type-check
    expect(() => bubbleSort(nonArrayInput)).toThrow("Invalid input: expected an array");
  })
})
