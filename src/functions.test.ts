import { describe, it, expect } from "vitest";
import { fibonacci, bubbleSort } from "./functions";

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

})