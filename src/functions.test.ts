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
  it("should return -1 when target is not found in an empty array", () => {
    const arr = [];
    const target = 5;
    const result = binarySearch(arr, target);
    expect(result).toBe(-1);
  });

  it("should return index when target is found in a single-element array", () => {
    const arr = [5];
    const target = 5;
    const result = binarySearch(arr, target);
    expect(result).toBe(0);
  });

  it("should return -1 when target is not found in a single-element array", () => {
    const arr = [5];
    const target = 10;
    const result = binarySearch(arr, target);
    expect(result).toBe(-1);
  });

  it("should return index when target is found in a multi-element array", () => {
    const arr = [1, 3, 5, 7, 9];
    const target = 7;
    const result = binarySearch(arr, target);
    expect(result).toBe(3);
  });

  it("should return index when target is found at the beginning of an array", () => {
    const arr = [1, 3, 5, 7, 9];
    const target = 1;
    const result = binarySearch(arr, target);
    expect(result).toBe(0);
  });

  it("should return index when target is found at the end of an array", () => {
    const arr = [1, 3, 5, 7, 9];
    const target = 9;
    const result = binarySearch(arr, target);
    expect(result).toBe(4);
  });

  it("should return -1 when target is not found in a multi-element array", () => {
    const arr = [1, 3, 5, 7, 9];
    const target = 6;
    const result = binarySearch(arr, target);
    expect(result).toBe(-1);
  });

  
});
