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