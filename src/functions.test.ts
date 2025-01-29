import { describe, it, expect } from "vitest";
import { fibonacci } from "./functions";

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

describe('bubbleSort', () => {
it('should sort an already sorted array', () => {
const arr = [1,2 ,3 ,4 ,5];
expect(bubbleSort(arr)).toEqual([1 ,2 ,3 ,4 ,5]);
});

it('should sort a reverse ordered array', () => {
const arr = [5 ,4 ,3 ,2 ,1];
expect(bubbleSort(arr)).toEqual([1 ,2 ,3 ,4 ,5]);
});

it('should handle an empty array', () => {
const arr: number[] = [];
expect(bubbleSort(arr)).toEqual([]);
});

it('should sort an array with duplicates', () => {
const arr = [3 ,2 ,1 ,2 ,3];
expect(bubbleSort(arr)).toEqual([1 ,2 ,2 ,3 ,3]);
});

describe('fibonacci', () => {
});

describe('binarySearch', () => {
});

describe('fibonacci', () => {
