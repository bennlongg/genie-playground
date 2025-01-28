import { describe, it, expect } from "vitest";
import { fibonacci, safeJsonParse } from "./functions";

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

describe("Safe Json Parse Function", () => {
  it("should parse valid json string", () => {
    const jsonString = '{"name": "John", "age": 30}';
    const result = safeJsonParse(jsonString);
    expect(result).toEqual({ name: "John", age: 30 });
  });

  it("should return null for invalid json string", () => {
    const invalidJsonString = '{"name": "John", "age": }';
    const result = safeJsonParse(invalidJsonString);
    expect(result).toBeNull();
  });
});
