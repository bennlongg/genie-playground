import { describe, it, expect } from "vitest";
import { fibonacci, binarySearch, curriedMath } from "./functions";

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
  it("should return -1 when target is not found in an empty array", () => {
    const arr: number[] = [];
    const target = 5;
    const result = binarySearch(arr, target);
    expect(result).toBe(-1);
  });

  it("should return index when target is found in a single-element array", () => {
    const arr = [5];
    const target = 5;
    const result = binarySearch(arr, target);
    expect(result).toBe(0);
  });

  it("should return -1 when target is not found in a single-element array", () => {
    const arr = [5];
    const target = 10;
    const result = binarySearch(arr, target);
    expect(result).toBe(-1);
  });

  it("should return index when target is found in a multi-element array", () => {
    const arr = [1, 3, 5, 7, 9];
    const target = 7;
    const result = binarySearch(arr, target);
    expect(result).toBe(3);
  });

  it("should return -1 when target is not found in a multi-element array", () => {
    const arr = [1, 3, 5, 7, 9];
    const target = 6;
    const result = binarySearch(arr, target);
    expect(result).toBe(-1);
});

it("should return index of first occurrence when duplicates are present", () => {
const arr = [1, 3, 5, 7, 7, 9];
const target = 7;
const result = binarySearch(arr, target);
expect(result).toBe(3); // First occurrence of '7' is at index '3'
});

it("should handle custom comparator functions correctly", () => {
const arr = [{ id: "a" }, { id: "b" }, { id: "c" }];
const target = { id: "b" };
const compareFn = (a: { id: string }, b: { id: string }) =>
a.id.localeCompare(b.id);

const result = binarySearch(arr.map((obj) => obj.id), target.id);

expect(result).toBe(1); // 'b' should be at index '1'
});
});

describe("Curried Math Function", () => {
it('should add two numbers', () => {
const add = curriedMath('+');
expect(add(2,3)).toBe(5);
});

it('should subtract two numbers', () => {
const subtract = curriedMath('-');
expect(subtract(5,3)).toBe(2);
});

it('should multiply two numbers', () => {
const multiply = curriedMath('*');
expect(multiply(2,3)).toBe(6);
});

it('should divide two numbers', () => {
const divide = curriedMath('/');
expect(divide(6,3)).toBe(2);
});

it('should throw an error when dividing by zero', () => {
const divideByZero = curriedMath('/');
expect(() => divideByZero(6,0)).toThrow('Division by zero is not allowed');
});

it('should throw an error when using an invalid operator', () => {
expect(() => curriedMath('%')).toThrow('Invalid operator');
});
});
