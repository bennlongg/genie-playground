import { fibonacci, binarySearch } from "./functions";

describe("fibonacci", () => {
  it("returns 0 for input 0", () => {
    expect(fibonacci(0)).toBe(0);
  });

  it("returns 1 for input 1", () => {
    expect(fibonacci(1)).toBe(1);
  });

  it("returns 5 for input 5", () => {
    expect(fibonacci(5)).toBe(5);
  });

  it("throws an error for negative input", () => {
    expect(() => {
      fibonacci(-5);
    }).toThrow("Negative numbers are not allowed");
  });
});

describe("binarySearch", () => {
  it("returns -1 for an empty array", () => {
    expect(binarySearch([], 5)).toBe(-1);
  });

  it("returns 0 for a single-element array with a matching target", () => {
    expect(binarySearch([42], 42)).toBe(0);
  });

  it("returns -1 for a single-element array without a matching target", () => {
    expect(binarySearch([42], 17)).toBe(-1);
  });

  it("returns the correct index when the target is found in a multi-element array", () => {
    expect(binarySearch([1, 3, 4, 7, 9, 12], 7)).toBe(3);
  });

  it("returns -1 when the target is not found in a multi-element array", () => {
    expect(binarySearch([1, 3, 4, 7, 9, 12], 2)).toBe(-1);
  });
});