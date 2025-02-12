/**
 * Computes the nth Fibonacci number using a recursive approach.
 * @param {number} n - A non-negative integer representing the position in the Fibonacci sequence.
 * @returns {number} - The nth Fibonacci number.
 * @throws {Error} - Throws an error if a negative number is provided as input.
 */
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }