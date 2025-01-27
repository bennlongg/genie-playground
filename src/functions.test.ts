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
  const add = curriedMath("add");
  const subtract = curriedMath("subtract");
  const divide = curriedMath("divide");
  const power = curriedMath("power");

  it("should add two numbers when both arguments are provided at once", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("should add two numbers when arguments are provided one at a time", () => {
    const addTwo = add(2);
    expect(addTwo(3)).toBe(5);
  });

  it("should handle more than two arguments by chaining calls", () => {
    const addThreeNumbers = (a: number, b: number, c: number) => a + b + c;
    const curriedAddThreeNumbers = curriedMath(addThreeNumbers);
    expect(curriedAddThreeNumbers(1)(2)(3)).toBe(6);
  });

  it("should throw an error when no arguments are provided", () => {
    expect(() => (add as any)()).toThrow();
  });

  it("should subtract two numbers when both arguments are provided at once", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it("should subtract two numbers when arguments are provided one at a time", () => {
    const subtractTwo = subtract(5);
    expect(subtractTwo(3)).toBe(2);
  });

  it("should divide two numbers when both arguments are provided at once", () => {
    expect(divide(6, 3)).toBe(2);
  });

  it("should divide two numbers when arguments are provided one at a time", () => {
    const divideByTwo = divide(6);
    expect(divideByTwo(3)).toBe(2);
  });

  it("should raise a number to a power when both arguments are provided at once", () => {
    expect(power(2, 3)).toBe(8);
  });

});
