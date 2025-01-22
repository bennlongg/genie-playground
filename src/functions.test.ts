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
  it("should return correct index when target is found at beginning", () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 1;
    const result = binarySearch(arr, target);
    expect(result).toBe(0);
  });

  it("should return correct index when target is found in middle", () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 3;
    const result = binarySearch(arr, target);
    expect(result).toBe(2);
  });

  it("should return correct index when target is found at end", () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 5;
    const result = binarySearch(arr, target);
    expect(result).toBe(4);
  });

  it("should return -1 when target is not found", () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 6;
    const result = binarySearch(arr, target);
    expect(result).toBe(-1);
  });

  it("should handle empty array by returning -1", () => {
    const arr: number[] = [];
    const target = 3;
    const result = binarySearch(arr, target);
    expect(result).toBe(-1);
  });

  it("should handle array with duplicate elements by returning a valid index", () => {
    const arr = [1, 2, 3, 3, 4];
    const target = 3;
    const result = binarySearch(arr, target);
    expect(result).toBeGreaterThanOrEqual(2); // Valid index should be >=2
    expect(result).toBeLessThanOrEqual(3); // Valid index should be <=3
});

it("should handle custom comparator functions correctly", () => {
const arr = [5,4 ,3 ,2 ,1];
const target=3;
const compareFn=(a:number,b:number)=>b-a; // Custom comparator for descending order
const result=binarySearch(arr,target ,compareFn );
expect(result ).toBe (2); // Index of 'c' in descending order
});
});
