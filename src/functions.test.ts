import { describe, it, expect } from "vitest";
import { fibonacci, curriedMathFunction } from "./functions";

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
  const add = (a: number, b: number) => a + b;
  const subtract = (a: number, b: number) => a - b;
  const multiply = (a: number, b: number) => a * b;
  const divide = (a: number, b: number) => a / b;

  it("should correctly curry addition", () => {
    const curriedAdd = curriedMathFunction(add);
    expect(curriedAdd(2)(3)).toBe(5);
    expect(curriedAdd(2, 3)).toBe(5);
  });

  it("should correctly curry subtraction", () => {
    const curriedSubtract = curriedMathFunction(subtract);
    expect(curriedSubtract(5)(3)).toBe(2);
    expect(curriedSubtract(5, 3)).toBe(2);
  });

  it("should correctly curry multiplication", () => {
    const curriedMultiply = curriedMathFunction(multiply);
    expect(curriedMultiply(2)(3)).toBe(6);
    expect(curriedMultiply(2, 3)).toBe(6);
  });

  it("should correctly curry division", () => {
    const curriedDivide = curriedMathFunction(divide);
    expect(curriedDivide(6)(3)).toBe(2);
    expect(curriedDivide(6, 3)).toBe(2);
  });

  it("should correctly curry addition with three numbers", () => {
    const addThreeNumbers = (a: number, b: number, c: number) => a + b + c;
    const curriedAddThreeNumbers = curriedMathFunction(addThreeNumbers);
    expect(curriedAddThreeNumbers(1)(2)(3)).toBe(6);
    expect(curriedAddThreeNumbers(1, 2)(3)).toBe(6);
    expect(curriedAddThreeNumbers(1)(2, 3)).toBe(6);
    expect(curriedAddThreeNumbers(1, 2, 3)).toBe(6);
  });
});
