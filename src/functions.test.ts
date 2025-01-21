import { describe, it, expect } from "vitest";
import { fibonacci } from "./functions";
import { curriedMath } from "./functions";

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

it("should divide two numbers", () => {
expect(curriedMath("/")(6)(3)).toBe(2);
});

it("should throw an error for invalid operator", () => {
expect(() => curriedMath("%")(6)(3)).toThrow("Invalid operator");
});

it("should throw an error for division by zero", () => {
expect(() => curriedMath("/")(6)(0)).toThrow("Division by zero is not allowed");
});

it("should throw an error for invalid number of arguments", () => {
expect(() => curriedMath("+")()).toThrow("Invalid number of arguments");
});
});