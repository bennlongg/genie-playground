import { describe, it, expect } from "vitest";
import { curriedMath } from "./curriedMath";

describe("Curried Math Function", () => {
  it("should perform addition correctly", () => {
    const add = curriedMath("add");
    expect(add(2, 3)).toBe(5);
    expect(add(-2, -3)).toBe(-5);
  });

  it("should perform subtraction correctly", () => {
    const subtract = curriedMath("subtract");
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(-5, -3)).toBe(-2);
  });

  it("should perform multiplication correctly", () => {
    const multiply = curriedMath("multiply");
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, -3)).toBe(6);
    expect(multiply(0, 5)).toBe(0);
  });

  it("should perform division correctly", () => {
    const divide = curriedMath("divide");
    expect(divide(10, 2)).toBe(5);
    expect(divide(-10, -2)).toBe(5);
    expect(divide(0, 5)).toBe(0);
  });

  it("should return undefined for division by zero", () => {
    const divide = curriedMath("divide");
    expect(divide(10, 0)).toBeUndefined();
  });

  it("should throw an error for unsupported operations", () => {
    // @ts-expect-error
    expect(() => curriedMath("unsupported")).toThrowError("Unsupported operation");
  });
});