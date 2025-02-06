import { describe, it, expect } from "vitest";
import { fibonacci, binarySearchNumber, binarySearchString } from "./functions";

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

describe("Binary Search Number Function", () => {
  it("should return -1 for an empty array", () => {
    expect(binarySearchNumber([], 5)).toBe(-1);
  });

  it("should return the correct index for a target in the array", () => {
    expect(binarySearchNumber([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(binarySearchNumber([1, 2, 3, 4, 5], 1)).toBe(0);
    expect(binarySearchNumber([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  it("should return -1 if the target is not in the array", () => {
    expect(binarySearchNumber([1, 2, 3, 4, 5], 6)).toBe(-1);
  });
});

describe("Binary Search String Function", () => {
  it("should return -1 for an empty array", () => {
    expect(binarySearchString([], "apple")).toBe(-1);
  });

  it("should return the correct index for a target in the array", () => {
    expect(binarySearchString(["apple", "banana", "cherry"], "banana")).toBe(1);
    expect(binarySearchString(["apple", "banana", "cherry"], "apple")).toBe(0);
    expect(binarySearchString(["apple", "banana", "cherry"], "cherry")).toBe(2);
  });

  it("should return -1 if the target is not in the array", () => {
    expect(binarySearchString(["apple", "banana", "cherry"], "date")).toBe(-1);
  });
});