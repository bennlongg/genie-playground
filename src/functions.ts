export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * A curried addition function that takes two numbers and returns their sum.
 * @param a The first number
 * @returns A function that takes a second number and returns the sum
 */
export const curriedAdd = (a: number) => (b: number): number => a + b;
