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

  it("should return [0] for n = 0 with returnSequence = true", () => {
    expect(fibonacci(0, true)).toEqual([0]);
  });

  it("should return [0,1] for n = 1 with returnSequence = true", () => {
    expect(fibonacci(1, true)).toEqual([0,1]);
  });

  it("should return [0,1,1] for n = 2 with returnSequence = true", () => {
    expect(fibonacci(2, true)).toEqual([0,1,1]);
  });

  it("should return [0,1,1,...55] for n = 10 with returnSequence = true", () => {
    expect(fibonacci(10,true)).toEqual([0,1,1,2,3,5,8,13,21,34,55]);
  });

  it("should throw an error for negative numbers", () => {
    expect(() => fibonacci(-1)).toThrow("Negative numbers are not allowed");
  });
});
