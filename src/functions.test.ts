import { describe, it, expect } from "vitest";
import { fibonacci } from "./functions";
import { binarySearch } from "./functions";

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
