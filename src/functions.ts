/**
 * Compute the Fibonacci number for a given non-negative integer.
 * @param {number} n - The position (non-negative integer) in the Fibonacci sequence.
 * @returns {number} The Fibonacci number at position `n`.
 * @throws {Error} Throws an error if a negative number is provided.
 */
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  /**
   * Perform a binary search to find the index of a target value in a sorted array.
   * @param {number[]} arr - Sorted array of numbers in ascending order.
   * @param {number} target - The value to search for in the array.
   * @returns {number} The index of the target value in the array, or -1 if not found.
   * @example
   * // Iterative implementation
   * return binarySearch(arr, target);
   */
  export function binarySearch(arr: number[], target: number): number {
    let start = 0;
    let end = arr.length - 1;
    
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    
    return -1; // Not found
  }
  
  /**
   * Sort an array of numbers in ascending order using the Bubble Sort algorithm.
   * @param {number[]} arr - Array of numbers to sort.
   * @returns {number[]} A new array with the numbers sorted in ascending order.
   * @example
   * // Uses Bubble Sort, which is a simple yet inefficient sorting method with O(n^2) time complexity.
   */
  export function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  /**
   * Generate a random integer between two specified values, inclusive.
   * @param {number} min - The minimum value for the random number (inclusive).
   * @param {number} max - The maximum value for the random number (inclusive).
   * @returns {number} A random integer within the specified range (inclusive).
   * @example
   * // Generates a random integer between 5 and 10, inclusive
   * return random(5, 10);
   */
  export function random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }