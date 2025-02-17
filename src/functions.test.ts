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
  it("should correctly add two numbers", () => {
    const add = curriedMath("add");
    expect(add(1, 2)).toBe(3);
  });

  it("should correctly subtract two numbers", () => {
    const subtract = curriedMath("subtract");
    expect(subtract(5, 3)).toBe(2);
  });

  it("should correctly multiply two numbers", () => {
    const multiply = curriedMath("multiply");
    expect(multiply(4, 3)).toBe(12);
  });

  it("should correctly divide two numbers", () => {
    const divide = curriedMath("divide");
    expect(divide(10, 2)).toBe(5);

    // Edge case: Division by zero
    expect(divide(10, 0)).toBe(Infinity);
  });

  it("should throw an error for unsupported operations", () => {
    expect(() => curriedMath("modulus")).toThrow("Unsupported operation");
  });

  it("should return a valid result when using the default case", () => {
    const mathFunc = curriedMath("invalidOperation" as any);
    expect(() => mathFunc(1, 2)).toThrow("Unsupported operation");
  });

  // Additional edge cases
  it("should return the correct result for adding negative numbers", () => {
    const add = curriedMath("add");
    expect(add(-5, 3)).toBe(-2);
    expect(add(5, -3)).toBe(2);
  });

  it("should handle zero as an operand for all operations", () => {
    const add = curriedMath("add");
    expect(add(0, 4)).toBe(4);

    const subtract = curriedMath("subtract");
    expect(subtract(0, 4)).toBe(-4);

    const multiply = curriedMath("multiply");
    expect(multiply(0, 4)).toBe(0);

    const divide = curriedMath("divide");
    expect(divide(0, 4)).toBe(0);
  });
});