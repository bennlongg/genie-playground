export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

type Operation = "add" | "subtract" | "multiply" | "divide";

export const curriedMath = (operation: Operation) => {
  return (a: number) => (b: number) => {
    switch (operation) {
      case "add":
        return a + b;
      case "subtract":
        return a - b;
      case "multiply":
        return a * b;
      case "divide":
        if (b === 0) throw new Error("Division by zero is not allowed");
        return a / b;
      default:
        throw new Error("Invalid operation");
    }
  };
};

