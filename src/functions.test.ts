import { fibonacci, add, subtract, curriedAdd, curriedSubtract } from './functions';

describe('Math Functions', () => {
  describe('fibonacci', () => {
    test('should return correct fibonacci numbers', () => {
      expect(fibonacci(0)).toBe(0);
      expect(fibonacci(1)).toBe(1);
      expect(fibonacci(2)).toBe(1);
      expect(fibonacci(3)).toBe(2);
      expect(fibonacci(4)).toBe(3);
      expect(fibonacci(5)).toBe(5);
      expect(fibonacci(6)).toBe(8);
    });

    test('should throw error for negative numbers', () => {
      expect(() => fibonacci(-1)).toThrow('Negative numbers are not allowed');
    });
  });

  describe('add', () => {
    test('should add two numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(-1, 1)).toBe(0);
      expect(add(0, 0)).toBe(0);
    });
  });

  describe('subtract', () => {
    test('should subtract second number from first correctly', () => {
      expect(subtract(5, 3)).toBe(2);
      expect(subtract(1, 1)).toBe(0);
      expect(subtract(0, 5)).toBe(-5);
    });
  });

  describe('curriedAdd', () => {
    test('should work with partial application', () => {
      const add5 = curriedAdd(5);
      expect(add5(3)).toBe(8);
      expect(add5(0)).toBe(5);
      expect(add5(-5)).toBe(0);
      
      const addNegative = curriedAdd(-2);
      expect(addNegative(3)).toBe(1);
      expect(addNegative(-3)).toBe(-5);
    });

    test('should work with full application', () => {
      expect(curriedAdd(2)(3)).toBe(5);
      expect(curriedAdd(0)(0)).toBe(0);
      expect(curriedAdd(-1)(1)).toBe(0);
    });

    test('should be equivalent to regular add function', () => {
      const testCases = [
        [0, 0],
        [1, 2],
        [5, -3],
        [-2, -2],
        [10, 20]
      ];
      
      testCases.forEach(([a, b]) => {
        expect(curriedAdd(a)(b)).toBe(add(a, b));
      });
    });
  });

  describe('curriedSubtract', () => {
    test('should work with partial application', () => {
      const subtract5 = curriedSubtract(5);
      expect(subtract5(3)).toBe(2);
      expect(subtract5(5)).toBe(0);
      expect(subtract5(10)).toBe(-5);
      
      const subtractFrom0 = curriedSubtract(0);
      expect(subtractFrom0(5)).toBe(-5);
      expect(subtractFrom0(-3)).toBe(3);
    });

    test('should work with full application', () => {
      expect(curriedSubtract(5)(3)).toBe(2);
      expect(curriedSubtract(1)(1)).toBe(0);
      expect(curriedSubtract(0)(5)).toBe(-5);
    });

    test('should be equivalent to regular subtract function', () => {
      const testCases = [
        [0, 0],
        [1, 2],
        [5, 3],
        [-2, -2],
        [10, 20]
      ];
      
      testCases.forEach(([a, b]) => {
        expect(curriedSubtract(a)(b)).toBe(subtract(a, b));
      });
    });
  });
});
