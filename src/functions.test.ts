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

describe("Binary Search Function", () => {
it("should return correct index when target is present", () => {
const arr = [1, 2, 3, 4, 5];
const target = 3;
expect(binarySearch(arr, target)).toBe(2);
});

it("should return -1 when target is not present", () => {
const arr = [1, 2, 3, 4, 5];
const target = 6;
expect(binarySearch(arr, target)).toBe(-1);
});

it("should handle empty arrays", () => {
const arr: number[] = [];
const target = 3;
expect(binarySearch(arr, target)).toBe(-1);
});

it("should handle arrays with one element", () => {
const arr = [3];
const target = 3;
expect(binarySearch(arr, target)).toBe(0);
});
});

});