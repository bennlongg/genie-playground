export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

type Operation = (a: number, b: number) => number;

export const curriedMath = (operation: Operation) => {
  return (a: number) => {
    return (b: number) => {
      return operation(a, b);
    };
  };
};

const add: Operation = (a, b) => a + b;
const subtract: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => {
  if (b === 0) throw new Error("Division by zero is not allowed");
  return a / b;
};
