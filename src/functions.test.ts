import { describe, it, expect } from "vitest";
import { fibonacci } from "./functions";
import { factorial } from "./functions";

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

describe("Factorial2 Function", () => {
it("should return correct value for large input", () => {
expect(factorial2(10)).toBe(3628800);
});

it("should throw an error for negative numbers", () => {
expect(() => factorial2(-1)).toThrow("Negative numbers are not allowed");
});
});

describe("Curried Math Function", () => {
it("should add two numbers correctly", () => {
const add = curriedMath("add");
expect(add(3,4)).toBe(7);
});

it("should subtract two numbers correctly", () => {
const subtract = curriedMath("subtract");
expect(subtract(7,4)).toBe(3);
});

it("should multiply two numbers correctly", () => {
const multiply = curriedMath("multiply");
expect(multiply(3,4)).toBe(12);
});

it("should divide two numbers correctly", () => {
const divide = curriedMath("divide");
expect(divide(8,4)).toBe(2);
});

it("should throw an error when dividing by zero", () => {
const divide = curriedMath("divide");
expect(() => divide(8,0)).toThrowError();
});
});
