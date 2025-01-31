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

describe("Bubble Sort Function", () => {
  it("should sort an empty array", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("should sort an array with one element", () => {
    expect(bubbleSort([42])).toEqual([42]);
  });

  it("should sort an already sorted array", () => {
    expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("should sort a reverse-sorted array", () => {
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  it("should sort an unsorted array", () => {
    expect(bubbleSort([5,4,8])).toEqual([4,5,8])
    expect(bubbleSort([7,-3,-6])).toEqual([-6,-3,7])
    expect(bubbleSort([-6,-9,-10])).toEqual([-10,-9,-6])
    expect(bubbleSort([0xAA21,-0xFF42])).toEqual([-65346,43553])
    expect(bubbleSort([0b11110000,-0b10101111])).toEqual([-175,240])
    
})

  
});