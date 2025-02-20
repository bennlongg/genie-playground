import { describe, expect, it } from "vitest";
import { binarySearch } from "./binarySearch";

describe("Binary Search Function", () => {
 it("should return correct index for existing target in an odd-length array", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7], 5)).toBe(4);
  });

  it("should return correct index for existing target in an even-length array", () => {
    expect(binarySearch([1, 3, 5, 7, 9, 11], 7)).toBe(3);
  });

  it("should return -1 when the target is not in the array", () => {
    expect(binarySearch([2, 4, 6, 8, 10], 7)).toBe(-1);
  });

  it("should return -1 for an empty array", () => {
    expect(binarySearch([], 10)).toBe(-1);
  });

  it("should return the correct index when there is only one element in the array", () => {
    expect(binarySearch([5], 5)).toBe(0);
    expect(binarySearch([5], 3)).toBe(-1);
  });
});