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
  it("should return the correct index when the target is found", () => {
    const arr = [1, 3, 5, 7, 9];
    const target = 5;
    expect(binarySearch(arr, target)).toBe(2); // target 5 found at index 2
  });

  it("should return -1 when the target is not found", () => {
    const arr = [1, 3, 5, 7, 9];
    const target = 8;
    expect(binarySearch(arr, target)).toBe(-1); // target 8 not found
  });

  it("should return -1 for an empty array", () => {
    const arr: number[] = [];
    const target = 5;
    expect(binarySearch(arr, target)).toBe(-1); // target not found in empty array
  });

});