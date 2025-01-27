export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

export const curriedMath = (operation: string) => {
  const applyOperation = (...args: number[]): number | ((...args: number[]) => number) => {
    if (args.length === 2) {
      switch (operation) {
        case "add":
          return args[0] + args[1];
        case "subtract":
          return args[0] - args[1];
        case "divide":
          return args[0] / args[1];
        case "power":
          return Math.pow(args[0], args[1]);
        default:
          throw new Error("Invalid operation");
      }
    } else {
      return (...moreArgs: number[]) => applyOperation(...args.concat(moreArgs));
    }
  };
  return applyOperation;
};
