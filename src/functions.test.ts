import { describe, it, expect } from "vitest";
import { fibonacci, fuzzySearch } from "./functions";

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

describe("Fuzzy Search Function", () => {
  const list = ["apple", "banana", "grape", "orange"];

  it("should return exact match", () => {
    const result = fuzzySearch("apple", list);
    expect(result).toEqual(["apple"]);
  });

  it("should return partial matches in order of relevance", () => {
    const result = fuzzySearch("aple", list);
    expect(result).toEqual(["apple"]);
  });

  it("should return empty array if no match found", () => {
    const result = fuzzySearch("pear", list);
    expect(result).toEqual([]);
  });

  it("should handle empty query gracefully", () => {
    const result = fuzzySearch("", list);
    expect(result).toEqual([]);
  });

  it("should handle empty list gracefully", () => {
    const result = fuzzySearch("apple", []);
    expect(result).toEqual([]);
  });
});
