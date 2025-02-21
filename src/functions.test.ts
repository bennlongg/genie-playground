import { describe, it, expect } from "vitest";
import { fibonacci, binarySearch, bubbleSort, curriedMath, isOdd, isEven, getCurrentYear, isYearOfTheTiger, isYearOfThePig } from "./functions";

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
    expect(binarySearch([1, 2, 3, 4, 5], 4)).toBe(3);
  });

  it("should return -1 when the target is not found", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  it("should handle an empty array", () => {
    expect(binarySearch([], 1)).toBe(-1);
  });

  it("should handle a single-element array where the target is found", () => {
    expect(binarySearch([1], 1)).toBe(0);
  });

  it("should handle a single-element array where the target is not found", () => {
    expect(binarySearch([1], 2)).toBe(-1);
  });

  it("should handle a large array", () => {
    const largeArray = Array.from({ length: 100000 }, (_, i) => i + 1);
    expect(binarySearch(largeArray, 99999)).toBe(99998);
  });

  it("should handle duplicates in the array", () => {
    expect(binarySearch([1, 2, 2, 2, 3], 2)).toBeDefined();
  });
});

describe("Bubble Sort Function", () => {
  it("should sort an already sorted array", () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should sort an unsorted array", () => {
    expect(bubbleSort([5, 3, 4, 1, 2])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an empty array", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("should handle an array with duplicate elements", () => {
    expect(bubbleSort([4, 2, 2, 4, 3])).toEqual([2, 2, 3, 4, 4]);
  });

  it("should not modify the original array", () => {
    const arr = [5, 4, 3, 2, 1];
    const sortedArr = bubbleSort(arr);
    expect(arr).toEqual([5, 4, 3, 2, 1]); // Check original array remains unchanged
    expect(arr).not.toBe(sortedArr); // Ensure a new array is returned
  });
});

describe("Curried Math Function", () => {
  it("should correctly add two numbers", () => {
    const add = curriedMath("+");
    expect(add(3, 4)).toBe(7);
  });

  it("should correctly subtract two numbers", () => {
    const subtract = curriedMath("-");
    expect(subtract(7, 4)).toBe(3);
  });

  it("should correctly multiply two numbers", () => {
    const multiply = curriedMath("*");
    expect(multiply(3, 4)).toBe(12);
  });

  it("should correctly divide two numbers", () => {
    const divide = curriedMath("/");
    expect(divide(12, 4)).toBe(3);
  });
});

describe("isOdd Function", () => {
  it("should return true for odd numbers", () => {
    expect(isOdd(3)).toBe(true);
  });

  it("should return false for even numbers", () => {
    expect(isOdd(4)).toBe(false);
  });

  it("should handle zero correctly", () => {
    expect(isOdd(0)).toBe(false);
  });

  it("should handle negative odd numbers", () => {
    expect(isOdd(-3)).toBe(true);
  });

  it("should handle negative even numbers", () => {
    expect(isOdd(-4)).toBe(false);
  });
});

describe("isEven Function", () => {
  it("should return true for even numbers", () => {
    expect(isEven(4)).toBe(true);
  });

  it("should return false for odd numbers", () => {
    expect(isEven(3)).toBe(false);
  });

  it("should handle zero correctly", () => {
    expect(isEven(0)).toBe(true);
  });

  it("should handle negative even numbers", () => {
    expect(isEven(-4)).toBe(true);
  });

  it("should handle negative odd numbers", () => {
    expect(isEven(-3)).toBe(false);
  });
});

describe("getCurrentYear Function", () => {
  it("should return the current year", () => {
    const expectedYear = new Date().getFullYear();
    expect(getCurrentYear()).toBe(expectedYear);
  });
});

describe("isYearOfTheTiger Function", () => {
  it("should return true for known Year of the Tiger", () => {
    expect(isYearOfTheTiger(2022)).toBe(true);
    expect(isYearOfTheTiger(2010)).toBe(true);
  });

  it("should return false for non-Year of the Tiger", () => {
    expect(isYearOfTheTiger(2023)).toBe(false);
    expect(isYearOfTheTiger(2021)).toBe(false);
  });

  it("should handle zero correctly", () => {
    expect(isYearOfTheTiger(0)).toBe(false);
  });

  it("should handle negative years", () => {
    expect(isYearOfTheTiger(-24)).toBe(false);
    expect(isYearOfTheTiger(-114)).toBe(true);
  });
});

describe("isYearOfThePig Function", () => {
  it("should return true for known Year of the Pig", () => {
    expect(isYearOfThePig(2019)).toBe(true);
    expect(isYearOfThePig(2007)).toBe(true);
  });

  it("should return false for non-Year of the Pig", () => {
    expect(isYearOfThePig(2020)).toBe(false);
    expect(isYearOfThePig(2023)).toBe(false);
  });

  it("should handle zero correctly", () => {
    expect(isYearOfThePig(0)).toBe(false);
  });

  it("should handle negative years", () => {
    expect(isYearOfThePig(-11)).toBe(false);
    expect(isYearOfThePig(-1)).toBe(true);
  });
});