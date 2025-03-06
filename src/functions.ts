export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Supported math operations
 */
export type MathOperation = 'add' | 'subtract' | 'multiply' | 'divide';

/**
 * A curried math function that performs various arithmetic operations.
 * @param operation The operation to perform: 'add', 'subtract', 'multiply', or 'divide'
 * @param a The first number
 * @returns A function that takes a second number and returns the result of the operation
 */
export const curriedMath = (operation: MathOperation) => (a: number) => (b: number): number => {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            if (b === 0) throw new Error("Division by zero is not allowed");
            return a / b;
        default:
            // This should never happen due to TypeScript's type checking
            throw new Error(`Unsupported operation: ${operation}`);
    }
};

/**
 * Convenience curried addition function
 */
export const curriedAdd = curriedMath('add');

/**
 * Convenience curried subtraction function
 */
export const curriedSubtract = curriedMath('subtract');

/**
 * Convenience curried multiplication function
 */
export const curriedMultiply = curriedMath('multiply');

/**
 * Convenience curried division function
 */
export const curriedDivide = curriedMath('divide');
