/**
 * Calculates the nth Fibonacci number.
 * @param {number} n - The position in the Fibonacci sequence.
 * @returns {number} - The nth Fibonacci number.
 * @throws {Error} - If n is negative.
 */
export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

