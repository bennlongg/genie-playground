export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

export const add = (a: number, b: number): number => a + b;
export const subtract = (a: number, b: number): number => a - b;

export const curried = <T extends any[], R>(fn: (...args: T) => R, arity: number = fn.length) => {
  return function curriedFn(...args: any[]): any {
    if (args.length >= arity) {
      return fn(...args as any);
    } else {
      return (...rest: any[]) => curriedFn(...args, ...rest);
    }
  };
};

export const curriedAdd = curried(add);
export const curriedSubtract = curried(subtract);

// Usage examples:
// const add5 = curriedAdd(5);
// const result = add5(3); // 8
// const result2 = curriedAdd(5)(3); // 8
