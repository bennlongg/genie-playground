import { describe, it, expect } from "vitest";
import { 
  fibonacci, 
  curriedMath, 
  curriedAdd,
  curriedSubtract,
  curriedMultiply, 
  curriedDivide 
} from "./functions";

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

describe("Curried Math Function", () => {
  describe("General curriedMath function", () => {
    it("should correctly perform addition", () => {
      const add = curriedMath('add');
      const add5 = add(5);
      expect(add5(3)).toBe(8);
    });

    it("should correctly perform subtraction", () => {
      const subtract = curriedMath('subtract');
      const subtract5 = subtract(10);
      expect(subtract5(4)).toBe(6);
    });

    it("should correctly perform multiplication", () => {
      const multiply = curriedMath('multiply');
      const multiplyBy3 = multiply(3);
      expect(multiplyBy3(4)).toBe(12);
    });

    it("should correctly perform division", () => {
      const divide = curriedMath('divide');
      const divide10 = divide(10);
      expect(divide10(2)).toBe(5);
    });

    it("should throw an error when dividing by zero", () => {
      const divide = curriedMath('divide');
      const divide10 = divide(10);
      expect(() => divide10(0)).toThrow("Division by zero is not allowed");
    });
  });

  describe("Addition (curriedAdd)", () => {
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
  });

  describe("Subtraction (curriedSubtract)", () => {
    it("should correctly subtract two positive numbers", () => {
      const subtract5 = curriedSubtract(10);
      expect(subtract5(3)).toBe(7);
    });

    it("should correctly subtract when the second number is zero", () => {
      const subtract10 = curriedSubtract(10);
      expect(subtract10(0)).toBe(10);
    });

    it("should correctly subtract when the first number is zero", () => {
      const subtract0 = curriedSubtract(0);
      expect(subtract0(7)).toBe(-7);
    });

    it("should handle negative numbers correctly", () => {
      const subtractNegative5 = curriedSubtract(-5);
      expect(subtractNegative5(10)).toBe(-15);
      expect(subtractNegative5(-3)).toBe(-2);
    });
  });

  describe("Multiplication (curriedMultiply)", () => {
    it("should correctly multiply two positive numbers", () => {
      const multiplyBy5 = curriedMultiply(5);
      expect(multiplyBy5(3)).toBe(15);
    });

    it("should correctly multiply when the second number is zero", () => {
      const multiplyBy10 = curriedMultiply(10);
      expect(multiplyBy10(0)).toBe(0);
    });

    it("should correctly multiply when the first number is zero", () => {
      const multiplyBy0 = curriedMultiply(0);
      expect(multiplyBy0(7)).toBe(0);
    });

    it("should handle negative numbers correctly", () => {
      const multiplyByNegative5 = curriedMultiply(-5);
      expect(multiplyByNegative5(10)).toBe(-50);
      expect(multiplyByNegative5(-3)).toBe(15);
    });
  });

  describe("Division (curriedDivide)", () => {
    it("should correctly divide two positive numbers", () => {
      const divide10 = curriedDivide(10);
      expect(divide10(2)).toBe(5);
    });

    it("should handle division where result is not an integer", () => {
      const divide10 = curriedDivide(10);
      expect(divide10(3)).toBeCloseTo(3.333, 3);
    });

    it("should throw an error when dividing by zero", () => {
      const divide10 = curriedDivide(10);
      expect(() => divide10(0)).toThrow("Division by zero is not allowed");
    });

    it("should correctly divide when the first number is zero", () => {
      const divide0 = curriedDivide(0);
      expect(divide0(7)).toBe(0);
    });

    it("should handle negative numbers correctly", () => {
      const divideNegative10 = curriedDivide(-10);
      expect(divideNegative10(2)).toBe(-5);
      expect(divideNegative10(-2)).toBe(5);
    });
  });
});
