export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Determines if a given number is odd.
 * @param {number} n - The number to check.
 * @returns {boolean} True if the number is odd, false otherwise.
 */
export function isodd(n: number): boolean {
    return n % 2 === 1;
}

/**
 * Determines if a given number is even.
 * @param {number} n - The number to check.
 * @returns {boolean} True if the number is even, false otherwise.
 */
export function iseven(n: number): boolean {
    return n % 2 === 0;
}

/**
 * Returns a curried math function based on the provided operator.
 * @param {string} operator - The arithmetic operator ('+', '-', '*', '/').
 * @returns {Function} A curried math function that takes two numbers and performs the specified operation.
 */
export const curriedMath = (operator: string) => (x: number) => (y: number) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    case '/':
      return x / y;
    default:
      throw new Error('Unsupported operator');
  }
};
