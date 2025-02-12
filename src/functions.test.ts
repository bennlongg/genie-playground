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

  it("should return 6765 for n = 20", () => {
    expect(fibonacci(20)).toBe(6765);
  });

  it("should throw an error for negative numbers", () => {
    expect(() => fibonacci(-1)).toThrow("Negative numbers are not allowed");
  });
});

describe("Binary Search Function", () => {
  const arr = [1, 2, 3, 4, 5];
  it("returns the correct index of the target when present", () => {
    expect(binarySearch(arr, 4)).toBe(3);
  });

  it("returns -1 when the target is not present", () => {
    expect(binarySearch(arr, 10)).toBe(-1);
  });
});