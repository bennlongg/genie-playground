import { fibonacci } from "./functions";
import { unique } from "./functions";

describe("fibonacci", () => {
  it("should return correct Fibonacci numbers", () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
  });

  it("should throw an error for negative numbers", () => {
    expect(() => fibonacci(-1)).toThrow("Negative numbers are not allowed");
  });
});

describe("unique", () => {
  it("should return an array with unique elements", () => {
    const sampleInput = [1, 2, 2, 3, 4, 4];
    const expectedOutput = [1, 2, 3, 4];
    
    const result = unique(sampleInput);
    
    expect(result).toEqual(expectedOutput);
  });
});
