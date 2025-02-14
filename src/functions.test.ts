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

describe("Bubble Sort", () => {
  it("should return a sorted array for an array already sorted in ascending order", () => {
    const input = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    const result = bubbleSort(input);
    expect(result).toEqual(expected);
  });

  it("should return a sorted array for an array sorted in descending order", () => {
    const input = [5, 4, 3, 2, 1];
    const expected = [1, 2, 3, 4, 5];
    const result = bubbleSort(input);
    expect(result).toEqual(expected);
  });

  it("should return a sorted array for an array containing unsorted elements", () => {
    const input = [4, 1, 3, 5, 2];
    const expected = [1, 2, 3, 4, 5];
    const result = bubbleSort(input);
    expect(result).toEqual(expected);
  });

  it("should return an empty array if the input array is empty", () => {
    const input: number[] = [];
    const expected: number[] = [];
    const result = bubbleSort(input);
    expect(result).toEqual(expected);
  });

  it("should not mutate the original array", () => {
    const input = [3, 1, 2];
    const copy = [...input];
    bubbleSort(input);
    expect(input).toEqual(copy);
  });

  // Add more test cases as needed
});