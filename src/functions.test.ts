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


describe("Binary Search", () => {

  it("should return index for element found in list", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).toBe(4);
  })
  it("should return -1 for empty list", () => {
    expect(binarySearch([], 5)).toBe(-1)
  })
  it("should return -1 for target not found in list", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)).toBe(-1)
  })
})