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
    it("should find the target 3 at index 1", () => {
      expect(binarySearch([1, 3, 5, 7, 9, 11, 12], 3)).toBe(1);
    });
  
    it("should find the target 6 at index 2", () => {
      expect(binarySearch([4, 5, 6, 7, 8], 6)).toBe(2);
    });
  
    it("should find the target 12 at index 6", () => {
      expect(binarySearch([2, 3, 4, 5, 6, 7, 12], 12)).toBe(6);
    });
  
    it("should return -1 for target -1 which is not in the array", () => {
      expect(binarySearch([1, 3, 5, 7, 9], -1)).toBe(-1);
    });
  
    it("should return -1 for target 13 which is not in the array", () => {
      expect(binarySearch([1, 2, 3, 4, 5], 13)).toBe(-1);
    });
  
    it("should return -1 for an empty array", () => {
      expect(binarySearch([], 5)).toBe(-1);
    });
  });
  