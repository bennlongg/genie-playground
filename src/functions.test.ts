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
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  it("should return the correct index for an existing value", () => {
    expect(binarySearch(numbers, 5)).toBe(4);
  });

  it("should return -1 for a non-existing value", () => {
    expect(binarySearch(numbers, 11)).toBe(-1);
  });

  it("should work with a custom comparator", () => {
    const objects = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const comparator = (a: { id: number }, b: { id: number }) => a.id - b.id;
    expect(binarySearch(objects, { id: 2 }, comparator)).toBe(1);
  });

  it("should handle an empty array gracefully", () => {
    expect(binarySearch([], 5)).toBe(-1);
  });

  it("should return the first occurrence index for duplicates", () => {
    const shortNumbers = [1, 5, 5, 10];
    expect(binarySearch(shortNumbers, 5)).toBe(1);
  });
});
