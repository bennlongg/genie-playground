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
  it("should find element at the beginning of the array", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 1)).toBe(0);
  });

  it("should find element in the middle of the array", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 5)).toBe(2);
  });

  it("should find element at the end of the array", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 9)).toBe(4);
  });

  it("should return -1 when target is not in the array", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 4)).toBe(-1);
  });

  it("should return -1 for an empty array", () => {
    expect(binarySearch([], 5)).toBe(-1);
  });

  it("should find element in a single-element array", () => {
    expect(binarySearch([7], 7)).toBe(0);
  });

  it("should return -1 when target is less than all elements", () => {
    expect(binarySearch([10, 20, 30, 40, 50], 5)).toBe(-1);
  });

  it("should return -1 when target is greater than all elements", () => {
    expect(binarySearch([10, 20, 30, 40, 50], 60)).toBe(-1);
  });

  it("should work with duplicate elements (returns index of any occurrence)", () => {
    const result = binarySearch([1, 3, 5, 5, 5, 9, 11], 5);
    expect([2, 3, 4]).toContain(result);
  });
});
