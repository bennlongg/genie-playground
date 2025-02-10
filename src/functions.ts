/**
 * Calculates the nth Fibonacci number.
 * 
 * @param {number} n - The position in the Fibonacci sequence.
 * @returns {number} - The Fibonacci number at position n.
 * @throws {Error} - If n is a negative number.
 */
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
  