export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

export const curriedMathFunction = (operation: Function) => {
  return (...args: any[]) => {
    if (args.length >= operation.length) {
      return operation(...args);
    } else {
      return (...moreArgs: any[]) => {
        return curriedMathFunction(operation)(...args, ...moreArgs);
      };
    }
  };
};
