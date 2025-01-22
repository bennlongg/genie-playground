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
  it("should return correct index when target is found", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(binarySearch(arr, 3)).toBe(2);
    expect(binarySearch(arr, 1)).toBe(0);
    expect(binarySearch(arr, 5)).toBe(4);
  });

  it("should return -1 when target is not found", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(binarySearch(arr, 6)).toBe(-1);
    expect(binarySearch(arr, -1)).toBe(-1);
  });

  it("should handle edge cases correctly", () => {
    const emptyArr: number[] = [];
    const singleElementArr = [42];
    
    expect(binarySearch(emptyArr, 42)).toBe(-1); // Searching in an empty array
    expect(binarySearch(singleElementArr, 42)).toBe(0); // Single element array
    expect(binarySearch(singleElementArr, -42)).toBe(-1); // Target not present in single element array
  });

});
