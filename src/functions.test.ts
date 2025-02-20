import {
  test,
  fibonacci,
  bubbleSort,
  binarySearch,
  curriedMath,
} from "./functions";

/**
 * Test for test function.
 */
describe("test", () => {
  it("should return a test string", () => {
    expect(test()).toMatch("This is a test function");
  });
});

/**
 * Tests for the fibonacci function.
 */
describe("fibonacci", () => {
  it("calculates the n-th Fibonacci number correctly", () => {
    expect(fibonacci(0)).toEqual(0);
    expect(fibonacci(1)).toEqual(1);
    expect(fibonacci(2)).toEqual(1);
    expect(fibonacci(3)).toEqual(2);
    expect(fibonacci(4)).toEqual(3);
    expect(fibonacci(5)).toEqual(5);
  });

  it("throws an error for negative input", () => {
    expect(() => fibonacci(-1)).toThrow("Negative numbers are not allowed");
  });
});

/**
 * Tests for the bubbleSort function.
 */
describe("bubbleSort", () => {
  it("sorts an array of numbers in ascending order", () => {
    expect(bubbleSort([5, 2, 9, 1, 5, 6])).toEqual([1, 2, 5, 5, 6, 9]);
    expect(bubbleSort([3, 0, -2, 2, -1, 1, 1, -4, 2])).toEqual([
      -4, -2, -1, 0, 1, 1, 2, 2, 3,
    ]);
  });

  it("returns an empty array when input is empty", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("does not mutate the original array", () => {
    const array = [2, 3, 1];
    bubbleSort(array);
    expect(array).toEqual([2, 3, 1]);
  });
});

/**
 * Tests for the binarySearch function.
 */
describe("binarySearch", () => {
  it("should return -1 for empty array or array with one element not matching target", () => {
    expect(binarySearch([], 0)).toBe(-1);
    expect(binarySearch([1], 2)).toBe(-1);
  });

  it("should return the correct index for successful searches", () => {
    expect(binarySearch([1], 1)).toBe(0);

    expect(binarySearch([1, 2], 1)).toBe(0);
    expect(binarySearch([1, 2], 2)).toBe(1);

    expect(binarySearch([1, 2, 3], 1)).toBe(0);
    expect(binarySearch([1, 2, 3], 2)).toBe(1);
    expect(binarySearch([1, 2, 3], 3)).toBe(2);

    expect(binarySearch([1, 2, 3], 2)).toBe(1);
    expect(binarySearch([1, 2, 3, 4], 4)).toBe(3);
  });

  it("should return -1 for a target not in the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
    expect(binarySearch([1, 2, 3, 4, 5], 0)).toBe(-1);
  });

  it("should return the correct index for targets at the start, middle, and end of the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });
});

/**
 * Tests for curriedMath function.
 */
describe("curriedMath", () => {
  it("should return a curried add function", () => {
    const add = curriedMath("add");
    expect(add(2, 3)).toEqual(5);
  });

  it("should return a curried subtract function", () => {
    const subtract = curriedMath("subtract");
    expect(subtract(5, 3)).toEqual(2);
  });

  it("should return a curried multiply function", () => {
    const multiply = curriedMath("multiply");
    expect(multiply(2, 3)).toEqual(6);
  });

  it("should return a curried divide function", () => {
    const divide = curriedMath("divide");
    expect(divide(6, 3)).toEqual(2);
  });

  it("should throw an error for unsupported operations", () => {
    expect(() => curriedMath("invalidOperation")).toThrow(
      "Unsupported operation: invalidOperation"
    );
  });
});