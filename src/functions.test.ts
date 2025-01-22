import { describe, it, expect } from "vitest";
import { fibonacci } from "./functions";

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

  it("should return 6765 for n = 20", () => {
    expect(fibonacci(20)).toBe(6765);
  });

  it("should return 832040 for n = 30", () => {
    expect(fibonacci(30)).toBe(832040);
  });

  it("should throw an error for negative numbers", () => {
    expect(() => fibonacci(-1)).toThrow("Negative numbers are not allowed");
  });

  it("should throw an error for non-integer numbers", () => {
    expect(() => fibonacci(1.5)).toThrow(
      "Non-integer numbers are not allowed"
    );
  });
});
