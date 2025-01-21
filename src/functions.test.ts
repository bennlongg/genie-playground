import { describe, it, expect } from "vitest";
import { fibonacci, factorial } from "./functions";

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

it("should return correct value when n=6", () => {
expect(factorial(6)).toBe(720);
});

it("should return correct value when n=10", () => {
expect(factorial(10)).toBe(3628800);
});

it("should throw an error when negative number is passed", () => {
expect(() => factorial(-5)).toThrowError();
});
});
