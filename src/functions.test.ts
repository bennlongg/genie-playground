import { describe, it, expect } from "vitest";
import { fibonacci, add, subtract } from "./functions";

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

describe("Add Function", () => {
  it("should return correct sum when both arguments are provided", () => {
    expect(add(2)(3)).toBe(5);
    expect(add(-2)(3)).toBe(1);
    expect(add(0)(0)).toBe(0);
    expect(add(1000000)(1000000)).toBe(2000000);
  });

  it("should return correct sum when used as a curried function", () => {
    const addFive = add(5);
    expect(addFive(3)).toBe(8);
    expect(addFive(-3)).toBe(2);
    expect(addFive(0)).toBe(5);
  });
});

describe("Subtract Function", () => {
  it("should return correct difference when both arguments are provided", () => {
    expect(subtract(5)(3)).toBe(2);
    expect(subtract(-2)(3)).toBe(-5);
    expect(subtract(0)(0)).toBe(0);
    expect(subtract(1000000)(500000)).toBe(500000);
  });

  it("should return correct difference when used as a curried function", () => {
    const subtractFive = subtract(5);
    expect(subtractFive(3)).toBe(-2);
    expect(subtractFive(-3)).toBe(-8);
    expect(subtractFive(0)).toBe(-5);
  });
});
