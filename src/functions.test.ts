import { describe, it, expect } from "vitest";
import { fibonacci, curriedAdd } from "./functions";

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

describe("Curried Addition Function", () => {
  it("should correctly add two positive numbers", () => {
    const add5 = curriedAdd(5);
    expect(add5(3)).toBe(8);
  });

  it("should correctly add when the second number is zero", () => {
    const add10 = curriedAdd(10);
    expect(add10(0)).toBe(10);
  });

  it("should correctly add when the first number is zero", () => {
    const add0 = curriedAdd(0);
    expect(add0(7)).toBe(7);
  });

  it("should handle negative numbers correctly", () => {
    const addNegative5 = curriedAdd(-5);
    expect(addNegative5(10)).toBe(5);
    expect(addNegative5(-3)).toBe(-8);
  });

  it("should maintain separate states for different invocations", () => {
    const add3 = curriedAdd(3);
    const add7 = curriedAdd(7);
    
    expect(add3(4)).toBe(7);
    expect(add7(4)).toBe(11);
    expect(add3(10)).toBe(13);
  });

  it("should be reusable for different calculations", () => {
    const add5 = curriedAdd(5);
    
    expect(add5(10)).toBe(15);
    expect(add5(20)).toBe(25);
    expect(add5(-8)).toBe(-3);
  });
});
