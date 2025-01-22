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
  const sortedArray = [1, 3, 5, 7, 9];

  it("should return correct index when target is at start", () => {
    expect(binarySearch(sortedArray, 1)).toBe(0);
  });

  it("should return correct index when target is at end", () => {
    expect(binarySearch(sortedArray, 9)).toBe(4);
  });

  it("should return correct index when target is in middle", () => {
    expect(binarySearch(sortedArray, 5)).toBe(2);
  });

  it("should return -1 when target is not found", () => {
    expect(binarySearch(sortedArray, -1)).toBe(-1);
    expect(binarySearch(sortedArray, 10)).toBe(-1);
  });

  it("should handle empty array", () => {
    expect(binarySearch([], 5)).toBe(-1);
  });

  it("should handle single element array", () => {
    expect(binarySearch([5], 5)).toBe(0);
    expect(binarySearch([5], -5)).toBe(-1);
});