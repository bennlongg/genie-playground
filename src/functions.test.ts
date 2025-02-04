import { fibonacci, bubbleSort } from "./functions";

describe("fibonacci", () => {
  test("should return the correct Fibonacci number for a given input", () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(6)).toBe(8);
    expect(fibonacci(7)).toBe(13);
  });

  test("should throw an error for negative input", () => {
    expect(() => fibonacci(-1)).toThrow("Negative numbers are not allowed");
  });
});

describe("bubbleSort", () => {
  test("should sort an unordered array of numbers", () => {
    const input = [5, 2, 9, 1, 5, 6];
    const expectedOutput = [1, 2, 5, 5, 6, 9];
    expect(bubbleSort(input)).toEqual(expectedOutput);
  });

  test("should return an already sorted array unchanged", () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = [1, 2, 3, 4, 5];
    expect(bubbleSort(input)).toEqual(expectedOutput);
  });

  test("should handle arrays with duplicate values", () => {
    const input = [3, 1, 2, 3, 1];
    const expectedOutput = [1, 1, 2, 3, 3];
    expect(bubbleSort(input)).toEqual(expectedOutput);
  });

  test("should handle an empty array", () => {
    const input: number[] = [];
    const expectedOutput: number[] = [];
    expect(bubbleSort(input)).toEqual(expectedOutput);
  });

  test("should handle a single-element array", () => {
    const input = [42];
    const expectedOutput = [42];
    expect(bubbleSort(input)).toEqual(expectedOutput);
  });
});
