import { fibonacci, bubbleSort } from "./functions";

describe("fibonacci", () => {
  it("should return the correct Fibonacci number for a given input", () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(6)).toBe(8);
    expect(fibonacci(7)).toBe(13);
    expect(fibonacci(8)).toBe(21);
    expect(fibonacci(9)).toBe(34);
    expect(fibonacci(10)).toBe(55);
  });

  it("should throw an error for negative input", () => {
    expect(() => fibonacci(-1)).toThrow("Negative numbers are not allowed");
  });
});

describe("bubbleSort", () => {
  it("should return an empty array when given an empty array", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("should return the same array when given an array with a single element", () => {
    expect(bubbleSort([1])).toEqual([1]);
  });

  it("should return a sorted array when given an array with multiple elements", () => {
    expect(bubbleSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([
      1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9,
    ]);
  });

  it("should return a sorted array when given an already sorted array", () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return a sorted array when given an array with duplicate values", () => {
    expect(bubbleSort([5, 3, 8, 3, 1, 9, 3])).toEqual([1, 3, 3, 3, 5, 8, 9]);
  });

  it("should return a sorted array when given an array sorted in reverse order", () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
});
