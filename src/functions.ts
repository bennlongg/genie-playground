type Operation = "add" | "subtract" | "multiply" | "divide";

/**
 * Curried math function that performs the specified arithmetic operation on two numbers.
 * @param operation - The arithmetic operation to be performed ("add", "subtract", "multiply", "divide").
 * @returns A curried function that takes two numbers as arguments and returns the result of the operation.
 */
export function curriedMath(operation: Operation) {
  return (a: number, b: number): number => {
    switch (operation) {
      case "add":
        return a + b;
      case "subtract":
        return a - b;
      case "multiply":
        return a * b;
      case "divide":
        return a / b;
      default:
        throw new Error("Unsupported operation");
    }
  };
}

/**
 * Calculates the n-th Fibonacci number using recursion.
 * @param n - The position in the Fibonacci sequence (non-negative integer).
 * @returns The n-th Fibonacci number.
 * @throws Error if n is negative.
 */
export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Implements a binary search algorithm to find the target value in a sorted array.
 * @param arr - Sorted array of numbers.
 * @param target - The target value to search for.
 * @returns The index of the target in the array, or -1 if not found.
 */
export function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Target not found
}

/**
 * Sorts an array of numbers in ascending order using the bubble sort algorithm.
 * @param arr - Array of numbers to sort.
 * @returns A new array with the elements sorted in ascending order.
 */
export function bubbleSort(arr: number[]): number[] {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements
      }
    }
  }
  return arr;
}