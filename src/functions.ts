export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

export const add = (a: number, b: number): number => a + b;
export const subtract = (a: number, b: number): number => a - b;


const curriedAdd = (a: number) => (b: number) => a + b;
const curriedSubtract = (a: number) => (b: number) => a - b;



const curried = (fn: Function, arity: number = fn.length) => {
    return function curriedFn(...args: any[]): any {
      if (args.length >= arity) {
        return fn(...args);
      } else {
        return (...rest: any[]) => curriedFn(...args, ...rest);
      }
    };
  }