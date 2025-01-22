import { describe, it, expect } from "vitest";
import { fibonacci, curriedMath } from "./functions";

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

describe("Curried Math Function", () => {
  it("should add two numbers correctly", () => {
    const add = curriedMath(5)("+");
    expect(add(3)).toBe(8);
  });

  it("should subtract two numbers correctly", () => {
    const subtract = curriedMath(5)("-");
    expect(subtract(3)).toBe(2);
  });

  it("should multiply two numbers correctly", () => {
    const multiply = curriedMath(5)("*");
    expect(multiply(3)).toBe(15);
  });

  it("should divide two numbers correctly", () => {
    const divide = curriedMath(6)("/");
    expect(divide(3)).toBe(2);
  });
});

