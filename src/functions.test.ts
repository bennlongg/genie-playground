import { describe, it, expect } from "vitest";
import { fibonacci, binarySearch, bubbleSort, clamp } from "./functions";

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

describe("Binary Search Function", () => {
  const arr = [1, 2, 3, 4, 5];

  it("should return index of target when present (beginning)", () => {
    expect(binarySearch(arr, 1)).toBe(0);
  });

  it("should return index of target when present (middle)", () => {
    expect(binarySearch(arr, 3)).toBe(2);
});

describe("Bubble Sort Function", () => {
  
it("should sort an unsorted array", () => {
const unsortedArr = [5,3,8,4];
const sortedArr = [3,4,5,8];
expect(bubbleSort(unsortedArr)).toEqual(sortedArr);
});

it("should sort an already sorted array", () => {
const sortedArr = [1,2,3];
expect(bubbleSort(sortedArr)).toEqual(sortedArr);
});

it("should sort an array with duplicates", () => {
const arrWithDuplicates = [4,2,4];
const sortedArr = [2,4];
expect(bubbleSort(arrWithDuplicates)).toEqual(sortedArr);
});

it("should handle empty arrays", () => {
expect(bubbleSort([])).toEqual([]);
});
});

describe("Clamp Function", () => {

it("should clamp within range", () => {
expect(clamp(5,-10,-20)).toBe(-10);
});

it("should clamp below range", () => {
expect(clamp(-15,-10,-20)).toBe(-10);
});

it("should clamp above range", () => {
expect(clamp(15,-10,-20)).toBe(-20);
});
});
