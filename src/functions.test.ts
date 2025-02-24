```typescript
import { describe, it, expect } from "vitest";
import { fibonacci, binarySearch } from "./functions";

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
  it("should return the index of the target when it is present", () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 3;
    expect(binarySearch(arr, target)).toBe(2);
  });

  it("should return -1 when the target is not present", () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 6;
    expect(binarySearch(arr, target)).toBe(-1);
  });

  it("should return -1 for an empty array", () => {
    const arr: number[] = [];
    const target = 3;
    expect(binarySearch(arr, target)).toBe(-1);
  });

  it("should handle an array with a single element correctly", () => {
    const arr = [3];
    const target = 3;
    expect(binarySearch(arr, target)).toBe(0);
    
    const targetNotFound = 4;
    expect(binarySearch(arr, targetNotFound)).toBe(-1);
  });
});
```