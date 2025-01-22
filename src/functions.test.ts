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

describe("Curried Math Functions", () => {
  const math = curriedMath();

  it("should add two numbers correctly", () => {
    expect(math.add(2)(3)).toBe(5);
  });

  it("should subtract two numbers correctly", () => {
    expect(math.subtract(5)(3)).toBe(2);
  });

  it("should multiply two numbers correctly", () => {
    expect(math.multiply(2)(3)).toBe(6);
  });

  it("should divide two numbers correctly", () => {
    expect(math.divide(6)(3)).toBe(2);
  });

  it("should throw an error when dividing by zero", () => {
    expect(() => math.divide(6)(0)).toThrow("Division by zero is not allowed");
  });

  it("should exponentiate two numbers correctly", () => {
    expect(math.exponentiate(2)(3)).toBe(8);
  });
});
