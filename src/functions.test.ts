import { describe, it, expect } from "vitest";
import { fibonacci, isOdd } from "./functions";

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

describe("isOdd Function", () => {
  it("should return true for odd numbers", () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(3)).toBe(true);
    expect(isOdd(-5)).toBe(true);
  });

  it("should return false for even numbers", () => {
    expect(isOdd(2)).toBe(false);
    expect(isOdd(4)).toBe(false);
    expect(isOdd(-6)).toBe(false);
  });

  it("should throw an error if input is not an integer", () => {
    expect(() => isOdd(2.5)).toThrow("Input must be an integer");
    expect(() => isOdd(NaN)).toThrow("Input must be an integer");
    expect(() => isOdd(Infinity)).toThrow("Input must be an integer");
  });
});

