import { describe, it, expect } from "vitest";
import { fibonacci, binarySearch, binarySearchGeneric } from "./functions";

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
  it("should find an element in the middle of the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  it("should find the first element", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
  });

  it("should find the last element", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  it("should return -1 when element is not in the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  it("should return -1 for an empty array", () => {
    expect(binarySearch([], 1)).toBe(-1);
  });

  it("should work with repeated elements (returns index of any match)", () => {
    const result = binarySearch([1, 2, 2, 2, 3], 2);
    expect([1, 2, 3]).toContain(result); // Could be any index where 2 appears
  });
});

describe("Generic Binary Search Function", () => {
  it("should find a string in an array of strings", () => {
    expect(binarySearchGeneric(["apple", "banana", "cherry", "date"], "cherry")).toBe(2);
  });

  it("should work with custom compare function", () => {
    const people = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 35 },
      { name: "David", age: 40 }
    ];
    
    const result = binarySearchGeneric(
      people,
      { name: "Charlie", age: 35 },
      (a, b) => a.age - b.age
    );
    
    expect(result).toBe(2);
  });

  it("should return -1 when element is not found with custom compare", () => {
    const numbers = [{ value: 10 }, { value: 20 }, { value: 30 }];
    
    const result = binarySearchGeneric(
      numbers,
      { value: 25 },
      (a, b) => a.value - b.value
    );
    
    expect(result).toBe(-1);
  });
});
