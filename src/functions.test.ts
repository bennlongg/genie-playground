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
    const arr = [1, 2, 3];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual([1, 2, 3]);
  });

  it("should sort a reverse-sorted array", () => {
    const arr = [3, 2, 1];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual([1, 2, 3]);
  });

  it("should sort an array with duplicate elements", () => {
    const arr = [3, 2, 1, 2];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual([1, 2, 2, 3]);
  });

});

describe("Bubble Sort Function Edge Cases", () => {
  
it("should handle an empty array", () => {
    const arr: number[] = [];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual([]);
});

it("should handle an array with one element", () => {
const arr = [1];
const sortedArr = bubbleSort(arr);
expect(sortedArr).toEqual([1]);
});
});
