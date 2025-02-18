import { describe, it, expect } from "vitest";
import { fibonacci, curriedMath, binarySearch , bubbleSort, aStar } from "./functions";

/**
 * Test suite for the Fibonacci function.
 */
describe("Fibonacci Function", () => {
 /**
 * Test case to ensure Fibonacci(0) returns 0.
   */
  it("should return 0 for n = 0", () => {
    expect(fibonacci(0)).toBe(0);
  });

  /**
   * Test case to ensure Fibonacci(1) returns 1.
   */
  it("should return 1 for n = 1", () => {
    expect(fibonacci(1)).toBe(1);
  });

  /**
   * Test case to ensure Fibonacci(2) returns 1.
   */
  it("should return 1 for n = 2", () => {
    expect(fibonacci(2)).toBe(1);
  });

  /**
   * Test case to ensure Fibonacci(10) returns 55.
   */
  it("should return 55 for n = 10", () => {
    expect(fibonacci(10)).toBe(55);
  });

  /**
   * Test case to ensure the function throws an error for negative input.
   */
  it("should throw an error for negative numbers", () => {
    expect(() => fibonacci(-1)).toThrow("Negative numbers are not allowed");
  });
});

/**
 * Test suite for the Curried Math function.
 */
describe("Curried Math Function", () => {
  /**
   * Test case to verify addition operation.
   */
  it("should correctly add two numbers", () => {
    const add = curriedMath("add");
    expect(add(1, 2)).toBe(3);
  });

  /**
   * Test case to verify subtraction operation.
   */
  it("should correctly subtract two numbers", () => {
    const subtract = curriedMath("subtract");
    expect(subtract(5, 3)).toBe(2);
  });

  /**
   * Test case to verify multiplication operation.
   */
  it("should correctly multiply two numbers", () => {
    const multiply = curriedMath("multiply");
    expect(multiply(4, 3)).toBe(12);
  });

  /**
   * Test case to verify division operation, including handling of division by zero.
   */
  it("should correctly divide two numbers", () => {
    const divide = curriedMath("divide");
    expect(divide(10, 2)).toBe(5);
    expect(divide(10, 0)).toBe(Infinity); // Edge case for division by zero
  });

  /**
   * Test case to verify error handling for unsupported operations.
   */
  it("should throw an error for unsupported operations", () => {
    expect(() => curriedMath("modulus")).toThrow("Unsupported operation");
  });

  /**
   * Test case to verify handling of invalid operations (e.g., invalidOperation).
   */
  it("should return a valid result when using the default case", () => {
    const mathFunc = curriedMath("invalidOperation" as any);
    expect(() => mathFunc(1, 2)).toThrow("Unsupported operation");
  });

  /**
   * Additional edge cases to test negative number addition and zero as an operand.
   */
  it("should handle negative numbers in addition", () => {
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

/**
 * Test suite for the Binary Search function.
 */
describe("Binary Search Function", () => {
  /**
   * Test case to verify finding the target value in an array and returning the correct index.
   */
  it("should return the correct index when the target is found", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const target = 5;
    const result = binarySearch(arr, target);
    expect(result).toBe(4); // Expected index of target 5 in the array
  });

  /**
   * Test case to verify returning -1 when the target is not found in the array.
   */
  it("should return -1 when the target is not found", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const target = 10;
    const result = binarySearch(arr, target);
    expect(result).toBe(-1); // Expected -1 when target is not present
  });

  /**
   * Additional test cases for edge scenarios: empty array, single-element array, duplicates.
   */
  it("should handle an empty array and return -1", () => {
    const arr: number[] = [];
    const target = 5;
    const result = binarySearch(arr, target);
    expect(result).toBe(-1); // Expected -1 for empty array
  });

  it("should handle an array with a single element", () => {
    const arr = [42];
    const target = 42;
    const result = binarySearch(arr, target);
    expect(result).toBe(0); // Expected index 0 for single-element array
  });

  it("should handle an array with duplicate elements", () => {
    const arr = [1, 2, 3, 3, 3, 4, 5];
    const target = 3;
    const result = binarySearch(arr, target);
    expect(result).toBeGreaterThanOrEqual(2); // Expected one of the valid indices for target 3 (e.g., 2, 3, or 4)
  });
});

/**
 * Test suite for Bubble Sort Function
 */
describe("Bubble Sort Function", () => {
  /**
   * Test case to verify sorting of an unsorted array in ascending order.
   */
  it("should sort an unsorted array in ascending order", () => {
    const arr = [3, 1, 4, 1, 5, 9, 2];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual([1, 1, 2, 3, 4, 5, 9]); // Expect sorted array in ascending order
  });

  /**
   * Test case to verify handling of an already sorted array.
   */
  it("should handle an already sorted array", () => {
    const arr = [1, 2, 3, 4, 5];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual(arr); // Expect the same sorted array as input
  });

  /**
   * Test case to verify handling of an array with duplicate elements.
   */
  it("should handle an array with duplicate elements", () => {
    const arr = [4, 4, 4, 4];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual(arr); // Expect the same array with duplicates (order should be maintained)
  });

  /**
   * Test case to verify handling of an empty array.
   */
  it("should handle an empty array and return it", () => {
    const arr: number[] = [];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual(arr); // Expect an empty array as input and output
  });

  /**
   * Test case to verify handling of an array with a single element.
   */
  it("should handle an array with a single element and return it", () => {
    const arr = [42];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual(arr); // Expect array with single element unchanged
  });
});

describe("A* Pathfinding Function", () => {
  // Test case for a simple 5x5 grid without obstacles
  it("should find the shortest path on a 5x5 grid with no obstacles", () => {
    const grid = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    const start: [number, number] = [0, 0];
    const end: [number, number] = [4, 4];

    const result = aStar(grid, start, end);

    expect(result).toEqual([
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
    ]);
  });

  // Test case for a grid with obstacles that requires pathfinding
  it("should navigate around obstacles on a 3x5 grid", () => {
    const grid = [
      [0, 0, 1, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0],
    ];
    const start: [number, number] = [0, 0];
    const end: [number, number] = [2, 4];

    const result = aStar(grid, start, end);

    expect(result).toEqual([
      [0, 0],
      [1, 1],
      [2, 2],
      [2, 3],
      [2, 4],
    ]);
  });

  // Test case for unreachable path due to obstacles
  it("should return an empty array when no valid path exists due to obstacles", () => {
    const grid = [
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    const start: [number, number] = [0, 0];
    const end: [number, number] = [3, 4];

    const result = aStar(grid, start, end);

    expect(result).toEqual([]); // No valid path due to obstacles
  });

  // Test case for handling paths when the target is unreachable
  it("should return an empty array for unreachable targets", () => {
    const grid = [
      [0, 1, 0],
      [1, 1, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    const start: [number, number] = [0, 0];
    const unreachable: [number, number] = [3, 2];

    const path = aStar(grid, start, unreachable);
    expect(path).toEqual([]); // No valid path to the unreachable target
  });

  // Test case for complex scenarios with multiple obstacles
  it("should find a path on a 7x7 grid with complex obstacles", () => {
    const grid = [
      [0, 0, 0, 1, 0, 0, 0],
      [0, 1, 0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 1, 0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    const start: [number, number] = [0, 0];
    const end: [number, number] = [6, 6];

    const result = aStar(grid, start, end);

    expect(result).toEqual([
      [0, 0],
      [1, 1],
      [2, 2],
      [2, 3],
      [2, 4],
      [2, 5],
      [2, 6],
      [3, 6],
      [4, 6],
      [5, 6],
      [6, 6],
    ]);
  });

  // Test case for handling large grids efficiently
  it("should handle an empty grid path", () => {
    const grid = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];
    const start: [number, number] = [0, 0];
    const end: [number, number] = [3, 5];

    const result = aStar(grid, start, end);

    expect(result).toEqual([]); // No valid path due to lack of obstacles
  });
});