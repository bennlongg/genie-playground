import { describe, it, expect } from "vitest";
import { fibonacci } from "./functions";
import { binarySearch } from "./functions";

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
  it("should find an existing element in a sorted array", () => {
    const arr = [1, 3, 5, 7, 9];
    const target = 5;
    expect(binarySearch(arr, target)).toBe(2);
  });

  it("should return -1 if the element is not found in a sorted array", () => {
    const arr = [1, 3, 5, 7, 9];
    const target = 6;
    expect(binarySearch(arr, target)).toBe(-1);
  });

   it("should handle empty arrays and return -1", () => {
     const arr: number[] = [];
     const target = 5;
     expect(binarySearch(arr, target)).toBe(-1);
   });

   it("should handle single-element arrays correctly", () => {
     const arr = [8];
     const target = 8;
     expect(binarySearch(arr, target)).toBe(0);
   });

   it("should handle arrays with all identical elements not matching target", () => {
     const arr = [4,4 ,4 ,4 ,4 ,4 ,4];
     const target =2;
     expect(binarySearch(arr,target)).toBe(-1)
   })
});