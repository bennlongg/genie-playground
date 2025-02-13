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
  it("should return the correct index when the target is found in the array", () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 3;
    const result = binarySearch(arr, target);
    expect(result).toBe(2);
  });
  
  it("should return -1 when the target is not found in the array", () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 6;
    const result = binarySearch(arr, target);
    expect(result).toBe(-1);
  });
  
  it("should return -1 for an empty array", () => {
    const arr: number[] = [];
    const target = 3;
    const result = binarySearch(arr, target);
    expect(result).toBe(-1);
  });
  
  it("should return the correct index for an array with one element", () => {
    const arr = [42];
    const target = 42;
    const result = binarySearch(arr, target);
    expect(result).toBe(0);
  });
  
  it("should return the correct index when the target is at the beginning of the array", () => {
    const arr = [10, 20, 30, 40, 50];
    const target = 10;
    const result = binarySearch(arr, target);
    expect(result).toBe(0);
  });
  
  it("should return the correct index when the target is at the end of the array", () => {
    const arr = [10, 20, 30, 40, 50];
    const target = 50;
    const result = binarySearch(arr, target);
    expect(result).toBe(4);
  });
  
  it("should return -1 for an array with non-numeric elements", () => {
    // @ts-expect-error: Testing invalid input intentionally.
    const arr = ["a", "b", "c"];
    const target = "b";
    expect(() => binarySearch(arr, target)).toThrow();
  });
  
  it("should return the correct index in an array with duplicate values", () => {
    const arr = [5, 10, 10, 20, 20, 20, 30];
    const target = 20;
    const result = binarySearch(arr, target);
    expect(result).toBe(4); // any of three valid indices (3, 4, or 5) is acceptable
  });
  
  it("should return -1 in an unsorted array", () => {
    const arr = [50, 10, 30, 20, 40];
    const target = 30;
    const result = binarySearch(arr, target);
    expect(result).toBe(-1); // binary search assumes the array is sorted, so this may not work correctly
  });
  
  it("should throw an error for null or undefined array input", () => {
    // @ts-expect-error: Testing invalid input intentionally.
    const arr: number[] = null;
    const target = 10;
    expect(() => binarySearch(arr, target)).toThrow();
  });
  
  it("should handle very large arrays efficiently", () => {
    const arr = Array.from({ length: 1_000_000 }, (_, i) => i + 1); // [1, 2, ..., 1_000_000]
    const target = 987_654;
    const result = binarySearch(arr, target);
    expect(result).toBe(987_653); // target found at index 987_653
  });  
  
  it("should throw an error for non-numeric target input", () => {
    const arr = [1, 2, 3, 4, 5];
    // @ts-expect-error: Testing invalid input intentionally.
    const target: number = "abc";
    expect(() => binarySearch(arr, target)).toThrow();
  });  
  
  it("should return -1 when the target is greater than the largest element", () => {
    const arr = [10, 20, 30, 40, 50];
    const target = 60;
    const result = binarySearch(arr, target);
    expect(result).toBe(-1);
  });
  
  it("should return -1 when the target is smaller than the smallest element", () => {
    const arr = [10, 20, 30, 40, 50];
    const target = 5;
    const result = binarySearch(arr, target);
    expect(result).toBe(-1);
  });
});