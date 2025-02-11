/**
 * Calculates the Fibonacci number for a given integer input.
 * @param {number} n - The input integer for which to calculate the Fibonacci number (must be non-negative).
 * @returns {number} - The Fibonacci number for the given input.
 */
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

  /**
 * Performs a binary search on a sorted array to find the index of a specified target number.
 * @param {Array<number>} arr - The sorted array of numbers to search within.
 * @param {number} target - The number to search for.
 * @returns {number} - The index of the target in the array, or -1 if not found.
 */
export function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  
    return -1;
  }
  