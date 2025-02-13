import { describe, it, expect } from "vitest";
import { fibonacci, binarySearch, bubbleSort } from "./functions";

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
  it("should return the correct index for a target in a sorted array", () => {
    const sortedArray = [3, 15, 25, 35, 50, 70, 110, 345, 1024];
    expect(binarySearch(sortedArray, 50)).toBe(4); 
  });

  it("should return -1 if the target is not found in a sorted array", () => {
    const sortedArray = [3, 15, 25, 35, 50, 70, 110, 345, 1024];
    expect(binarySearch(sortedArray, 20)).toBe(-1);
  });

  it("should return the first occurrence of the target if there are duplicates", () => {
    const sortedArray = [3, 15, 25, 35, 50, 50, 70, 110, 345, 1024];
    expect(binarySearch(sortedArray, 50)).toBe(4); 
  });

  it("should correctly handle an array with a single element", () => {
    const singleElementArray = [42];
    expect(binarySearch(singleElementArray, 42)).toBe(0); 
    expect(binarySearch(singleElementArray, 100)).toBe(-1); 
  });

  it("should correctly handle an empty array", () => {
    const emptyArray: number[] = [];
    expect(binarySearch(emptyArray, 5)).toBe(-1);
  });

  it("should find the correct index for negative numbers", () => {
    const sortedArray = [-10, -5, 0, 5, 10, 15, 20];
    expect(binarySearch(sortedArray, -5)).toBe(1); 
  });

  it("should find the first element in the sorted array", () => {
    const sortedArray = [1, 2, 3, 4, 5];
    expect(binarySearch(sortedArray, 1)).toBe(0); 
  });

  it("should find the last element in the sorted array", () => {
    const sortedArray = [1, 2, 3, 4, 5];
    expect(binarySearch(sortedArray, 5)).toBe(4); 
  });

  it("should return the correct index if the target is the mid-point", () => {
    const sortedArray = [1, 2, 3, 4, 5];
    expect(binarySearch(sortedArray, 3)).toBe(2); 
  });

  it("should return -1 for an unsorted array", () => {
    const unsortedArray = [30, 10, 50, 20, 40];
    expect(binarySearch(unsortedArray, 50)).toBe(-1);
  });
});

describe("Bubble Sort Function", () => {
  it("should sort an unsorted array of numbers in ascending order", () => {
    const unsortedArray = [5, 3, 8, 1, 2];
    const sorted = bubbleSort(unsortedArray);
    expect(sorted).toEqual([1, 2, 3, 5, 8]);
  });

  it("should handle an already sorted array and return the same result", () => {
    const sortedArray = [1, 2, 3, 4, 5];
    const result = bubbleSort(sortedArray); 
    expect(result).toEqual(sortedArray); 
  });

  it("should correctly sort an array containing negative numbers", () => {
    const arrayWithNegatives = [-10, 5, -3, 0, 7];
    const sorted = bubbleSort(arrayWithNegatives);
    expect(sorted).toEqual([-10, -3, 0, 5, 7]);
  });

  it("should correctly sort an array with duplicate numbers", () => {
    const arrayWithDuplicates = [5, 3, 8, 3, 1, 5];
    const sorted = bubbleSort(arrayWithDuplicates);
    expect(sorted).toEqual([1, 3, 3, 5, 5, 8]);
  });

  it("should handle an empty array by returning an empty array", () => {
    const emptyArray: number[] = [];
    const sorted = bubbleSort(emptyArray);
    expect(sorted).toEqual([]);
  });
});