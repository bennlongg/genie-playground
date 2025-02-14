/**
 * Computes the nth Fibonacci number using recursion.
 * 
 * @param {number} n - The position in the Fibonacci sequence, must be a non-negative integer.
 * @returns {number} - The nth Fibonacci number.
 * @throws {Error} - Throws an error if n is negative.
 * 
 * @example
 * fibonacci(5); // Returns: 5
 * fibonacci(10); // Returns: 55
 */
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  /**
   * Performs a binary search on a sorted array to find a target number.
   * 
   * @param {number[]} arr - A sorted array of numbers to search within.
   * @param {number} target - The target number to find in the array.
   * @returns {number} - The index of the target in the array, or -1 if not found.
   *
   * @example
   * binarySearch([1, 2, 3, 4, 5], 3); // Returns: 2
   * binarySearch([10, 20, 30, 40, 50], 25); // Returns: -1 (not found)
   */
  export function binarySearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return -1; // Target not found
  }