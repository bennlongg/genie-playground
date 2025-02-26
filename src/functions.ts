/**
 * Calculates the nth Fibonacci number.
 * 
 * The Fibonacci sequence starts with 0 and 1, where each subsequent number
 * is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).
 * 
 * @param n - A non-negative integer representing the position in the Fibonacci sequence
 * @returns The nth Fibonacci number
 * @throws Error if n is negative
 * 
 * @example
 * ```
 * fibonacci(0); // Returns 0
 * fibonacci(1); // Returns 1
 * fibonacci(10); // Returns 55
 * ```
 */
export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Performs a binary search on a sorted array to find the index of a target value.
 * 
 * This function provides a simple interface to the recursive binary search implementation.
 * Binary search has O(log n) time complexity, making it efficient for large sorted arrays.
 * 
 * @param arr - A sorted array of elements to search through
 * @param target - The value to search for in the array
 * @returns The index of the target if found, or -1 if not present in the array
 * 
 * @example
 * ```
 * binarySearch([1, 2, 3, 4, 5], 3); // Returns 2
 * binarySearch(["apple", "banana", "cherry"], "banana"); // Returns 1
 * binarySearch([1, 2, 3], 4); // Returns -1 (not found)
 * ```
 */
export function binarySearch<T>(arr: T[], target: T): number {
  return binarySearchRecursive(arr, target, 0, arr.length - 1);
}

/**
 * Internal recursive implementation of binary search algorithm.
 * 
 * Recursively divides the search space in half until the target is found
 * or the search space is exhausted.
 * 
 * @param arr - A sorted array of elements to search through
 * @param target - The value to search for in the array
 * @param start - The starting index of the current search range
 * @param end - The ending index of the current search range
 * @returns The index of the target if found, or -1 if not present in the array
 */
function binarySearchRecursive<T>(arr: T[], target: T, start: number, end: number): number {
  if (start > end) return -1;
  
  const mid = Math.floor((start + end) / 2);
  
  if (arr[mid] === target) return mid;
  if (arr[mid] > target) return binarySearchRecursive(arr, target, start, mid - 1);
  return binarySearchRecursive(arr, target, mid + 1, end);
}

/**
 * Sorts an array using the bubble sort algorithm.
 * 
 * Bubble sort works by repeatedly stepping through the list, comparing adjacent elements
 * and swapping them if they are in the wrong order. The process is repeated until the list
 * is sorted. This implementation creates a new sorted array without modifying the original.
 * 
 * Note: Bubble sort has O(n²) time complexity and is not efficient for large arrays.
 * 
 * @param arr - The array to be sorted
 * @returns A new sorted array containing the same elements as the input
 * 
 * @example
 * ```
 * bubbleSort([5, 3, 8, 4, 2]); // Returns [2, 3, 4, 5, 8]
 * bubbleSort(["banana", "apple", "cherry"]); // Returns ["apple", "banana", "cherry"]
 * bubbleSort([1]); // Returns [1]
 * ```
 */
export function bubbleSort<T>(arr: T[]): T[] {
  // Create a copy of the array to avoid modifying the original
  const result = [...arr];
  const length = result.length;
  
  // Edge case: empty array or single element
  if (length <= 1) return result;
  
  // Bubble sort implementation
  for (let i = 0; i < length; i++) {
    // Flag to optimize when array is already sorted
    let swapped = false;
    
    // Last i elements are already in place
    for (let j = 0; j < length - i - 1; j++) {
      // Compare adjacent elements and swap if needed
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
        swapped = true;
      }
    }
    
    // If no swapping occurred in this pass, array is sorted
    if (!swapped) break;
  }
  
  return result;
}

/**
 * Creates a curried math function for performing arithmetic operations.
 * 
 * This function takes an operator and returns another function that can either:
 * 1. Take two numbers and immediately perform the operation, or
 * 2. Take one number and return a function that takes a second number to complete the operation
 * 
 * @param operator - The arithmetic operator to use ('+', '-', '*', or '/')
 * @returns A curried function that performs the specified operation
 * 
 * @example
 * ```
 * // Basic usage with two arguments
 * const add = curriedMath('+');
 * add(5, 3); // Returns 8
 * 
 * // Curried usage
 * const addFive = add(5);
 * addFive(3); // Returns 8
 * addFive(10); // Returns 15
 * 
 * // Other operations
 * curriedMath('*')(2, 3); // Returns 6
 * const divideByTwo = curriedMath('/')(2);
 * divideByTwo(10); // Returns 5
 * ```
 */
export function curriedMath(operator: string): (a: number, b?: number) => any {
  return function(a: number, b?: number): any {
    // If only one argument is provided, return a function waiting for the second argument
    if (b === undefined) {
      return function(b: number): number {
        return performOperation(a, b, operator);
      };
    }
    
    // If both arguments are provided, perform the operation immediately
    return performOperation(a, b, operator);
  };
}

/**
 * Helper function to perform the actual arithmetic operation.
 * 
 * @param a - The first number
 * @param b - The second number
 * @param operator - The arithmetic operator
 * @returns The result of the operation, or NaN for invalid operators or divide by zero
 */
function performOperation(a: number, b: number, operator: string): number {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b === 0 ? NaN : a / b;
    default:
      return NaN; // Return NaN for unsupported operators
  }
}
