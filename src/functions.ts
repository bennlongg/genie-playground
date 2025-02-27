export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

// Base function implementations
const _add = (a: number, b: number): number => a + b;
const _subtract = (a: number, b: number): number => a - b;

// Currying utility
export const curried = <T extends Function>(fn: T, arity: number = fn.length) => {
  return function curriedFn(...args: any[]): any {
    if (args.length >= arity) {
      return fn(...args);
    } else {
      return (...rest: any[]) => curriedFn(...args, ...rest);
    }
  };
};

// Curried versions of the math functions
export const add = curried(_add);
export const subtract = curried(_subtract);

// Usage examples:
// add(1, 2) => 3
// add(1)(2) => 3
// subtract(5, 3) => 2
// subtract(5)(3) => 2
