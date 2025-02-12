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
    it("should return the correct index when target is present in the array", () => {
      const arr = [1, 3, 5, 7, 9];
      expect(binarySearch(arr, 5)).toBe(2);
    });
  
    it("should return -1 when target is not present in the array", () => {
      const arr = [1, 3, 5, 7, 9];
      expect(binarySearch(arr, 4)).toBe(-1);
    });
  
    it("should handle an empty array and return -1", () => {
      const arr: number[] = [];
      expect(binarySearch(arr, 10)).toBe(-1);
    });
  
    it("should handle a single-element array and return the correct index", () => {
      const arr = [42];
      expect(binarySearch(arr, 42)).toBe(0);
    });
  
    it("should handle a single-element array and return -1 for a non-matching target", () => {
      const arr = [42];
      expect(binarySearch(arr, 99)).toBe(-1);
    });
  
    it("should handle edge cases for a large array", () => {
      const arr = Array.from({ length: 1000 }, (_, i) => i * 2); // Even numbers from 0 to 1998
      expect(binarySearch(arr, 500)).toBe(250);
      expect(binarySearch(arr, 0)).toBe(0);
      expect(binarySearch(arr, 1998)).toBe(999);
      expect(binarySearch(arr, 67)).toBe(-1);
    });
  });