import { fibonacci, binarySearch, bubbleSort } from "./functions";

describe("fibonacci", () => {
  test("Base cases", () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
  });
  test("Recursive cases", () => {
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(10)).toBe(55);
    expect(fibonacci(15)).toBe(610);
  });
  test("Negative input", () => {
    expect(() => fibonacci(-1)).toThrow("Negative numbers are not allowed");
  });
});

describe("binarySearch", () => {
    test("Basic functionality", () => {
      const sortedArr = [1, 2, 3, 4, 5];
      expect(binarySearch(sortedArr, 3)).toBe(2);
      expect(binarySearch(sortedArr, 10)).toBe(-1);
    });
    test("Edge cases", () => {
      expect(binarySearch([], 1)).toBe(-1);
      expect(binarySearch([1, 2, 2, 3], 2)).toBe(1); // index of first occurring '2'
    });
  });
  
  describe("bubbleSort", () => {
    test("Basic functionality", () => {
      expect(bubbleSort([2, 1, 3])).toEqual([1, 2, 3]);
      expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });
    test("Edge cases", () => {
      expect(bubbleSort([])).toEqual([]);
      expect(bubbleSort([5, 1, 5])).toEqual([1, 5, 5]);
    });
  });
