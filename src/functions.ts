/**
 * Calculates the nth number in the Fibonacci sequence.
 * 
 * @param n - The position in the Fibonacci sequence (must be non-negative)
 * @returns The Fibonacci number at position n
 * @throws Error if n is negative
 * 
 * @example
 * fibonacci(0); // Returns 0
 * fibonacci(1); // Returns 1
 * fibonacci(10); // Returns 55
 */
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Searches for a target value in a sorted array using the binary search algorithm.
 * 
 * @param array - A sorted array of numbers to search within
 * @param target - The value to search for in the array
 * @returns The index of the target if found, or -1 if the target is not present in the array
 * 
 * @example
 * binarySearch([1, 3, 5, 7, 9], 5); // Returns 2
 * binarySearch([1, 3, 5, 7, 9], 6); // Returns -1
 * 
 * @remarks
 * Time Complexity: O(log n) where n is the length of the array
 */
export function binarySearch(array: number[], target: number): number {
    let left = 0;
    let right = array.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

/**
 * Sorts an array of numbers in ascending order using the bubble sort algorithm.
 * 
 * @param array - The array of numbers to sort
 * @returns A new sorted array containing the elements in ascending order
 * 
 * @example
 * bubbleSort([5, 3, 8, 1, 2]); // Returns [1, 2, 3, 5, 8]
 * bubbleSort([]); // Returns []
 * 
 * @remarks
 * Time Complexity: O(n²) where n is the length of the array
 * Space Complexity: O(n) as it returns a new array without modifying the original
 */
export function bubbleSort(array: number[]): number[] {
    // Create a copy of the array to avoid modifying the original
    const result = [...array];
    const length = result.length;
    
    // Early return for empty or single-element arrays
    if (length <= 1) return result;
    
    for (let i = 0; i < length; i++) {
        // Flag to optimize and potentially break early if no swaps were made
        let swapped = false;
        
        for (let j = 0; j < length - i - 1; j++) {
            if (result[j] > result[j + 1]) {
                // Swap elements if they are in the wrong order
                [result[j], result[j + 1]] = [result[j + 1], result[j]];
                swapped = true;
            }
        }
        
        // If no swaps were made in this pass, the array is already sorted
        if (!swapped) break;
    }
    
    return result;
}

/**
 * Creates a curried math function that performs an arithmetic operation on two numbers.
 * 
 * @param operation - The arithmetic operation to perform: "add", "subtract", "multiply", or "divide"
 * @returns A function that takes two numbers and performs the specified operation
 * @throws Error if an unsupported operation is provided or division by zero is attempted
 * 
 * @example
 * const add = curriedMath("add");
 * add(2, 3); // Returns 5
 * 
 * const multiply = curriedMath("multiply");
 * multiply(4, 5); // Returns 20
 */
export function curriedMath(operation: string): (a: number, b: number) => number {
    switch (operation) {
        case "add":
            return (a: number, b: number): number => a + b;
        case "subtract":
            return (a: number, b: number): number => a - b;
        case "multiply":
            return (a: number, b: number): number => a * b;
        case "divide":
            return (a: number, b: number): number => {
                if (b === 0) {
                    throw new Error("Division by zero is not allowed");
                }
                return a / b;
            };
        default:
            throw new Error(`Unsupported operation: ${operation}`);
    }
}
