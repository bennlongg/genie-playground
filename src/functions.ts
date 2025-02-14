/** Computes the nth Fibonacci number recursively.
 * @param {number} n - The nth Fibonacci number to compute.
 * @returns {number} - The nth Fibonacci number.
 * @throws {Error} - If n is negative, throws an error with the message "Negative numbers are not allowed".
 */
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }