export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

export const curriedMath = (operation: (a: number, b: number) => number) => {
  const applyOperation = (...args: number[]): number | ((...args: number[]) => number) => {
    if (args.length === 2) {
      return operation(args[0], args[1]);
    } else {
      return (...moreArgs: number[]) => applyOperation(...args.concat(moreArgs));
    }
  };
  return applyOperation;
};
