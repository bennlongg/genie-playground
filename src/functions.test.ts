import { describe, it, expect } from "vitest";
import { fibonacci, bubbleSort, binarySearch } from "./functions";

// Fibonacci Functiondescribe("Fibonacci Function", () => {
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

  // Bubble Sort
  describe("Bubble Sort Function", () => {

  it("should return a sorted array for an already sorted input", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const sortedArray = bubbleSort(inputArray);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return a sorted array for an unsorted input", () => {
    const inputArray = [5, 2, 4, 3, 1];
    const sortedArray = bubbleSort(inputArray);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return an empty array for an empty input", () => {
    const inputArray: number[] = [];
    const sortedArray = bubbleSort(inputArray);
    expect(sortedArray).toEqual([]);
  });

  it("should return the same array for a single-element input", () => {
    const inputArray = [1];
    const sortedArray = bubbleSort(inputArray);
    expect(sortedArray).toEqual([1]);
  });

  it("should return a sorted array for an input with duplicate values", () => {
    const inputArray = [2, 3, 1, 4, 2];
    const sortedArray = bubbleSort(inputArray);
    expect(sortedArray).toEqual([1, 2, 2, 3, 4]);
  });

  it("should return a sorted array for an input with negative values", () => {
    const inputArray = [5, -2, 4, -3, 1];
    const sortedArray = bubbleSort(inputArray);
    expect(sortedArray).toEqual([-3, -2, 1, 4, 5]);
  });

  it("should throw an error for input that is NOT an array", () => {
    // @ts-ignore
    expect(() => bubbleSort({})).toThrow("Passed argument is not a array");
  });

});


  // Binary Search
describe("Binary Search Function", () => {

  it("should return the index for an exiting value", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const searchedValue = 3;
    const index = binarySearch(inputArray, searchedValue);
    expect(index).toEqual(2);
  });

  it("should return -1 for NOT exiting value", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const searchedValue = 6;
    const index = binarySearch(inputArray, searchedValue);
    expect(index).toEqual(-1);
  });

  it("should return -1  for empty array", () => {
    const inputArray: number[] = [];
    const targetValue = 1;
    const index =  binarySearch(inputArray, targetValue);
    expect(index).toEqual(-1);
  });

  it("should return the index for the lower bound value", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const targetValue = 1;
    const index =  binarySearch(inputArray, targetValue);
    expect(index).toEqual(0);
  });

  it("should return the index for the upper bound value", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const targetValue = 5;
    const index =  binarySearch(inputArray, targetValue);
    expect(index).toEqual(4);
  });

  it("should throw an error for input that is NOT an array", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const targetValue = 5;
    // @ts-ignore
    expect(() => binarySearch({}, targetValue)).toThrow("Passed argument is not a array");
  });


});