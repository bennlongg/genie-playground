import { describe, it, expect } from "vitest";
import { fibonacci, binarySearch, bubbleSort, curriedMathFunction } from "./functions";

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
  it("should return the correct index when the target exists (odd length)", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  it("should return the correct index when the target exists (even length)", () => {
    expect(binarySearch([2, 4, 6, 8], 6)).toBe(2);
  });

  it("should return -1 when the target does not exist", () => {
    expect(binarySearch([10, 20, 30, 40], 25)).toBe(-1);
  });

  it("should return -1 for an empty array", () => {
    expect(binarySearch([], 1)).toBe(-1);
  });

  it("should handle arrays with repetitive elements", () => {
    expect(binarySearch([1, 1, 1, 1, 2, 2, 2], 2)).toBe(4);
  });
});

describe("Bubble Sort Function", () => {
  it("should sort an array of multiple elements", () => {
    expect(bubbleSort([3, 2, 1, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an already sorted array", () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should manage arrays with duplicate values", () => {
    expect(bubbleSort([4, 5, 5, 3, 4])).toEqual([3, 4, 4, 5, 5]);
  });

  it("should sort an array with a single element", () => {
    expect(bubbleSort([1])).toEqual([1]);
  });

  it("should return an empty array when input is empty", () => {
    expect(bubbleSort([])).toEqual([]);
  });
});

describe("Curried Math Function", () => {
  it("should correctly perform addition", () => {
    const add = curriedMathFunction('+');
    expect(add(2)(3)).toBe(5);
  });

  it("should correctly perform subtraction", () => {
    const subtract = curriedMathFunction('-');
    expect(subtract(5)(3)).toBe(2);
  });

  it("should correctly perform multiplication", () => {
    const multiply = curriedMathFunction('*');
    expect(multiply(4)(3)).toBe(12);
  });

  it("should correctly perform division", () => {
    const divide = curriedMathFunction('/');
    expect(divide(6)(3)).toBe(2);
  });

  it("should throw an error for division by zero", () => {
    const divide = curriedMathFunction('/');
    expect(() => divide(6)(0)).toThrow("Division by zero is not allowed");
  });
});
