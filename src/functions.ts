type Operation = "add" | "subtract" | "multiply" | "divide";

export function curriedMath(operation: Operation) {
  return (a: number, b: number): number => {
    switch (operation) {
      case "add":
        return a + b;
      case "subtract":
        return a - b;
      case "multiply":
        return a * b;
      case "divide":
        return a / b;
      default:
        throw new Error("Unsupported operation");
    }
  };
}


export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}