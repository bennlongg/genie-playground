import { describe, it, expect } from "vitest";
import { fibonacci, binarySearch } from "./functions";

// Tests for the Fibonacci function
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

// Tests for the Binary Search function
describe("Binary Search Function", () => {
  it("should return correct index when target is present", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 5)).toBe(2);
  });

  it("should return -1 when target is not present", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 2)).toBe(-1);
  });

  it("should handle empty array case", () => {
    expect(binarySearch([], 1)).toBe(-1);
  });

  it("should return 0 when target is the first element", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
  });

  it("should return last index when target is the last element", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });
});
