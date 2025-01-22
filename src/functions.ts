export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

export function isOdd(n: number): boolean {
  if (!Number.isInteger(n)) throw new Error("Input must be an integer");
  return n % 2 !== 0;
}

