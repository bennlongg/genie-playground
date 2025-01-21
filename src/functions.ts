export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

export const curriedMath = (operator: string) => {
  const operation = (a: number) => (b: number) => {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        if (b === 0) throw new Error("Division by zero is not allowed");
        return a / b;
      default:
        throw new Error("Invalid operator");
    }
  };

  return (...args: number[]) => {
    if (args.length === 1) {
      return operation(args[0]);
    } else if (args.length === 2) {
      return operation(args[0])(args[1]);
    } else {
      throw new Error("Invalid number of arguments");
    }
  };
};
