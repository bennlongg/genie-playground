import { describe, it, expect } from "vitest";
import { fibonacci, isodd, iseven } from "./functions";

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

describe("isodd Function", () => {
  it("should return true for positive odd numbers", () => {
    expect(isodd(3)).toBe(true);
  });

  it("should return false for positive even numbers", () => {
    expect(isodd(4)).toBe(false);
  });

  it("should return false for zero", () => {
    expect(isodd(0)).toBe(false);
  });

  it("should return true for negative odd numbers", () => {
    expect(isodd(-3)).toBe(true);
  });

  it("should return false for negative even numbers", () => {
    expect(isodd(-4)).toBe(false);
  });
});

describe("iseven Function", () => {
  it("should return true for positive even numbers", () => {
    expect(iseven(4)).toBe(true);
  });

  it("should return false for positive odd numbers", () => {
    expect(iseven(3)).toBe(false);
  });

  it("should return true for zero", () => {
    expect(iseven(0)).toBe(true);
  });

  it("should return true for negative even numbers", () => {
    expect(iseven(-4)).toBe(true);
  });

  it("should return false for negative odd numbers", () => {
    expect(iseven(-3)).toBe(false);
});