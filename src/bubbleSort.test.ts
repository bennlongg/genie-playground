import { describe, it, expect } from "vitest";
import { bubbleSort } from "./bubbleSort";

describe("BubbleSort Function", () => {
  it("should return the sorted array for an already sorted array", () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return the sorted array for a reverse-ordered array", () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return the sorted array for an array with duplicate values", () => {
    expect(bubbleSort([3, 1, 2, 1, 3])).toEqual([1, 1, 2, 3, 3]);
  });

  it("should return the sorted array for an unsorted array", () => {
    expect(bubbleSort([3, 1, 4, 1, 5, 9, 2, 6])).toEqual([1, 1, 2, 3, 4, 5, 6, 9]);
  });

  it("should return an empty array for an empty array", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("should return the same array for single element arrays", () => {
    expect(bubbleSort([5])).toEqual([5]);
    expect(bubbleSort([1])).toEqual([1]);
  });
});