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
