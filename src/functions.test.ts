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
  it("should return correct index when target is present", () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 3;
    const result = binarySearch(arr, target);
    expect(result).toBe(2); // Index of target (3) in arr
  });

  it("should return -1 when target is not present", () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 6;
    const result = binarySearch(arr, target);
    expect(result).toBe(-1); // Target (6) not found
  });

  it("should handle edge cases correctly", () => {
    const emptyArr: number[] = [];
    const singleElementArr = [42];
    const targetInSingleElementArr = 42;
    const targetNotInSingleElementArr = 99;

    expect(binarySearch(emptyArr, targetInSingleElementArr)).toBe(-1); // Empty array
    expect(binarySearch(singleElementArr, targetInSingleElementArr)).toBe(0); // Single element array with target
    expect(binarySearch(singleElementArr, targetNotInSingleElementArr)).toBe(-1); // Single element array without target
  });

  it("should work with custom comparator functions", () => {
    const arr = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const target = { id: 2 };
    
    const compareFn = (a: { id: number }, b: { id: number }) => a.id - b.id;
    
    const result = binarySearch(arr.map(item => item.id), target.id);
    
    expect(result).toBe(1); // Index of object with id=2 in arr
});

it("should throw an error if input array is not sorted", () => {
const unsortedArr = [5, 3, 4];
const target = 3;

expect(() => binarySearch(unsortedArr, target)).toThrow();
});
});
