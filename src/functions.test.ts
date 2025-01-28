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

describe("safeJsonParse", () => {
  it("should parse valid JSON string", () => {
    const jsonString = '{"key": "value"}';
    const result = safeJsonParse(jsonString);
    expect(result).toEqual({ key: "value" });
  });

  it("should return null for invalid JSON string", () => {
    const invalidJsonString = '{"key": "value"';
    const result = safeJsonParse(invalidJsonString);
    expect(result).toBeNull();
  });

  it("should return null for non-JSON string", () => {
    const nonJsonString = "Hello, world!";
    const result = safeJsonParse(nonJsonString);
    expect(result).toBeNull();
  });
});
