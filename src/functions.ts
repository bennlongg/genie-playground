/**
 * Calculates the nth Fibonacci number.
 *
 * @param {number} n - The position in the Fibonacci sequence (must be a non-negative integer).
 * @returns {number} The nth Fibonacci number (a positive integer).
 * @throws {Error} If a negative number is passed as input.
 */
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  /**
   * Performs a binary search to find the index of a target number in a sorted array.
   *
   * @param {number[]} arr - A sorted array of numbers.
   * @param {number} target - The number to search for.
   * @returns {number} The index of the target in the array, or -1 if not found.
   */
  export function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid; // Return the index where target is found
      } else if (arr[mid] < target) {
        left = mid + 1; // Move search to the right half
      } else {
        right = mid - 1; // Move search to the left half
      }
    }
  
    return -1; // Target not found
  }