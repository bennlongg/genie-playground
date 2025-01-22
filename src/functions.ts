export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

export const curriedMathFunction = (operation: string) => {
  return (...args: number[]) => {
    switch (operation) {
      case "add":
        return args.reduce((acc, curr) => acc + curr, 0);
      case "subtract":
        return args.reduce((acc, curr) => acc - curr);
      case "multiply":
        return args.reduce((acc, curr) => acc * curr, 1);
      case "divide":
        if (args.includes(0)) {
          return "Cannot divide by zero";
        }
        return args.reduce((acc, curr) => acc / curr);
      default:
        return "Invalid operation";
    }
  };
};

