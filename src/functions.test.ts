import { describe, it, expect } from "vitest";
import { fibonacci, curriedMath, binarySearch , bubbleSort } from "./functions";

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

describe("Curried Math Function", () => {
  it("should correctly add two numbers", () => {
    const add = curriedMath("add");
    expect(add(1, 2)).toBe(3);
  });

  it("should correctly subtract two numbers", () => {
    const subtract = curriedMath("subtract");
    expect(subtract(5, 3)).toBe(2);
  });

  it("should correctly multiply two numbers", () => {
    const multiply = curriedMath("multiply");
    expect(multiply(4, 3)).toBe(12);
  });

  it("should correctly divide two numbers", () => {
    const divide = curriedMath("divide");
    expect(divide(10, 2)).toBe(5);

    // Edge case: Division by zero
    expect(divide(10, 0)).toBe(Infinity);
  });

  it("should throw an error for unsupported operations", () => {
    expect(() => curriedMath("modulus")).toThrow("Unsupported operation");
  });

  it("should return a valid result when using the default case", () => {
    const mathFunc = curriedMath("invalidOperation" as any);
    expect(() => mathFunc(1, 2)).toThrow("Unsupported operation");
  });

  // Additional edge cases
  it("should return the correct result for adding negative numbers", () => {
    const add = curriedMath("add");
    expect(add(-5, 3)).toBe(-2);
    expect(add(5, -3)).toBe(2);
  });

  it("should handle zero as an operand for all operations", () => {
    const add = curriedMath("add");
    expect(add(0, 4)).toBe(4);

    const subtract = curriedMath("subtract");
    expect(subtract(0, 4)).toBe(-4);

    const multiply = curriedMath("multiply");
    expect(multiply(0, 4)).toBe(0);

    const divide = curriedMath("divide");
    expect(divide(0, 4)).toBe(0);
  });
});

describe("Binary Search Function", () => {
  it("should return the correct index when the target is found", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const target = 5;
    const result = binarySearch(arr, target);
    expect(result).toBe(4); // Index of 5 in the array [1, 2, 3, 4, 5, 6, 7, 8, 9]
  });

  it("should return -1 when the target is not found", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const target = 10;
    const result = binarySearch(arr, target);
    expect(result).toBe(-1); // Target 10 is not present in the array
  });

  it("should handle an empty array and return -1", () => {
    const arr: number[] = [];
    const target = 5;
    const result = binarySearch(arr, target);
    expect(result).toBe(-1); // Target cannot be found in an empty array
  });

  it("should handle an array with a single element", () => {
    const arr = [42];
    const target = 42;
    const result = binarySearch(arr, target);
    expect(result).toBe(0); // Single element is the target, so index 0 should be returned
  });

  it("should handle an array with duplicate elements", () => {
    const arr = [1, 2, 3, 3, 3, 4, 5];
    const target = 3;
    const result = binarySearch(arr, target);
    expect(result).toBeGreaterThanOrEqual(2); // One of the valid indices for target 3 (2, 3, or 4)
  });
});

describe("Bubble Sort Function", () => {
  it("should sort an array of unsorted numbers", () => {
    const arr = [3, 1, 4, 1, 5, 9, 2];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual([1, 1, 2, 3, 4, 5, 9]);
  });

  it("should handle an already sorted array", () => {
    const arr = [1, 2, 3, 4, 5];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual(arr); // The array remains the same
  });

  it("should handle an array with duplicate elements", () => {
    const arr = [4, 4, 4, 4];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual(arr); // The array remains the same
  });

  it("should handle an empty array and return it", () => {
    const arr: number[] = [];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual(arr); // Empty remains empty
  });

  it("should handle an array with a single element and return it", () => {
    const arr = [42];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual(arr); // Single element remains unchanged
  });
});