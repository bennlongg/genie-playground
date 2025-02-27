import { add, subtract, fibonacci, curried } from './functions';

describe('Math Functions', () => {
  describe('fibonacci', () => {
    it('should return correct fibonacci numbers', () => {
      expect(fibonacci(0)).toBe(0);
      expect(fibonacci(1)).toBe(1);
      expect(fibonacci(2)).toBe(1);
      expect(fibonacci(3)).toBe(2);
      expect(fibonacci(4)).toBe(3);
      expect(fibonacci(5)).toBe(5);
      expect(fibonacci(6)).toBe(8);
    });

    it('should throw error for negative numbers', () => {
      expect(() => fibonacci(-1)).toThrow('Negative numbers are not allowed');
    });
  });

  describe('add', () => {
    it('should add two numbers when called with both arguments', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(0, 0)).toBe(0);
      expect(add(-1, 1)).toBe(0);
    });

    it('should work in curried form', () => {
      expect(add(2)(3)).toBe(5);
      expect(add(0)(0)).toBe(0);
      expect(add(-1)(1)).toBe(0);
    });
  });

  describe('subtract', () => {
    it('should subtract second number from first when called with both arguments', () => {
      expect(subtract(5, 3)).toBe(2);
      expect(subtract(3, 5)).toBe(-2);
      expect(subtract(0, 0)).toBe(0);
    });

    it('should work in curried form', () => {
      expect(subtract(5)(3)).toBe(2);
      expect(subtract(3)(5)).toBe(-2);
      expect(subtract(0)(0)).toBe(0);
    });
  });

  describe('curried utility', () => {
    it('should curry functions with multiple arguments', () => {
      const add3 = (a: number, b: number, c: number) => a + b + c;
      const curriedAdd3 = curried(add3);
      
      expect(curriedAdd3(1, 2, 3)).toBe(6);
      expect(curriedAdd3(1)(2, 3)).toBe(6);
      expect(curriedAdd3(1, 2)(3)).toBe(6);
      expect(curriedAdd3(1)(2)(3)).toBe(6);
    });
  });
});
