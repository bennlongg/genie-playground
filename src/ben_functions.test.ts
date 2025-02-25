import { describe, it, expect } from "vitest";
import { fibonacci, binarySearch, bubbleSort, curriedMath } from "./functions";

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
  it("should return the correct index when target is at the beginning", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 1)).toBe(0);
  });

  it("should return the correct index when target is in the middle", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 5)).toBe(2);
  });

  it("should return the correct index when target is at the end", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 9)).toBe(4);
  });

  it("should return -1 when target is not in the array", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 4)).toBe(-1);
  });

  it("should return -1 for an empty array", () => {
    expect(binarySearch([], 5)).toBe(-1);
  });

  it("should work with an array of length 1", () => {
    expect(binarySearch([5], 5)).toBe(0);
    expect(binarySearch([5], 6)).toBe(-1);
  });

  it("should work with duplicate values", () => {
    // Returns index of first occurrence
    const result = binarySearch([1, 3, 3, 5, 7, 9], 3);
    expect(result === 1 || result === 2).toBe(true);
  });
});

describe("Bubble Sort Function", () => {
  it("should sort an array in ascending order", () => {
    expect(bubbleSort([5, 3, 8, 1, 2])).toEqual([1, 2, 3, 5, 8]);
  });

  it("should return an empty array when given an empty array", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("should return the same array when given an already sorted array", () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an array with a single element", () => {
    expect(bubbleSort([42])).toEqual([42]);
  });

  it("should handle an array with duplicate elements", () => {
    expect(bubbleSort([3, 1, 4, 1, 5, 9, 2, 6])).toEqual([1, 1, 2, 3, 4, 5, 6, 9]);
  });

  it("should handle an array with negative numbers", () => {
    expect(bubbleSort([5, -3, 8, -1, 2])).toEqual([-3, -1, 2, 5, 8]);
  });

  it("should not modify the original array", () => {
    const original = [5, 3, 8, 1, 2];
    const originalCopy = [...original];
    bubbleSort(original);
    expect(original).toEqual(originalCopy);
  });
});

describe("Curried Math Function", () => {
  it("should correctly perform addition operation", () => {
    const add = curriedMath("add");
    expect(add(2, 3)).toBe(5);
    expect(add(0, 0)).toBe(0);
    expect(add(-1, 1)).toBe(0);
    expect(add(-5, -3)).toBe(-8);
  });

  it("should correctly perform subtraction operation", () => {
    const subtract = curriedMath("subtract");
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(3, 5)).toBe(-2);
    expect(subtract(0, 0)).toBe(0);
    expect(subtract(-1, -1)).toBe(0);
  });

  it("should correctly perform multiplication operation", () => {
    const multiply = curriedMath("multiply");
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(-2, -3)).toBe(6);
  });

  it("should correctly perform division operation", () => {
    const divide = curriedMath("divide");
    expect(divide(6, 3)).toBe(2);
    expect(divide(5, 2)).toBe(2.5);
    expect(divide(0, 5)).toBe(0);
    expect(divide(-6, 3)).toBe(-2);
    expect(divide(-6, -3)).toBe(2);
  });

  it("should throw an error when dividing by zero", () => {
    const divide = curriedMath("divide");
    expect(() => divide(5, 0)).toThrow("Division by zero is not allowed");
  });

  it("should throw an error for an unsupported operation", () => {
    expect(() => curriedMath("power")).toThrow("Unsupported operation: power");
  });
});
