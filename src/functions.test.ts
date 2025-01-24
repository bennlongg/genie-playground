import { describe, it, expect } from "vitest";
import { fibonacci } from "./functions";

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

  it("should return 2 for n = 3", () => {
    expect(fibonacci(3)).toBe(2);
  });

  it("should return 3 for n = 4", () => {
    expect(fibonacci(4)).toBe(3);
  });

  it("should return 5 for n = 5", () => {
    expect(fibonacci(5)).toBe(5);
  });

  it("should return 55 for n = 10", () => {
    expect(fibonacci(10)).toBe(55);
  });

  it("should return a large number for n = 20", () => {
    expect(fibonacci(20)).toBeGreaterThan(100);
  });

  it("should return a very large number for n = 30", () => {
    expect(fibonacci(30)).toBeGreaterThan(100000);
  });

  it("should throw an error for negative numbers", () => {
    expect(() => fibonacci(-1)).toThrow("Negative numbers are not allowed");
  });

  it("should throw an error for non-integer numbers", () => {
    expect(() => fibonacci(1.5)).toThrow(
      "Non-integer numbers are not allowed"
    );
});