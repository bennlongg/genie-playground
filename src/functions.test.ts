import { describe, it, expect } from "vitest";
// [Genie] Update import statement to include both fibonacci and binarySearch functions from "./functions".
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

// [Genie] Add test cases for a binary search function including basic functionality and edge cases.
describe('Binary Search', () => {
  it('should return index of target in sorted array', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 4)).toBe(3); 
    expect(binarySearch([10, 20, 30], 10)).toBe(0); 
    expect(binarySearch([-5,-3,-1], -3)).toBe(1); 
});

it('should return -1 if target is not present', () => {
    expect(binarySearch([1,2,3],4)).toBe(-1);
});

it('should handle empty arrays', () => {
   expect(binarySearch([],10)).toBe(-1); 
});

it('should handle single element arrays', () => {
   expect(binarySearch([5],5)).toBe(0); 
   expect(binarySearch([5],10)).toBe(-1); 
});
});
