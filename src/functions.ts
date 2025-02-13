/**
 * Calculates nth fibonacci number.
 * @param {number} n Nth postion of fibonacci to calculate. N should not be negative number
 * @returns {number} Nth fibonacci number to calculate
 */
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }