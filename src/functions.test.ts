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
  it("should return 0 if target is at the beginning", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
  });

  it("should return 2 if target is in the middle", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  it("should return 4 if target is at the end", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  it("should return -1 if target is not in the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  it("should return -1 if the array is empty", () => {
    expect(binarySearch([], 1)).toBe(-1);
  });
});
