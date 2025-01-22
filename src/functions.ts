export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

export const curriedMath = () => ({
  add: (a: number) => (b: number) => a + b,
  subtract: (a: number) => (b: number) => a - b,
  multiply: (a: number) => (b: number) => a * b,
  divide: (a: number) => (b: number) => {
    if (b === 0) throw new Error("Division by zero is not allowed");
    return a / b;
  },
  exponentiate: (a: number) => (b: number) => Math.pow(a, b),
});
