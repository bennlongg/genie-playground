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

describe("Binary Search Function", () => {
  const sortedArray = [1, 3, 5, 7, 9];

  it("should return correct index when element is found", () => {
    expect(binarySearch(sortedArray, 5)).toBe(2);
    expect(binarySearch(sortedArray, 1)).toBe(0);
    expect(binarySearch(sortedArray, 9)).toBe(4);
  });

  it("should return -1 when element is not found", () => {
    expect(binarySearch(sortedArray, 4)).toBe(-1);
    expect(binarySearch([], 4)).toBe(-1); // Edge case: empty array
    expect(binarySearch([10], 10)).toBe(0); // Edge case: single element array
  });
});

