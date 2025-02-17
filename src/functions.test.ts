import { describe, it, expect } from "vitest";
import { fibonacci } from "./functions";
import { binarySearch } from "./functions";
import { bubbleSort } from "./functions";
import { curriedMath } from "./functions";


describe("Fibonacci Function", () => {
 it("should return0 for n = 0", () => {
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

describe("binarySearch", () => {
  it("should return the index of the target element in a sorted array", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 5)).toBe(2);
  });

  it("should return -1 if the target element is not found in the array", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 6)).toBe(-1);
  });

  it("should return -1 for an empty array", () => {
    expect(binarySearch([], 10)).toBe(-1);
  });

  it("should return the index of the only element in a single-element array", () => {
    expect(binarySearch([42], 42)).toBe(0);
  });

  it("should return -1 if the target element is not found in a single-element array", () => {
    expect(binarySearch([42], 10)).toBe(-1);
  });

  it("should return the index of the first occurrence of the target element in an array with duplicates", () => {
    expect(binarySearch([1, 3, 5, 7, 9, 9, 9], 9)).toBe(4);
  });
});

describe("bubbleSort", () => {

  it("should return a sorted array when the input array is in random order", () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return a sorted array when the input array is already sorted", () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return a sorted array when the input array is in reverse order", () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return an empty array when the input array is empty", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("should return a sorted array when the input array has only one element", () => {
    expect(bubbleSort([42])).toEqual([42]);
  });

  it("should handle arrays with duplicate elements correctly", () => {
    expect(bubbleSort([3, 3, 2, 1, 2])).toEqual([1, 2, 2, 3, 3]);
  });

});


describe("curriedMath", () => {
  it("should perform an addition operation with multiple arguments", () => {
    const add = curriedMath("+");
    expect(add(1, 2, 3)).toBe(6);
    expect(add(4, 5, 6)).toBe(15);
  });

  it("should perform a subtraction operation with multiple arguments", () => {
    const subtract = curriedMath("-");
    expect(subtract(10, 5, 2)).toBe(3);
    expect(subtract(20, 15, 10)).toBe(-5);
  });

  it("should perform a multiplication operation with multiple arguments", () => {
    const multiply = curriedMath("*");
    expect(multiply(2, 3, 4)).toBe(24);
    expect(multiply(5, 6, 7)).toBe(210);
  });

  it("should perform a division operation with multiple arguments", () => {
    const divide = curriedMath("/");
    expect(divide(100, 5, 2)).toBe(10);
    expect(divide(50, 2)).toBe(25);
  });

  it("should throw an error for division by zero", () => {
    const divide = curriedMath("/");
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed");
  });

  it("should throw an error for an unsupported operator", () => {
    expect(() => curriedMath("%")).toThrow(
      "Unsupported operator: %. Valid operators are +, -, *, and /."
    );
  });

  it("should handle initial arguments and accept additional arguments", () => {
    const add = curriedMath("+", [1, 2]);
    expect(add(3, 4)).toBe(10);
    expect(add(5)).toBe(8);
  });

  it("should handle negative numbers in arithmetic operations", () => {
    const subtract = curriedMath("-", [-10, 5]);
    expect(subtract(-3)).toBe(-8); // (-(-10) + 5 - (-3))

    const add = curriedMath("+", [-10, 5, -2]);
    expect(add(-3, 4)).toBe(-6); // (-10 + (-5) + (-2) + (-3) + 4 + 0)
  });
});