import { describe, it, expect } from "vitest";
import { fibonacci } from "./functions";
import { curriedMath } from "./functions";
import { add } from "./functions";
import { subtract } from "./functions";
import { multiply } from "./functions";
import { divide } from "./functions";

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
  it("should correctly add two numbers using curried addition", () => {
    const curriedAdd = curriedMath(add);
    expect(curriedAdd(2)(3)).toBe(5);
  });

  it("should correctly subtract two numbers using curried subtraction", () => {
    const curriedSubtract = curriedMath(subtract);
    expect(curriedSubtract(5)(3)).toBe(2);
  });
