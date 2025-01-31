import { describe, it, expect } from "vitest";
import { bubbleSort, fibonacci } from "./functions";

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

	it("should throw an error when return value is negative", () => {
		expect(() => fibonacci(100)).toThrow("Negative numbers are not allowed");
	});
});

describe('Bubble Sort Function', () => {
	// Unit test: should return an empty array when given an empty array
	it('should return an empty array when given an empty array', () => {
	  expect(bubbleSort([])).toEqual([]);
	});
  
	// Unit test: should not modify a single-element array
	it('should not modify a single-element array', () => {
	  expect(bubbleSort([42])).toEqual([42]);
	});
  
	// Unit test: should sort an already sorted array correctly
	it('should sort an already sorted array correctly', () => {
	  expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
	});
  
	// Unit test: should sort a reverse-sorted array correctly
	it('should sort a reverse-sorted array correctly', () => {
	  expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
	});
  
	// Unit test: should sort unsorted arrays correctly
	it('should sort unsorted arrays correctly', () => {
	  expect(bubbleSort([4, 2, 5])).toEqual([2, 4, 5]);
	  expect(bubbleSort([8, -3, -9])).toEqual([-9, -3, 8]);
	  expect(bubbleSort([3.2, -7.5])).toEqual([-7.5, 3.2]);
	});
});
